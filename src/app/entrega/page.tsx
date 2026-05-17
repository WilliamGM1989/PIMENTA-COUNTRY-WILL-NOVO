import type { Metadata } from "next"
import Link from "next/link"
import { Truck, MapPin, Clock, Package } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Prazo de Entrega | Pimenta Country AJ",
  description:
    "Consulte os prazos de entrega da Pimenta Country AJ. Entregamos cintos de couro artesanais para todo o Brasil via Correios (PAC e SEDEX). Frete grátis em pedidos acima de R$ 299,90.",
  alternates: { canonical: "/entrega" },
  openGraph: {
    title: "Prazo de Entrega | Pimenta Country AJ",
    description:
      "Entregamos cintos de couro artesanais para todo o Brasil. Frete grátis acima de R$ 299,90.",
    type: "website",
    locale: "pt_BR",
  },
}

const methods = [
  {
    icon: Truck,
    name: "PAC",
    subtitle: "Econômico",
    time: "5 a 10 dias úteis",
    description:
      "Modalidade mais econômica dos Correios. Indicada para quem não tem pressa. O prazo começa a contar após a confirmação do pagamento e despacho do pedido.",
    price: "Calculado no checkout",
    highlight: "Grátis acima de R$ 299,90",
    highlightColor: "text-green-700 bg-green-50 border-green-200",
  },
  {
    icon: Truck,
    name: "SEDEX",
    subtitle: "Expresso",
    time: "2 a 5 dias úteis",
    description:
      "Entrega expressa dos Correios com maior velocidade. Ideal para quem precisa do produto mais rápido. Disponível para a maioria dos CEPs brasileiros.",
    price: "Calculado no checkout",
    highlight: "Entrega prioritária",
    highlightColor: "text-primary bg-primary/10 border-primary/20",
  },
]

const regions = [
  {
    name: "Sul e Sudeste",
    states: "SP, RJ, MG, ES, PR, SC, RS",
    pac: "5–7 dias úteis",
    sedex: "2–3 dias úteis",
  },
  {
    name: "Centro-Oeste",
    states: "GO, MT, MS, DF",
    pac: "6–8 dias úteis",
    sedex: "2–4 dias úteis",
  },
  {
    name: "Nordeste",
    states: "BA, SE, AL, PE, PB, RN, CE, PI, MA",
    pac: "7–10 dias úteis",
    sedex: "3–5 dias úteis",
  },
  {
    name: "Norte",
    states: "PA, AM, AC, RR, AP, RO, TO",
    pac: "8–12 dias úteis",
    sedex: "4–6 dias úteis",
  },
]

const trackingSteps = [
  {
    icon: Package,
    title: "Pedido Confirmado",
    description: "Seu pagamento foi aprovado e o pedido está sendo preparado.",
  },
  {
    icon: Truck,
    title: "Pedido Despachado",
    description:
      "O pacote foi entregue aos Correios. Você recebe o código de rastreio por e-mail e WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Em Trânsito",
    description:
      "Acompanhe a jornada do seu cinto em tempo real pelo site dos Correios (correios.com.br) usando o código de rastreio.",
  },
  {
    icon: Clock,
    title: "Entregue",
    description:
      "O pedido foi entregue no endereço informado. Qualquer problema, fale conosco imediatamente.",
  },
]

export default function EntregaPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Atendimento
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Prazo de Entrega
            </h1>
            <p className="text-muted-foreground leading-relaxed sm:text-lg">
              Entregamos para todo o Brasil com segurança e agilidade via
              Correios. Confira os prazos estimados e como rastrear seu pedido.
            </p>
          </div>
        </div>
      </section>

      {/* ── Handcrafted note ── */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Cada peça é feita à mão.</span>{" "}
              Por isso, reservamos até 2 dias úteis para preparar seu pedido com o cuidado
              artesanal que a família Silva pratica há mais de 30 anos.
            </p>
            <Link
              href="/nossa-historia"
              className="shrink-0 text-xs font-semibold text-accent hover:underline underline-offset-4 transition-colors"
            >
              Nossa história →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Free shipping banner ── */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-primary-foreground">
            Frete grátis via PAC para todo o Brasil em pedidos acima de{" "}
            <span className="underline underline-offset-2">R$ 299,90</span>
          </p>
        </div>
      </div>

      {/* ── Delivery methods ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              Modalidades de Envio
            </h2>
            <p className="max-w-xl text-muted-foreground leading-relaxed">
              Trabalhamos exclusivamente com os Correios para garantir
              rastreabilidade e segurança em todas as entregas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {methods.map(({ icon: Icon, name, subtitle, time, description, price, highlight, highlightColor }) => (
              <div
                key={name}
                className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-bold text-foreground leading-none">
                        {name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <span className="font-heading text-xl font-bold text-foreground leading-none">
                      {time}
                    </span>
                    <span className="text-xs text-muted-foreground">dias úteis</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Valor:</span>
                    <span className="font-medium text-foreground">{price}</span>
                  </div>
                  <span className={`inline-flex items-center self-start rounded-full border px-3 py-0.5 text-xs font-semibold ${highlightColor}`}>
                    {highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Regions ── */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-10">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" aria-hidden />
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Prazos por Região
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Os prazos abaixo são estimativas a partir da data de despacho
              do pedido e podem variar conforme a localidade de destino.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-4 bg-muted border-b border-border">
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Região
              </div>
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Estados
              </div>
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                PAC
              </div>
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                SEDEX
              </div>
            </div>
            {regions.map((region, idx) => (
              <div key={region.name}>
                <div className="grid grid-cols-4 items-center">
                  <div className="px-4 py-4 text-sm font-semibold text-foreground">
                    {region.name}
                  </div>
                  <div className="px-4 py-4 text-xs text-muted-foreground leading-relaxed">
                    {region.states}
                  </div>
                  <div className="px-4 py-4 text-sm text-foreground">
                    {region.pac}
                  </div>
                  <div className="px-4 py-4 text-sm text-foreground">
                    {region.sedex}
                  </div>
                </div>
                {idx < regions.length - 1 && (
                  <div className="border-b border-border" />
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            * Prazos podem ser maiores em datas comemorativas, feriados ou
            situações excepcionais dos Correios.
          </p>
        </div>
      </section>

      <Separator />

      {/* ── Tracking ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              Como Rastrear seu Pedido
            </h2>
            <p className="max-w-xl text-muted-foreground leading-relaxed">
              Após o despacho, você receberá o código de rastreio por
              e-mail e WhatsApp. Veja o caminho do seu cinto até você.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {trackingSteps.map(({ icon: Icon, title, description }, idx) => (
              <div key={title} className="flex flex-col gap-4 relative">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                      {idx + 1}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://www.correios.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Truck className="h-4 w-4" aria-hidden />
              Rastrear no site dos Correios
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
