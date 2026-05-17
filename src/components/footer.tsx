import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Shield, Lock, MapPin, AtSign } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const WHATSAPP_NUMBER = "554391432721"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Pimenta Country AJ e gostaria de saber mais sobre os produtos."
)
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const productLinks = [
  { label: "Todos os Cintos", href: "/produtos" },
  { label: "Cintos Country", href: "/produtos?categoria=country" },
  { label: "Cintos Social", href: "/produtos?categoria=social" },
]

const institutionalLinks = [
  { label: "Nossa História", href: "/nossa-historia" },
  { label: "Cintos Country", href: "/produtos?categoria=country" },
  { label: "Blog", href: "/blog" },
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos de Uso", href: "/termos" },
]

const serviceLinks = [
  { label: "Fale Conosco", href: "/contato" },
  { label: "WhatsApp", href: WHATSAPP_HREF, external: true },
  { label: "Trocas e Devoluções", href: "/trocas" },
  { label: "Prazo de Entrega", href: "/entrega" },
  { label: "FAQ", href: "/faq" },
]

function PaymentIcons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Pix */}
      <div className="flex h-8 w-12 items-center justify-center rounded border border-border bg-white overflow-hidden">
        <svg viewBox="0 0 48 32" width="48" height="32" aria-label="Pix">
          <rect width="48" height="32" fill="#32BCAD" rx="3" />
          <text x="24" y="21" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">pix</text>
        </svg>
      </div>
      {/* Visa */}
      <div className="flex h-8 w-12 items-center justify-center rounded border border-border bg-white overflow-hidden">
        <svg viewBox="0 0 48 32" width="48" height="32" aria-label="Visa">
          <rect width="48" height="32" fill="#1A1F71" rx="3" />
          <text x="24" y="22" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">VISA</text>
        </svg>
      </div>
      {/* Mastercard */}
      <div className="flex h-8 w-12 items-center justify-center rounded border border-border bg-white overflow-hidden">
        <svg viewBox="0 0 48 32" width="48" height="32" aria-label="Mastercard">
          <rect width="48" height="32" fill="white" rx="3" />
          <circle cx="18" cy="16" r="9" fill="#EB001B" />
          <circle cx="30" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 9.3a9 9 0 0 1 0 13.4A9 9 0 0 1 24 9.3z" fill="#FF5F00" />
        </svg>
      </div>
      {/* Elo */}
      <div className="flex h-8 w-12 items-center justify-center rounded border border-border bg-white overflow-hidden">
        <svg viewBox="0 0 48 32" width="48" height="32" aria-label="Elo">
          <rect width="48" height="32" fill="#000" rx="3" />
          <text x="24" y="22" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">elo</text>
          <circle cx="9" cy="16" r="3" fill="#FFD700" />
        </svg>
      </div>
      {/* Amex */}
      <div className="flex h-8 w-12 items-center justify-center rounded border border-border bg-white overflow-hidden">
        <svg viewBox="0 0 48 32" width="48" height="32" aria-label="American Express">
          <rect width="48" height="32" fill="#2E77BB" rx="3" />
          <text x="24" y="21" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">AMEX</text>
        </svg>
      </div>
      {/* Boleto */}
      <div className="flex h-8 w-12 items-center justify-center rounded border border-border bg-white overflow-hidden">
        <svg viewBox="0 0 48 32" width="48" height="32" aria-label="Boleto">
          <rect width="48" height="32" fill="white" rx="3" />
          {[6,9,11,14,17,19,22,25,28,30,33,36,39,42].map((x, i) => (
            <rect key={i} x={x} y="5" width={i % 3 === 0 ? 2 : 1} height="16" fill="#222" />
          ))}
          <text x="24" y="29" textAnchor="middle" fill="#444" fontSize="6" fontFamily="sans-serif">BOLETO</text>
        </svg>
      </div>
    </div>
  )
}

interface FooterColumnProps {
  title: string
  links: Array<{ label: string; href: string; external?: boolean }>
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Image
              src="/brand/logo.jpg"
              alt="Pimenta Country AJ"
              width={100}
              height={100}
              className="rounded-full"
            />

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Cintos de couro artesanais com tradição e qualidade em cada peça.
              Do campo à cidade, estilo autêntico que conta histórias.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span>Sertanópolis, PR</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              <Link
                href="https://instagram.com/ajpimentacountry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Pimenta Country AJ"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <AtSign className="h-4 w-4" />
              </Link>
              <Link
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Pimenta Country AJ"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Nav columns */}
          <FooterColumn title="Produtos" links={productLinks} />
          <FooterColumn title="Institucional" links={institutionalLinks} />
          <FooterColumn title="Atendimento" links={serviceLinks} />
        </div>
      </div>

      <Separator />

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Payment methods */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Formas de Pagamento
            </span>
            <PaymentIcons />
          </div>

          {/* Security badges */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Compra Segura
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                <Lock className="h-3 w-3 text-green-600" />
                SSL Seguro
              </div>
              <div className="flex items-center gap-1.5 rounded border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                <Shield className="h-3 w-3 text-green-600" />
                Compra Protegida
              </div>
            </div>
          </div>

        </div>

        <Separator className="my-5" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; 2026 Pimenta Country AJ. Todos os direitos reservados.
        </p>
      </div>

    </footer>
  )
}

export default Footer
