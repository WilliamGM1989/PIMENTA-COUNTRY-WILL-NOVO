import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import {
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  type BlogPost,
  type BlogCategory,
} from "@/lib/blog"
import { Separator } from "@/components/ui/separator"
import { BlogPostSchema } from "@/components/structured-data"

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Artigo não encontrado | Pimenta Country AJ" }
  }

  return {
    title: `${post.title} | Blog Pimenta Country AJ`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "pt_BR",
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

// ─── Category badge colours ───────────────────────────────────────────────────

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  Dicas: "text-primary bg-primary/10 border-primary/20",
  Cultura: "text-amber-700 bg-amber-50 border-amber-200",
  Artesanato: "text-emerald-700 bg-emerald-50 border-emerald-200",
  Eventos: "text-violet-700 bg-violet-50 border-violet-200",
}

// ─── Related posts sidebar ────────────────────────────────────────────────────

function RelatedPosts({
  current,
}: {
  current: BlogPost
}) {
  const related = getPostsByCategory(current.category)
    .filter((p) => p.slug !== current.slug)
    .slice(0, 3)

  const allPosts = getAllPosts()
  const others = allPosts
    .filter(
      (p) =>
        p.slug !== current.slug &&
        !related.find((r) => r.slug === p.slug)
    )
    .slice(0, Math.max(0, 3 - related.length))

  const suggestions = [...related, ...others].slice(0, 3)

  if (suggestions.length === 0) return null

  return (
    <aside aria-label="Artigos relacionados">
      <h2 className="font-heading text-lg font-bold text-foreground mb-4">
        Leia também
      </h2>
      <ul className="flex flex-col gap-4">
        {suggestions.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex gap-3 items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
            >
              <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <span
                  className={`self-start inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${CATEGORY_COLORS[post.category]}`}
                >
                  {post.category}
                </span>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground">{post.readTime} de leitura</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const paragraphs = post.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <div className="flex flex-col">
      <BlogPostSchema post={post} />

      {/* ── Hero image ── */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 bg-muted overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

        {/* Category badge on image */}
        <div className="absolute bottom-6 left-4 sm:left-8 lg:left-12">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${CATEGORY_COLORS[post.category]}`}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ── Article ── */}
          <article className="flex-1 min-w-0">

            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Voltar ao blog
            </Link>

            {/* Title & meta */}
            <header className="mb-8">
              <h1 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden>·</span>
                <span>{post.readTime} de leitura</span>
                <span aria-hidden>·</span>
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${CATEGORY_COLORS[post.category]}`}
                >
                  {post.category}
                </span>
              </div>
            </header>

            <Separator className="mb-8" />

            {/* Content */}
            <div className="prose prose-neutral max-w-none text-foreground/90">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-5 leading-relaxed text-base text-foreground/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <Separator className="my-10" />

            {/* Bottom navigation */}
            <div className="flex items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Todos os artigos
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col gap-8">

            {/* Related posts */}
            <RelatedPosts current={post} />

            <Separator />

            {/* CTA card */}
            <div className="rounded-xl border border-border bg-muted p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Pimenta Country AJ
                </p>
                <h3 className="font-heading text-lg font-bold text-foreground leading-snug">
                  Cintos artesanais feitos à mão
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Couro legítimo, fivelas trabalhadas e tradição do norte do Paraná em cada detalhe.
                </p>
              </div>
              <Link
                href="/produtos"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Ver coleção
                <svg
                  className="h-3.5 w-3.5"
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
              </Link>
            </div>

          </aside>
        </div>
      </div>

      {/* ── Bottom CTA banner ── */}
      <Separator />
      <section className="py-14 sm:py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center max-w-xl mx-auto">
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Gostou do artigo?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Conheça nossa coleção de cintos artesanais — tradição e
                qualidade de Sertanópolis para o Brasil.
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
                href="/blog"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Mais Artigos
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
