"use client"

import * as React from "react"
import Link from "next/link"
import { X, Copy, Check } from "lucide-react"

const STORAGE_KEY = "pimenta-country-promo-seen"
const PROMO_CODE = "PRIMEIRACOMPRA"

export function PromoPopup() {
  const [visible, setVisible] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const already = localStorage.getItem(STORAGE_KEY)
    if (already) return

    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = React.useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "1")
    setVisible(false)
  }, [])

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: select text manually — silent fail
    }
  }, [])

  React.useEffect(() => {
    if (!visible) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [visible, dismiss])

  if (!visible) return null

  return (
    /* Backdrop */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    >
      {/* Blur overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        className={[
          "relative z-10 w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden",
          "bg-[#1a0e07] border border-[#6B3A2A]/40 shadow-2xl",
          "animate-in fade-in zoom-in-95 duration-300",
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gold accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#A0522D] via-[#D4A849] to-[#A0522D]" />

        {/* Close button */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar promoção"
          className="absolute top-3 right-3 p-1.5 rounded-full text-[#A0522D] hover:text-[#D4A849] hover:bg-white/10 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content */}
        <div className="px-6 pt-6 pb-7 sm:px-8 sm:pt-8 sm:pb-9 flex flex-col items-center text-center gap-4">
          {/* Brand name */}
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#A0522D]">
            PIMENTA COUNTRY AJ
          </p>

          {/* Hero text */}
          <h2
            id="promo-title"
            className="font-heading text-3xl sm:text-4xl font-black tracking-wider text-[#D4A849] leading-none"
          >
            BEM-VINDO!
          </h2>

          {/* Divider */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-[#6B3A2A]/50" />
            <span className="text-[#A0522D] text-xs">✦</span>
            <div className="flex-1 h-px bg-[#6B3A2A]/50" />
          </div>

          {/* Promo headline */}
          <p className="text-lg sm:text-xl font-bold text-white leading-snug">
            FRETE GRÁTIS na sua{" "}
            <span className="text-[#D4A849]">primeira compra</span>
          </p>

          {/* Subtitle */}
          <p className="text-sm text-[#C49A6C] -mt-1">
            Use o código abaixo no checkout:
          </p>

          {/* Promo code box */}
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Código copiado!" : "Clique para copiar o código"}
            className={[
              "group flex items-center justify-between gap-3 w-full",
              "rounded-lg border-2 border-dashed px-4 py-3",
              "transition-all duration-200 cursor-pointer select-none",
              copied
                ? "border-green-500/60 bg-green-900/20"
                : "border-[#D4A849]/50 bg-[#2a1508] hover:border-[#D4A849] hover:bg-[#3a1f0a]",
            ].join(" ")}
          >
            <span
              className={[
                "font-mono font-black text-lg sm:text-xl tracking-[0.2em]",
                copied ? "text-green-400" : "text-[#D4A849]",
              ].join(" ")}
            >
              {PROMO_CODE}
            </span>
            <span
              className={[
                "flex items-center gap-1 text-xs font-semibold shrink-0",
                copied ? "text-green-400" : "text-[#A0522D] group-hover:text-[#D4A849]",
              ].join(" ")}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copiar
                </>
              )}
            </span>
          </button>

          {/* CTA */}
          <Link
            href="/produtos"
            onClick={dismiss}
            className="mt-1 w-full rounded-xl bg-gradient-to-r from-[#A0522D] to-[#C06030] hover:from-[#B5612F] hover:to-[#D4722A] text-white font-bold text-sm sm:text-base py-3 px-6 transition-all duration-200 shadow-lg hover:shadow-[#A0522D]/30 hover:shadow-xl"
          >
            Ver Coleção
          </Link>

          {/* Fine print */}
          <p className="text-[11px] text-[#7a5a3a] -mt-1">
            Válido para compras acima de R$ 149,90
          </p>
        </div>
      </div>
    </div>
  )
}

export default PromoPopup
