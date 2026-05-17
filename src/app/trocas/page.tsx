import type { Metadata } from "next"
import Link from "next/link"
import {
  RotateCcw,
  Clock,
  Package,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Trocas e Devoluções | Pimenta Country AJ",
  description:
    "Saiba como solicitar trocas e devoluções na Pimenta Country AJ. Política de 30 dias para trocas e 7 dias para devoluções, conforme o Código de Defesa do Consumidor.",
  alternates: { canonical: "/trocas" },
  openGraph: {
    title: "Trocas e Devoluções | Pimenta Country AJ",
    description:
      "Política de trocas e devoluções da Pimenta Country AJ — simples, transparente e em conformidade com o CDC.",
    type: "website",
    locale: "pt_BR",
  },
}

const WHATSAPP_NUMBER = "554391432721"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Preciso solicitar uma troca/devolução de um pedido da Pimenta Country AJ."
)
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const policyCards = [
  {
    icon: RotateCcw,
    title: "30 dias para Troca",
    description:
      "Troque por outro tamanho, modelo ou cor em até 30 dias corridos após o recebimento. O produto deve estar sem uso e com embalagem original.",
    highlight: "30 dias",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Clock,
    title: "7 dias para Devolução",
    description:
      "Conforme o Código de Defesa do Consumidor, você tem 7 dias corridos para se arrepender da compra com reembolso integral, sem necessidade de justificativa.",
    highlight: "7 dias",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Package,
    title: "Embalagem Original",
    description:
      "O produto deve ser devolvido na embalagem original, sem uso, com todas as etiquetas e acessórios. Produtos usados ou danificados pelo cliente não são elegíveis.",
    highlight: "Sem uso",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: CheckCircle2,
    title: "Frete de Devolução",
    description:
      "Em caso de defeito de fabricação ou arrependimento (7 dias CDC), o frete de devolução é por nossa conta. Em trocas por preferência, o custo de envio é do cliente.",
    highlight: "Grátis em defeitos",
    color: "text-accent",
    bg: "bg-accent/10",
  },
]

const conditions = [
  { ok: true, text: "Produto sem sinais de uso, lavagem ou alteração" },
  { ok: true, text: "Embalagem original intacta com etiquetas" },
  { ok: true, text: "Nota fiscal ou comprovante de compra" },
  { ok: true, text: "Solicitação feita dentro do prazo estabelecido" },
  { ok: false, text: "Produtos personalizados ou sob medida (exceto defeito)" },
  { ok: false, text: "Produtos com marcas de uso, suor ou alterações" },
  { ok: false, text: "Itens sem embalagem original ou com etiquetas removidas" },
]

const steps = [
  {
    number: "01",
    title: "Entre em Contato",
    description:
      "Fale conosco pelo WhatsApp ou e-mail informando o número do pedido, o motivo da troca/devolução e fotos do produto (se houver defeito).",
  },
  {
    number: "02",
    title: "Aguarde a Confirmação",
    description:
      "Nossa equipe analisará sua solicitação em até 2 dias úteis e enviará as instruções de envio com o código de postagem (quando aplicável).",
  },
  {
    number: "03",
    title: "Envie o Produto",
    description:
      "Embale o produto com cuidado e poste nos Correios utilizando o código fornecido. Guarde o comprovante de postagem até a conclusão do processo.",
  },
  {
    number: "04",
    title: "Receba o Novo Produto ou Reembolso",
    description:
      "Após o recebimento e conferência, enviaremos o novo produto (troca) ou processaremos o reembolso em até 7 dias úteis via Pix ou no cartão de crédito.",
  },
]

export default function TrocasPage() {
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
              Trocas e Devoluções
            </h1>
            <p className="text-muted-foreground leading-relaxed sm:text-lg">
              Sua satisfação é nossa prioridade. Confira nossa política clara e
              sem complicação para trocas e devoluções.
            </p>
          </div>
        </div>
      </section>

      {/* ── Policy Cards ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              Nossa Política
            </h2>
            <p className="max-w-xl text-muted-foreground leading-relaxed">
              Simples, transparente e em conformidade com o Código de Defesa
              do Consumidor (Lei nº 8.078/1990).
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {policyCards.map(({ icon: Icon, title, description, highlight, color, bg }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${bg} ${color}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>
                    {highlight}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Conditions ── */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Condições Aceitas
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para que a troca ou devolução seja processada, o produto
                  deve atender às seguintes condições:
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {conditions.map(({ ok, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    {ok ? (
                      <CheckCircle2
                        className="h-5 w-5 text-green-600 shrink-0 mt-0.5"
                        aria-label="Aceito"
                      />
                    ) : (
                      <AlertCircle
                        className="h-5 w-5 text-destructive shrink-0 mt-0.5"
                        aria-label="Não aceito"
                      />
                    )}
                    <span className={`text-sm leading-relaxed ${ok ? "text-foreground" : "text-muted-foreground"}`}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prazo de reembolso */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Prazo de Reembolso
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Após recebermos e conferirmos o produto devolvido:
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    method: "Pix",
                    time: "Até 3 dias úteis",
                    detail: "Reembolso direto na chave Pix informada",
                  },
                  {
                    method: "Cartão de Crédito",
                    time: "Até 2 faturas",
                    detail: "Estorno processado pela operadora do cartão",
                  },
                  {
                    method: "Boleto / Débito",
                    time: "Até 7 dias úteis",
                    detail: "Transferência bancária para conta informada",
                  },
                ].map(({ method, time, detail }) => (
                  <div
                    key={method}
                    className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-foreground">
                        {method}
                      </span>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        {time}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Step by Step ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              Como Solicitar
            </h2>
            <p className="max-w-xl text-muted-foreground leading-relaxed">
              Processo simples em 4 etapas. Do contato até o reembolso
              ou novo produto na sua porta.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg">
                  {number}
                </div>
                <div className="flex flex-col gap-2">
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
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Precisa de ajuda?
            </h2>
            <p className="max-w-xl text-primary-foreground/80 leading-relaxed sm:text-lg">
              Nossa equipe está pronta para te atender pelo WhatsApp.
              Fale com a gente agora — rápido e sem burocracia.
            </p>
            <Link
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#20c05a] shadow-sm"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
