import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SITE_LINKS } from "@/lib/config"

export const metadata: Metadata = {
  title: "Área do Cliente | Pimenta Country AJ",
  // Não indexar — página sem backend real
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm bg-card rounded-2xl shadow-lg ring-1 ring-foreground/10 p-8 flex flex-col items-center gap-6 text-center">
        <Link href="/" aria-label="Pimenta Country AJ — página inicial">
          <Image
            src="/brand/logo.jpg"
            alt="Pimenta Country AJ"
            width={80}
            height={80}
            className="rounded-full"
            priority
          />
        </Link>

        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Área do Cliente
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            A área de clientes está em desenvolvimento. Por enquanto, fale
            diretamente conosco pelo WhatsApp para acompanhar seu pedido.
          </p>
        </div>

        <Link
          href={SITE_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#1ebe5d] transition-colors w-full"
        >
          Falar pelo WhatsApp
        </Link>

        <Link
          href="/"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Voltar à loja
        </Link>
      </div>
    </div>
  )
}
