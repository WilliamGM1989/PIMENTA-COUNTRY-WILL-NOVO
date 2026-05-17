"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const CONSENT_KEY = "pimenta-country-cookie-consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-[300] bg-foreground text-background px-4 py-4 sm:py-3"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <p className="text-xs leading-relaxed flex-1 text-background/80">
          Usamos cookies essenciais para o funcionamento do carrinho e da loja.
          Ao continuar, você concorda com nossa{" "}
          <Link
            href="/privacidade"
            className="underline underline-offset-2 hover:text-background transition-colors"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-background text-foreground px-5 py-2 text-xs font-semibold hover:bg-background/90 transition-colors"
        >
          Entendi e aceito
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
