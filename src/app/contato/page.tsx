import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AtSign, Clock, Mail, MessageCircle, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contato | Pimenta Country AJ — Fale Conosco",
  description:
    "Entre em contato com a Pimenta Country AJ de Sertanópolis, Paraná. Atendimento via WhatsApp, e-mail e Instagram. Tire dúvidas sobre cintos de couro artesanais, faça seu pedido ou solicite um cinto personalizado.",
  keywords: [
    "contato Pimenta Country",
    "WhatsApp Pimenta Country",
    "cinto personalizado",
    "atendimento",
    "Sertanópolis Paraná",
    "comprar cinto de couro",
  ],
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato | Pimenta Country AJ — Fale Conosco",
    description:
      "Fale com a Pimenta Country AJ de Sertanópolis, PR pelo WhatsApp, e-mail ou Instagram. Cintos de couro artesanais com atendimento personalizado.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | Pimenta Country AJ — Fale Conosco",
    description:
      "Fale com a Pimenta Country AJ pelo WhatsApp, e-mail ou Instagram.",
  },
}

const WHATSAPP_NUMBER = "554391432721"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Pimenta Country AJ e gostaria de saber mais sobre os produtos."
)
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const contactCards = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(43) 9143-2721",
    description: "Seg a Sex, 07h–17h (intervalo 11h–13h)",
    href: WHATSAPP_HREF,
    external: true,
    accent: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
    border: "border-[#25D366]/30",
    hoverBorder: "hover:border-[#25D366]/60",
    cta: "Enviar mensagem",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@pimentacountry.com.br",
    description: "Para pedidos, dúvidas e personalizações",
    href: "mailto:contato@pimentacountry.com.br",
    external: false,
    accent: "text-primary",
    bg: "bg-primary/10",
    border: "border-border",
    hoverBorder: "hover:border-primary/40",
    cta: "Enviar e-mail",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@ajpimentacountry",
    description: "Acompanhe lançamentos e novidades",
    href: "https://instagram.com/ajpimentacountry",
    external: true,
    accent: "text-accent",
    bg: "bg-accent/10",
    border: "border-border",
    hoverBorder: "hover:border-accent/40",
    cta: "Ver perfil",
  },
]

const hours = [
  { days: "Segunda a Sexta", time: "07h às 17h" },
  { days: "Intervalo de almoço", time: "11h às 13h" },
  { days: "Sábado, Dom. e Feriados", time: "Fechado" },
]

export default function ContatoPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-stone-900">
        <Image
          src="/lifestyle/cinto-hero-contato.jpg"
          alt="Cinto de couro artesanal Pimenta Country AJ"
          fill
          priority
          className="object-contain object-center scale-75"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Pimenta Country AJ
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
              Fale Conosco
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl drop-shadow">
              Tire dúvidas, faça seu pedido ou solicite um cinto personalizado.
              Estamos à disposição pelo canal de sua preferência.
            </p>
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA banner ── */}
      <section className="bg-[#25D366] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-white shrink-0" aria-hidden />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  Atendimento mais rápido pelo WhatsApp
                </span>
                <span className="text-xs text-white/80">
                  Atendimento Seg–Sex, 07h às 17h (almoço 11h–13h)
                </span>
              </div>
            </div>
            <Link
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-[#25D366] transition-colors hover:bg-white/90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chamar no WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact cards + Hours ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-12">

            {/* Contact cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Nossos Canais
                </h2>
                <p className="text-muted-foreground">
                  Escolha o canal mais conveniente para você.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {contactCards.map(
                  ({
                    icon: Icon,
                    label,
                    value,
                    description,
                    href,
                    external,
                    accent,
                    bg,
                    border,
                    hoverBorder,
                    cta,
                  }) => (
                    <div
                      key={label}
                      className={`group flex flex-col gap-4 rounded-xl border ${border} ${hoverBorder} bg-card p-5 shadow-sm transition-all hover:shadow-md`}
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bg}`}>
                        <Icon className={`h-5 w-5 ${accent}`} aria-hidden />
                      </div>
                      <div className="flex flex-col gap-1 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-foreground break-all">
                          {value}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          {description}
                        </p>
                      </div>
                      <Link
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold ${accent} hover:underline underline-offset-4 transition-colors`}
                      >
                        {cta}
                        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Operating hours */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  Horários
                </h2>
                <p className="text-muted-foreground">
                  Quando estamos disponíveis.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="h-4 w-4 text-accent" aria-hidden />
                  <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Atendimento
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {hours.map(({ days, time }) => (
                    <li
                      key={days}
                      className="flex items-start justify-between gap-3 text-sm"
                    >
                      <span className="text-muted-foreground">{days}</span>
                      <span
                        className={`font-semibold shrink-0 ${
                          time === "Fechado"
                            ? "text-muted-foreground/60"
                            : "text-foreground"
                        }`}
                      >
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-5 border-t border-border">
                  <div className="flex items-start gap-2">
                    <Phone className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" aria-hidden />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Fora do horário, deixe sua mensagem — respondemos assim que possível.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">

            {/* Form intro */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Formulário
                </p>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Envie uma mensagem
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Prefere escrever? Preencha o formulário ao lado e entraremos
                  em contato em até 1 dia útil.
                </p>
              </div>

              {/* Story note */}
              <blockquote className="border-l-2 border-accent pl-4">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "A tradição começou com meu pai e segue até hoje, mantendo o
                  cuidado artesanal em cada detalhe."
                </p>
                <footer className="mt-2 text-xs text-muted-foreground/70 not-italic">
                  — Alexandre José da Silva,{" "}
                  <Link href="/nossa-historia" className="underline underline-offset-4 hover:text-accent transition-colors">
                    fundador da Pimenta Country AJ
                  </Link>
                </footer>
              </blockquote>

              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">
                  Podemos ajudar com:
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Dúvidas sobre produtos e materiais",
                    "Pedidos e formas de pagamento",
                    "Cintos personalizados sob medida",
                    "Trocas, devoluções e garantia",
                    "Parcerias e revendas",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-lg border border-[#25D366]/30 bg-[#25D366]/5">
                <p className="text-sm font-semibold text-foreground">
                  Precisa de resposta rápida?
                </p>
                <p className="text-xs text-muted-foreground">
                  O WhatsApp é o nosso canal mais ágil. Chame a gente!
                </p>
                <Link
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline underline-offset-4"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                  Abrir WhatsApp
                </Link>
              </div>
            </div>

            {/* Form */}
            <form
              action="#"
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
              aria-label="Formulário de contato"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nome <span className="text-destructive" aria-hidden>*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    autoComplete="name"
                    required
                    className="h-10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Telefone / WhatsApp
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    autoComplete="tel"
                    className="h-10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  E-mail <span className="text-destructive" aria-hidden>*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  autoComplete="email"
                  required
                  className="h-10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Mensagem <span className="text-destructive" aria-hidden>*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escreva sua mensagem, dúvida ou pedido aqui..."
                  required
                  rows={5}
                  className="resize-none min-h-[120px]"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                Campos marcados com{" "}
                <span className="text-destructive font-medium">*</span> são
                obrigatórios.
              </p>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 h-11 text-sm font-semibold"
              >
                <Send className="h-4 w-4" aria-hidden />
                Enviar Mensagem
              </Button>
            </form>

          </div>
        </div>
      </section>

    </div>
  )
}
