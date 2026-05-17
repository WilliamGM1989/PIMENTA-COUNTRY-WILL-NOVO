import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SITE_LINKS } from "@/lib/config"

export const metadata: Metadata = {
  title: "Cadastro | Pimenta Country AJ",
  robots: { index: false, follow: false },
}

export default function CadastroPage() {
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
            Cadastro em Breve
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Estamos desenvolvendo a área de clientes. Por enquanto, faça seu
            pedido diretamente pelo WhatsApp — atendimento rápido e personalizado!
          </p>
        </div>

        <Link
          href={SITE_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#1ebe5d] transition-colors w-full"
        >
          Fazer pedido pelo WhatsApp
        </Link>

        <Link
          href="/produtos"
          className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors w-full"
        >
          Ver Produtos
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
