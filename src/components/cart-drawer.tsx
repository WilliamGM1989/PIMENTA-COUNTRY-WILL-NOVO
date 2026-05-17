"use client"

import Link from "next/link"
import { useState } from "react"
import { X, Plus, Minus, ShoppingBag, CreditCard, Loader2 } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/products"

const WHATSAPP_NUMBER = "554391432721"

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  async function handleMercadoPagoCheckout() {
    setIsCheckingOut(true)
    setCheckoutError(null)
    try {
      // SECURITY: Send only product slug + variant selections.
      // Price is resolved server-side to prevent tampering.
      const cartItems = items.map((item) => ({
        slug: item.product.slug,
        quantity: item.quantity,
        color: item.selectedColor,
        size: item.selectedSize,
      }))

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error ?? 'Erro ao iniciar o checkout.')
      }

      const { init_point } = await response.json()
      window.location.href = init_point
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : 'Erro inesperado. Tente novamente.'
      )
      setIsCheckingOut(false)
    }
  }

  function buildWhatsAppMessage(): string {
    const lines = items.map(
      (item) =>
        `• ${item.product.name} — Cor: ${item.selectedColor}, Tamanho: ${item.selectedSize}, Qtd: ${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`
    )
    const message = [
      "Olá! Gostaria de finalizar meu pedido:",
      "",
      ...lines,
      "",
      `Total: ${formatPrice(total)}`,
    ].join("\n")
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md p-0">
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-foreground">
            <ShoppingBag className="h-5 w-5" />
            Sacola de Compras
            {itemCount > 0 && (
              <span className="ml-1 text-sm font-normal text-muted-foreground">
                ({itemCount} {itemCount === 1 ? "item" : "itens"})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
            <p className="text-lg font-medium text-foreground">Sua sacola está vazia</p>
            <p className="text-sm text-muted-foreground">
              Explore nossa coleção e adicione produtos.
            </p>
            <Link
              href="/produtos"
              onClick={() => onOpenChange(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Ver Produtos
            </Link>
          </div>
        ) : (
          <>
            {/* Item list */}
            <ul className="flex-1 overflow-y-auto divide-y divide-border">
              {items.map((item) => {
                const key = `${item.product.id}-${item.selectedColor}-${item.selectedSize}`
                return (
                  <li key={key} className="flex gap-4 px-6 py-4">
                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Cor: {item.selectedColor} · Tamanho: {item.selectedSize}
                      </p>
                      <p className="text-sm font-bold text-primary mt-1">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          aria-label="Diminuir quantidade"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedColor,
                              item.selectedSize,
                              item.quantity - 1
                            )
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Aumentar quantidade"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedColor,
                              item.selectedSize,
                              item.quantity + 1
                            )
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove button */}
                    <button
                      type="button"
                      aria-label={`Remover ${item.product.name}`}
                      onClick={() =>
                        removeItem(item.product.id, item.selectedColor, item.selectedSize)
                      }
                      className="self-start p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Footer */}
            <div className="border-t border-border px-6 py-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Total</span>
                <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
              </div>

              {/* Mercado Pago button */}
              <button
                type="button"
                onClick={handleMercadoPagoCheckout}
                disabled={isCheckingOut}
                className="flex items-center justify-center gap-2 rounded-full bg-[#009ee3] px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isCheckingOut ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <CreditCard className="h-4 w-4" />
                )}
                {isCheckingOut ? 'Aguarde...' : 'Pagar com Mercado Pago'}
              </button>

              {checkoutError && (
                <p className="text-xs text-red-500 text-center">{checkoutError}</p>
              )}

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground">ou</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* WhatsApp button */}
              <Link
                href={buildWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#1ebe5d] hover:scale-[1.02] active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Finalizar Pedido
              </Link>

              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex items-center justify-center rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-95"
              >
                Continuar Comprando
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default CartDrawer
