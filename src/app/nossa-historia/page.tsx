import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Hammer, Heart, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Nossa História | Pimenta Country AJ — Artesanato em Couro desde Sertanópolis, PR",
  description:
    "Conheça a história da Pimenta Country AJ, marca de cintos de couro artesanais de Sertanópolis, Paraná. Tradição passada de geração em geração, couro legítimo selecionado e trabalho feito à mão com orgulho.",
  keywords: [
    "história Pimenta Country",
    "artesanato em couro",
    "cinto artesanal brasileiro",
    "tradição country western",
    "couro legítimo",
    "Sertanópolis Paraná",
    "artesanato Paraná",
    "cintos feitos à mão",
  ],
  alternates: { canonical: "/nossa-historia" },
  openGraph: {
    title: "Nossa História | Pimenta Country AJ — Artesanato em Couro de Sertanópolis, PR",
    description:
      "Da tradição do campo de Sertanópolis, Paraná, para as cidades — a história por trás dos cintos artesanais de couro legítimo Pimenta Country AJ.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nossa História | Pimenta Country AJ — Artesanato em Couro de Sertanópolis, PR",
    description:
      "Da tradição do campo de Sertanópolis, Paraná, para as cidades — a história por trás dos cintos artesanais Pimenta Country AJ.",
  },
}

const values = [
  {
    icon: Heart,
    title: "Tradição",
    description:
      "Uma herança passada de geração em geração, mantida viva em cada ponto costurado à mão.",
  },
  {
    icon: Award,
    title: "Qualidade",
    description:
      "Couro legítimo, fivelas premium e acabamento rigoroso em cada peça que sai das nossas mãos.",
  },
  {
    icon: Hammer,
    title: "Artesanato",
    description:
      "Nenhuma máquina substitui o olhar treinado e as mãos habilidosas de quem conhece o couro de verdade.",
  },
  {
    icon: Leaf,
    title: "Autenticidade",
    description:
      "Cada cinto carrega uma identidade única — sem repetição, sem série industrial, só originalidade.",
  },
]

