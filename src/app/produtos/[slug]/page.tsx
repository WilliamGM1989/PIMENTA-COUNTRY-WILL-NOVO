import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  formatPrice,
} from "@/lib/products";
import { ProductActions } from "@/components/product-actions";
import { ProductGallery } from "@/components/product-gallery";
import { ProductSchema } from "@/components/structured-data";

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

// ─── Dynamic metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produto não encontrado | Pimenta Country AJ" };
  }

  return {
    title: `${product.name} | Pimenta Country AJ`,
    description: product.description,
    keywords: [
      product.name,
      "cinto de couro",
      "cinto artesanal",
      product.category === "country" ? "cinto country" : "cinto social",
      "couro legítimo",
      "Pimenta Country AJ",
    ],
    openGraph: {
      title: `${product.name} | Pimenta Country AJ`,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
      type: "website",
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Pimenta Country AJ`,
      description: product.description,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getProductsByCategory(product.category).filter(
    (p) => p.id !== product.id
  );

  return (
    <div className="min-h-screen bg-background">
      <ProductSchema product={product} />
      {/* ── Breadcrumb ── */}
      <nav className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Início
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href="/produtos"
                className="hover:text-primary transition-colors"
              >
                Produtos
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground font-medium truncate max-w-[200px]">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Main product section ── */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Image gallery ── */}
          <ProductGallery
            images={product.images}
            productName={product.name}
            badge={product.badge}
          />

          {/* ── Product info + actions ── */}
          <div className="flex flex-col gap-6">
            {/* Category label */}
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {product.category === "country" ? "Linha Country" : "Linha Social"}
            </span>

            {/* Name */}
            <h1 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm text-muted-foreground">
                ou 3x de {formatPrice(product.price / 3)} sem juros
              </span>
            </div>

            {/* Short description */}
            <p className="text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Interactive selectors + cart — client component */}
            <ProductActions product={product} />

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Features */}
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-foreground">
                Características
              </h2>
              <ul className="flex flex-col gap-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping & trust badges */}
            <div className="rounded-xl border border-border bg-muted/40 p-4">
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  Frete grátis para todo o Brasil acima de R$&nbsp;300
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  Troca e devolução em até 30 dias
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  Pagamento seguro — Pix, cartão ou boleto
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Long description ── */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">
              Sobre o produto
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {product.longDescription}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/40 p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-foreground">
              Cuidados com o couro
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>• Limpe com pano seco ou levemente úmido</li>
              <li>• Aplique cera ou graxa para couro a cada 3 meses</li>
              <li>• Evite exposição prolongada ao sol e à água</li>
              <li>• Armazene em local seco e arejado</li>
              <li>• Não dobre por longo período</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-heading text-2xl font-bold text-foreground">
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/produtos/${rel.slug}`}
                  className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-muted">
                    {rel.badge && (
                      <span className="absolute top-3 left-3 z-10 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                        {rel.badge}
                      </span>
                    )}
                    <Image
                      src={rel.images[0] ?? "/placeholder.jpg"}
                      alt={rel.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                      {rel.category === "country" ? "Linha Country" : "Linha Social"}
                    </p>
                    <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {rel.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {rel.description}
                    </p>
                    <p className="mt-3 text-lg font-bold text-primary">
                      {formatPrice(rel.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
