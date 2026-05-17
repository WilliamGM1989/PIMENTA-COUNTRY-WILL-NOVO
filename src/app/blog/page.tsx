import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { getAllPosts, getPostsByCategory, type BlogCategory } from "@/lib/blog"
import { Separator } from "@/components/ui/separator"

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Blog | Pimenta Country AJ — Dicas sobre Cintos de Couro e Cultura Country",
  description:
    "Dicas sobre cintos de couro artesanais, cultura country no Paraná, cuidados com couro legítimo, fivelas western e rodeios. Blog oficial da Pimenta Country AJ de Sertanópolis, PR.",
  keywords: [
    "blog country",
    "cultura country paraná",
    "dicas cinto couro",
    "rodeio paraná",
    "artesanato couro",
    "Pimenta Country AJ",
    "Sertanópolis",
    "como cuidar de cinto de couro",
    "cinto de couro artesanal",
    "fivela western",
    "eventos country paraná",
    "artesanato em couro norte paraná",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Pimenta Country AJ — Dicas sobre Cintos de Couro e Cultura Country",
    description:
      "Dicas sobre cintos de couro artesanais, cultura country no Paraná e rodeios. Blog da Pimenta Country AJ de Sertanópolis, PR.",
    type: "website",
    locale: "pt_BR",
  },
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface PageProps {
  searchParams: Promise<{ categoria?: string }>
}

// ─── Filter tabs ─────────────────────────────────────────────────────────────

const FILTER_TABS = [
  { label: "Todos", href: "/blog", value: undefined },
  { label: "Dicas", href: "/blog?categoria=Dicas", value: "Dicas" },
  { label: "Cultura", href: "/blog?categoria=Cultura", value: "Cultura" },
  {
    label: "Artesanato",
    href: "/blog?categoria=Artesanato",
    value: "Artesanato",
  },
  { label: "Eventos", href: "/blog?categoria=Eventos", value: "Eventos" },
] as const

// ─── Category badge colours ───────────────────────────────────────────────────

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  Dicas: "text-primary bg-primary/10 border-primary/20",
  Cultura: "text-amber-700 bg-amber-50 border-amber-200",
  Artesanato: "text-emerald-700 bg-emerald-50 border-emerald-200",
  Eventos: "text-violet-700 bg-violet-50 border-violet-200",
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPage({ searchParams }: PageProps) {
  const { categoria } = await searchParams

  const isValidCategory = (v: string | undefined): v is BlogCategory =>
    v === "Dicas" || v === "Cultura" || v === "Artesanato" || v === "Eventos"

  const activeCategory = isValidCategory(categoria) ? categoria : undefined

  const posts = activeCategory
    ? getPostsByCategory(activeCategory)
    : getAllPosts()

  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Pimenta Country AJ
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Blog
            </h1>
            <p className="text-muted-foreground leading-relaxed sm:text-lg">
              Dicas, novidades e o mundo country — histórias que nascem do
              campo e chegam até você.
            </p>
          </div>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section header + filter tabs */}
          <div className="mb-10 flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Artigos
                </h2>
                <p className="text-sm text-muted-foreground">
                  {posts.length}{" "}
                  {posts.length === 1 ? "artigo publicado" : "artigos publicados"}
                </p>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
              {FILTER_TABS.map((tab) => {
                const isActive = tab.value === activeCategory
                return (
                  <Link
                    key={tab.label}
                    href={tab.href}
                    className={[
                      "rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {tab.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Posts grid */}
          {posts.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground">
              Nenhum artigo encontrado nesta categoria.
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
                    aria-label={`Ler artigo: ${post.title}`}
                  >
                    <article className="flex flex-col h-full rounded-xl border border-border bg-card transition-shadow duration-200 group-hover:shadow-lg overflow-hidden">
                      {/* Image */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Category badge */}
                        <span
                          className={`absolute left-3 top-3 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm ${CATEGORY_COLORS[post.category]}`}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-5 gap-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <time dateTime={post.date}>{post.date}</time>
                          <span aria-hidden>·</span>
                          <span>{post.readTime} de leitura</span>
                        </div>

                        <h3 className="font-heading text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors mt-1">
                          Leia mais
                          <svg
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Separator />

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center max-w-xl mx-auto">
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Gostou do conteúdo?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Conheça nossa coleção de cintos artesanais e leve um pedaço
                da cultura country para o seu dia a dia.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/produtos"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver Produtos
              </Link>
              <Link
                href="/nossa-historia"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