export default function NossaHistoriaPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative bg-muted py-24 sm:py-32 overflow-hidden">
        {/* Background image */}
        <Image
          src="/lifestyle/parana-interior.jpg"
          alt="Interior do Paraná — paisagem country"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50 pointer-events-none"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Logo */}
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-full ring-4 ring-white/30 shadow-2xl">
              <Image
                src="/brand/logo.jpg"
                alt="Logo Pimenta Country AJ"
                fill
                sizes="208px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Pimenta Country AJ
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
                Nossa História
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl drop-shadow">
                Do campo para a cidade — a tradição do artesanato em couro que
                atravessa gerações e se renova a cada peça.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin story ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  As Origens
                </p>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Nascida da paixão pelo couro
                </h2>
              </div>

              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  A história da Pimenta Country AJ começa com um pai e suas
                  mãos cheias de couro. Há mais de 30 anos, a família Silva
                  aprendeu que trabalhar com couro de verdade é mais do que um
                  ofício — é uma forma de respeitar quem vai usar a peça.
                </p>
                <p>
                  Foi o pai de Alexandre quem estabeleceu os primeiros padrões
                  da casa: couro legítimo, sem atalhos; costura firme, que não
                  afrouxa; acabamento limpo, que não envergonha. Esses
                  princípios foram passados adiante com o mesmo cuidado com
                  que se passa uma ferramenta boa de mão em mão.
                </p>
                <p>
                  Hoje, sob o nome de Alexandre José da Silva, a tradição
                  segue em Sertanópolis, Paraná — com cintos, capas e
                  acessórios que carregam décadas de conhecimento e o orgulho
                  de quem produz para quem valoriza o que realmente dura.
                </p>
              </div>
            </div>

            {/* Quote do fundador */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 blur-xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-md">
                <blockquote className="flex flex-col gap-5">
                  <div
                    aria-hidden
                    className="text-6xl font-heading font-black text-primary/20 leading-none select-none -mb-2"
                  >
                    &ldquo;
                  </div>
                  <p className="font-heading text-lg italic leading-relaxed text-foreground sm:text-xl">
                    Há mais de 30 anos nossa família transforma couro em peças
                    duráveis e de confiança. A tradição começou com meu pai —
                    foi com ele que aprendi que qualidade não precisa de
                    promessa, ela se prova no uso. Hoje, cada cinto, capa e
                    acessório que sai daqui carrega esse mesmo espírito: cuidado
                    artesanal em cada detalhe, para quem valoriza o que
                    realmente dura.
                  </p>
                  <footer className="flex items-center gap-3 pt-2 border-t border-border/50">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-base shrink-0">
                      AJ
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold text-foreground">
                        Alexandre José da Silva
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">
                        Fundador · Pimenta Country AJ
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Craftsmanship section ── */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">

            {/* Image */}
            <div className="order-2 lg:order-1 relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-md">
              <Image
                src="/products/colecao-country.jpg"
                alt="Artesão trabalhando em cinto de couro Pimenta Country AJ"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  O Processo
                </p>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Do campo à cidade,<br />com as mãos na massa
                </h2>
              </div>

              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  A Pimenta Country AJ é uma ponte entre dois mundos: a
                  autenticidade do interior, onde o couro é parte da vida, e a
                  elegância urbana que valoriza o que é feito com cuidado e
                  identidade.
                </p>
                <p>
                  Trabalhamos exclusivamente com couro legítimo — selecionado
                  pelo toque e pela textura, não pelo preço mais baixo. As
                  fivelas são de metal premium, as costuras são feitas à mão
                  com linhas resistentes e cada peça passa por inspeção antes
                  de chegar até você.
                </p>
                <p>
                  O resultado é um cinto que não é apenas um acessório: é uma
                  declaração de quem você é — alguém que valoriza o genuíno, o
                  durável e o belo.
                </p>
              </div>

              {/* Material highlights */}
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">
                {[
                  "Couro legítimo selecionado",
                  "Fivelas de metal premium",
                  "Costura artesanal à mão",
                  "Acabamento com cera natural",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Palavra do Fundador ── */}
      <section className="py-20 sm:py-28 bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-background/50">
              Palavra do Fundador
            </p>

            <div
              aria-hidden
              className="text-7xl font-heading font-black text-background/10 leading-none select-none -mb-4"
            >
              &ldquo;
            </div>

            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium italic leading-snug text-background/90 max-w-3xl">
              Há mais de 30 anos, nossa família transforma couro em peças
              duráveis e de confiança.
            </p>

            <p className="text-base sm:text-lg text-background/65 max-w-2xl leading-relaxed">
              A tradição começou com meu pai e segue até hoje, mantendo o
              cuidado artesanal em cada detalhe. Produzimos cintos, capas e
              acessórios com qualidade, resistência e acabamento feito para
              quem valoriza um produto que realmente dura.
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-background/20 w-full max-w-xs mx-auto justify-center">
              <div className="h-12 w-12 rounded-full bg-background/10 ring-2 ring-background/20 flex items-center justify-center text-background font-heading font-bold text-lg shrink-0">
                AJ
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-sm font-bold text-background">
                  Alexandre José da Silva
                </span>
                <span className="text-xs text-background/50 uppercase tracking-widest">
                  Fundador · Pimenta Country AJ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              O que nos guia
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nossos Valores
            </h2>
            <p className="max-w-xl text-muted-foreground leading-relaxed">
              Quatro pilares que estão em cada peça que produzimos e em cada
              relacionamento que construímos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
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

      {/* ── CTA ── */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Conheça nossas peças
            </h2>
            <p className="max-w-xl text-primary-foreground/80 leading-relaxed sm:text-lg">
              Cada cinto é único. Escolha o seu e carregue um pedaço desta
              história no dia a dia.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mt-2">
              <Link
                href="/produtos"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary-foreground px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Ver Produtos
              </Link>
              <Link
                href="/contato"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-primary-foreground/40 px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
