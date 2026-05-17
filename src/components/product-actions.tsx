"use client";

import { useState, useCallback } from "react";
import { ShoppingCart, MessageCircle, Minus, Plus, Check } from "lucide-react";

import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/components/cart-provider";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProductActionsProps {
  product: Product;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildWhatsAppUrl(
  product: Product,
  selectedColor: string,
  selectedSize: string,
  quantity: number
): string {
  const phone = "554391432721";
  const message = [
    `Olá! Tenho interesse no produto:`,
    ``,
    `*${product.name}*`,
    `Cor: ${selectedColor}`,
    `Tamanho: ${selectedSize}`,
    `Quantidade: ${quantity}`,
    `Valor: ${formatPrice(product.price * quantity)}`,
    ``,
    `Poderia me ajudar a finalizar o pedido?`,
  ].join("\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ProductActions({ product }: ProductActionsProps) {
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.name ?? ""
  );
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedColorObj = product.colors.find((c) => c.name === selectedColor);

  const decrementQty = useCallback(() => {
    setQuantity((q) => Math.max(1, q - 1));
  }, []);

  const incrementQty = useCallback(() => {
    setQuantity((q) => Math.min(99, q + 1));
  }, []);

  const handleAddToCart = useCallback(() => {
    if (!selectedSize) return;

    addItem(product, selectedColor, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }, [product, selectedColor, selectedSize, quantity, addItem]);

  const canAddToCart = selectedSize.length > 0 && product.inStock;
  const whatsAppUrl = buildWhatsAppUrl(product, selectedColor, selectedSize, quantity);

  return (
    <div className="flex flex-col gap-5">
      {/* ── Color selector ── */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Cor</span>
          {selectedColorObj && (
            <span className="text-sm text-muted-foreground">
              {selectedColorObj.name}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((color) => {
            const isSelected = selectedColor === color.name;
            return (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color.name)}
                aria-label={`Cor: ${color.name}`}
                aria-pressed={isSelected}
                title={color.name}
                className={`relative h-9 w-9 rounded-full border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  isSelected
                    ? "border-primary scale-110 shadow-md"
                    : "border-border hover:border-primary/60 hover:scale-105"
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {isSelected && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Check
                      className="h-4 w-4 drop-shadow"
                      style={{
                        color: isLightColor(color.hex) ? "#2C1810" : "#FFF8F0",
                      }}
                    />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Size selector ── */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Tamanho</span>
          {!selectedSize && (
            <span className="text-xs text-destructive">Selecione um tamanho</span>
          )}
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
          {product.sizes.map((size) => {
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                aria-pressed={isSelected}
                className={`rounded-lg border px-2 py-2 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 ${
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-card text-foreground hover:border-primary/60 hover:bg-muted"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">
          Meça a circunferência do quadril onde o cinto ficará posicionado.
        </p>
      </div>

      {/* ── Quantity selector ── */}
      <div>
        <span className="mb-2 block text-sm font-semibold text-foreground">
          Quantidade
        </span>
        <div className="flex items-center gap-0 rounded-lg border border-border w-fit overflow-hidden">
          <button
            type="button"
            onClick={decrementQty}
            disabled={quantity <= 1}
            aria-label="Diminuir quantidade"
            className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="flex h-10 w-12 items-center justify-center border-x border-border text-sm font-semibold tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            onClick={incrementQty}
            disabled={quantity >= 99}
            aria-label="Aumentar quantidade"
            className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── Selected options summary ── */}
      {(selectedColor || selectedSize) && (
        <div className="rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Resumo: </span>
          {selectedColor && <span>{selectedColor}</span>}
          {selectedColor && selectedSize && <span> · </span>}
          {selectedSize && <span>{selectedSize}</span>}
          <span> · {quantity}x</span>
          <span className="ml-2 font-semibold text-primary">
            {formatPrice(product.price * quantity)}
          </span>
        </div>
      )}

      {/* ── CTA buttons ── */}
      <div className="flex flex-col gap-3 sm:flex-row">
        {/* Add to cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!canAddToCart}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
            canAddToCart
              ? added
                ? "bg-green-600 text-white shadow-md"
                : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg active:scale-[0.98]"
              : "cursor-not-allowed bg-muted text-muted-foreground"
          }`}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" />
              Adicionado!
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              {!product.inStock
                ? "Indisponível"
                : !selectedSize
                  ? "Selecione o tamanho"
                  : "Adicionar ao Carrinho"}
            </>
          )}
        </button>

        {/* WhatsApp */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-transparent px-6 py-3.5 text-sm font-semibold text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          Comprar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}

// ─── Utility ──────────────────────────────────────────────────────────────────

/**
 * Returns true if the hex color is perceptually light
 * so we can decide whether to use a dark or light checkmark icon.
 */
function isLightColor(hex: string): boolean {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  // Perceived luminance (ITU-R BT.709)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 140;
}
