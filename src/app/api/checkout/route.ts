import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { Preference } from 'mercadopago';
import { mercadoPagoClient } from '@/lib/mercadopago';
import { getProductBySlug, type Product } from '@/lib/products';

// --- Security: Server-side cart item schema ---
// Only accept product identifiers + variant selections from the client.
// Prices are ALWAYS resolved server-side from the product catalog to prevent
// price-tampering attacks (OWASP A04:2021 - Insecure Design).

interface CartItemInput {
  slug: string;       // Product identifier -- resolved server-side
  quantity: number;
  color: string;
  size: string;
}

// --- Security: Basic rate-limit using in-memory sliding window ---
// Prevents automated abuse of the checkout endpoint.
// For production at scale, replace with Redis or an edge rate-limiter.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10;  // max 10 checkout attempts per IP per minute
const ipRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestLog.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  ipRequestLog.set(ip, recent);

  // Prevent unbounded memory growth: evict stale entries periodically
  if (ipRequestLog.size > 5_000) {
    for (const [key, ts] of ipRequestLog) {
      if (ts.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        ipRequestLog.delete(key);
      }
    }
  }

  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

// --- Security: Input validation helpers ---

function isValidQuantity(q: unknown): q is number {
  return typeof q === 'number' && Number.isInteger(q) && q >= 1 && q <= 50;
}

function isNonEmptyString(s: unknown): s is string {
  return typeof s === 'string' && s.trim().length > 0 && s.length <= 200;
}

export async function POST(request: NextRequest) {
  try {
    // --- Rate limiting ---
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Muitas tentativas. Aguarde um momento e tente novamente.' },
        { status: 429 }
      );
    }

    // --- Parse & validate body ---
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Corpo da requisicao invalido.' },
        { status: 400 }
      );
    }

    const { items } = body as { items: unknown };

    if (!Array.isArray(items) || items.length === 0 || items.length > 20) {
      return NextResponse.json(
        { error: 'Nenhum item no carrinho.' },
        { status: 400 }
      );
    }

    // --- Validate each item and resolve prices server-side ---
    const validatedItems: Array<{
      product: Product;
      quantity: number;
      color: string;
      size: string;
    }> = [];

    for (const raw of items) {
      const item = raw as CartItemInput;

      if (!isNonEmptyString(item.slug)) {
        return NextResponse.json(
          { error: 'Produto invalido no carrinho.' },
          { status: 400 }
        );
      }

      if (!isValidQuantity(item.quantity)) {
        return NextResponse.json(
          { error: 'Quantidade invalida no carrinho.' },
          { status: 400 }
        );
      }

      if (!isNonEmptyString(item.color) || !isNonEmptyString(item.size)) {
        return NextResponse.json(
          { error: 'Cor ou tamanho invalido.' },
          { status: 400 }
        );
      }

      // CRITICAL: Price resolved from server-side catalog, not from client input
      const product = getProductBySlug(item.slug);
      if (!product || !product.inStock) {
        return NextResponse.json(
          { error: `Produto "${item.slug}" nao encontrado ou indisponivel.` },
          { status: 400 }
        );
      }

      // Validate that the selected color and size actually exist for this product
      const validColor = product.colors.some((c) => c.name === item.color);
      const validSize = product.sizes.includes(item.size);
      if (!validColor || !validSize) {
        return NextResponse.json(
          { error: `Opcao invalida para o produto "${product.name}".` },
          { status: 400 }
        );
      }

      validatedItems.push({
        product,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
      });
    }

    const siteUrl = process.env.SITE_URL ?? 'http://localhost:3005';
    // SECURITY: Use cryptographically random UUID instead of predictable Date.now()
    // Prevents order reference enumeration/guessing attacks
    const externalReference = randomUUID();

    const preference = new Preference(mercadoPagoClient);

    const response = await preference.create({
      body: {
        items: validatedItems.map((item, index) => ({
          id: `item-${item.product.id}-${index}`,
          title: `${item.product.name} — Cor: ${item.color}, Tamanho: ${item.size}`,
          description: item.product.description,
          quantity: item.quantity,
          // SECURITY: Price from server-side catalog -- never from client
          unit_price: item.product.price,
          currency_id: 'BRL',
        })),
        back_urls: {
          success: `${siteUrl}/checkout/resultado?status=approved`,
          failure: `${siteUrl}/checkout/resultado?status=rejected`,
          pending: `${siteUrl}/checkout/resultado?status=pending`,
        },
        auto_return: 'approved',
        statement_descriptor: 'PIMENTA COUNTRY',
        external_reference: externalReference,
      },
    });

    return NextResponse.json({ init_point: response.init_point });
  } catch (error) {
    console.error('Erro ao criar preferencia no Mercado Pago:', error);
    // SECURITY: Do not leak internal error details to the client
    return NextResponse.json(
      { error: 'Erro ao processar o checkout. Tente novamente.' },
      { status: 500 }
    );
  }
}
