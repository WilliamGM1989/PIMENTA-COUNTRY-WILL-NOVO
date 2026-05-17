import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  getAllProducts,
  getAllColors,
  formatPrice,
  type Product,
} from "@/lib/products";
import { Badge } from "@/components/ui/badge";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Cintos de Couro Artesanais | Loja Pimenta Country AJ — Paraná",
  description:
    "Compre cintos de couro artesanais online na loja Pimenta Country AJ. Modelos country western e social feitos à mão com couro legítimo. Cintos artesanais do Paraná com entrega para todo o Brasil.",
  keywords: [
    "cinto de couro",
    "cinto artesanal",
    "cinto country",
    "cinto western",
    "cinto social",
    "couro legítimo",
    "Pimenta Country AJ",
    "comprar cinto de couro online",
    "loja de cintos",
    "cintos artesanais Paraná",
    "cinto de couro legítimo",
    "cinto masculino artesanal",
    "fivela western",
  ],
  alternates: { canonical: "/produtos" },
  openGraph: {
    title: "Cintos de Couro Artesanais | Loja Pimenta Country AJ",
    description:
      "Compre cintos de couro artesanais online — linha country western e social. Cada peça feita à mão com qualidade premium e couro legítimo do Paraná.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cintos de Couro Artesanais | Loja Pimenta Country AJ",
    description:
      "Compre cintos de couro artesanais online — linha country western e social. Cada peça feita à mão com qualidade premium.",
  },
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface PageProps {
  searchParams: Promise<{
    categoria?: string;
    genero?: string;
    cor?: string;
    promo?: string;
  }>;
}

// ─── Filter URL builder ───────────────────────────────────────────────────────

function buildFilterHref(
  baseParams: URLSearchParams,
  key: string,
  value: string | null
): string {
  const params = new URLSearchParams(baseParams);
  if (value === null) {
    params.delete(key);
  } else {
    params.set(key, value);
  }
  // Categoria and promo are mutually exclusive
  if (key === "categoria" && value !== null) {
    params.delete("promo");
  }
  if (key === "promo" && value !== null) {
    params.delete("categoria");
  }
  const query = params.toString();
  return query ? `/produtos?${query}` : "/produtos";
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.discountPercent !== undefined && product.discountPercent > 0;
  const showNew = product.isNew || product.badge === "Novo";

  return (
    <li>
      <Link
        href={`/produtos/${product.slug}`}
        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <div className="h-full flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all duration-200 group-hover:shadow-lg group-hover:ring-primary/30">
          {/* Image */}
          <div className="relative aspect-square w-full overflow-hidden bg-muted">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Discount badge */}
            {hasDiscount && (
              <div className="absolute left-2 top-2">
                <span className="inline-flex items-center rounded px-1.5 py-0.5 text-xs font-bold bg-destructive text-white leading-none shadow">
                  -{product.discountPercent}%
                </span>
              </div>
            )}

            {/* NOVO badge */}
            {!hasDiscount && showNew && (
              <div className="absolute left-2 top-2">
                <Badge variant="default" className="text-xs font-bold shadow">
                  NOVO
                </Badge>
              </div>
            )}

            {/* Category label */}
            <div className="absolute bottom-2 right-2">
              <Badge
                variant="outline"
                className="bg-card/80 backdrop-blur-sm text-xs capitalize"
              >
                {product.category}
              </Badge>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col flex-1 p-3 gap-1">
            {product.ref && (
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Ref. {product.ref}
              </span>
            )}
            <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
              {product.name}
            </p>
            <div className="flex items-baseline gap-1.5 mt-auto pt-2">
              {hasDiscount && product.originalPrice ? (
                <>
                  <span className="text-xs text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-sm font-bold text-destructive">
                    {formatPrice(product.price)}
                  </span>
                </>
              ) : (
                <span className="text-sm font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({
  currentParams,
  activeCategory,
  activeGenero,
  activeCor,
  isPromo,
  hasAnyFilter,
}: {
  currentParams: URLSearchParams;
  activeCategory: string | undefined;
  activeGenero: string | undefined;
  activeCor: string | undefined;
  isPromo: boolean;
  hasAnyFilter: boolean;
}) {
  const colors = getAllColors();

  const categoryLinks = [
    { label: "Todos", value: null as string | null },
    { label: "Country", value: "country" },
    { label: "Social", value: "social" },
    { label: "Acessórios", value: "acessorio" },
  ];

  const generoLinks = [
    { label: "Todos", value: null as string | null },
    { label: "Masculino", value: "masculino" },
    { label: "Feminino", value: "feminino" },
    { label: "Unisex", value: "unisex" },
    { label: "Infantil", value: "infantil" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-56 flex-shrink-0 gap-8">
      {/* Filters heading + clear */}
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Filtros
        </h2>
        {hasAnyFilter && (
          <Link
            href="/produtos"
            className="text-xs text-primary hover:underline"
          >
            Limpar
          </Link>
        )}
      </div>

      {/* Category */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
          Categoria
        </p>
        {categoryLinks.map((link) => {
          const isActive =
            link.value === null
              ? activeCategory === undefined && !isPromo
              : link.value === activeCategory && !isPromo;
          const href =
            link.value === null
              ? buildFilterHref(currentParams, "categoria", null)
              : buildFilterHref(currentParams, "categoria", link.value);
          return (
            <Link
              key={link.label}
              href={href}
              className={[
                "text-sm px-3 py-1.5 rounded-md transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              ].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
        {/* Promoções */}
        <Link
          href={buildFilterHref(currentParams, "promo", isPromo ? null : "true")}
          className={[
            "text-sm px-3 py-1.5 rounded-md transition-colors",
            isPromo
              ? "bg-destructive text-white font-semibold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          ].join(" ")}
          aria-current={isPromo ? "page" : undefined}
        >
          Promoções
        </Link>
      </div>

      {/* Gênero */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
          Gênero
        </p>
        {generoLinks.map((link) => {
          const isActive =
            link.value === null
              ? activeGenero === undefined
              : link.value === activeGenero;
          const href =
            link.value === null
              ? buildFilterHref(currentParams, "genero", null)
              : buildFilterHref(currentParams, "genero", link.value);
          return (
            <Link
              key={link.label}
              href={href}
              className={[
                "text-sm px-3 py-1.5 rounded-md transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              ].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Colors */}
      <div>
        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
          Cores Disponíveis
        </p>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => {
            const isActive = activeCor === color.name;
            const href = isActive
              ? buildFilterHref(currentParams, "cor", null)
              : buildFilterHref(currentParams, "cor", color.name);
            return (
              <Link
                key={color.hex}
                href={href}
                title={color.name}
                aria-label={color.name}
                className={[
                  "w-7 h-7 rounded-full border-2 shadow-sm transition-all",
                  isActive
                    ? "border-primary ring-2 ring-primary ring-offset-2 scale-110"
                    : "border-border hover:scale-110",
                ].join(" ")}
                style={{ backgroundColor: color.hex }}
              />
            );
          })}
        </div>
        {activeCor && (
          <Link
            href={buildFilterHref(currentParams, "cor", null)}
            className="mt-2 inline-block text-xs text-muted-foreground hover:text-primary"
          >
            × {activeCor}
          </Link>
        )}
      </div>

      {/* Clear all filters */}
      {hasAnyFilter && (
        <Link
          href="/produtos"
          className="text-sm px-3 py-2 rounded-md border border-border text-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          Limpar Filtros
        </Link>
      )}
    </aside>
  );
}

// ─── Mobile filter tabs ───────────────────────────────────────────────────────

function MobileFilterTabs({
  currentParams,
  activeCategory,
  isPromo,
}: {
  currentParams: URLSearchParams;
  activeCategory: string | undefined;
  isPromo: boolean;
}) {
  const tabs = [
    { label: "Todos", value: null as string | null, isPromoTab: false },
    { label: "Country", value: "country", isPromoTab: false },
    { label: "Social", value: "social", isPromoTab: false },
    { label: "Acessórios", value: "acessorio", isPromoTab: false },
    { label: "Promoções", value: "promo", isPromoTab: true },
  ];

  return (
    <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-1 mb-6 -mx-4 px-4">
      {tabs.map((tab) => {
        const isActive = tab.isPromoTab
          ? isPromo
          : tab.value === null
          ? activeCategory === undefined && !isPromo
          : tab.value === activeCategory && !isPromo;

        let href: string;
        if (tab.isPromoTab) {
          href = buildFilterHref(currentParams, "promo", isPromo ? null : "true");
        } else if (tab.value === null) {
          href = buildFilterHref(currentParams, "categoria", null);
        } else {
          href = buildFilterHref(currentParams, "categoria", tab.value);
        }

        return (
          <Link
            key={tab.label}
            href={href}
            className={[
              "flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap",
              isActive
                ? tab.isPromoTab
                  ? "bg-destructive text-white"
                  : "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground",
            ].join(" ")}
            aria-current={isActive ? "page" : undefined}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ProdutosPage({ searchParams }: PageProps) {
  const { categoria, genero, cor, promo } = await searchParams;

  const activeCategory =
    categoria === "country" || categoria === "social" || categoria === "acessorio"
      ? categoria
      : undefined;
  const activeGenero =
    genero === "masculino" ||
    genero === "feminino" ||
    genero === "unisex" ||
    genero === "infantil"
      ? genero
      : undefined;
  const activeCor = cor || undefined;
  const isPromo = promo === "true";

  // Build current URLSearchParams for filter hrefs
  const currentParams = new URLSearchParams();
  if (activeCategory) currentParams.set("categoria", activeCategory);
  if (activeGenero) currentParams.set("genero", activeGenero);
  if (activeCor) currentParams.set("cor", activeCor);
  if (isPromo) currentParams.set("promo", "true");

  const hasAnyFilter =
    activeCategory !== undefined ||
    activeGenero !== undefined ||
    activeCor !== undefined ||
    isPromo;

  // Filter products
  let filtered = getAllProducts();
  if (isPromo) {
    filtered = filtered.filter(
      (p) => p.discountPercent !== undefined && p.discountPercent > 0
    );
  }
  if (activeCategory) {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }
  if (activeGenero) {
    filtered = filtered.filter((p) => p.gender === activeGenero);
  }
  if (activeCor) {
    filtered = filtered.filter((p) =>
      p.colors.some((c) => c.name === activeCor)
    );
  }

  const total = getAllProducts().length;

  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/lifestyle/fabricacao.jpg"
          alt="Manufatura de cintos de couro artesanais Pimenta Country AJ"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Pimenta Country AJ
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight text-white uppercase drop-shadow-lg">
            Cintos
          </h1>
          <p className="text-sm text-white/80 max-w-md mt-1">
            Couro legítimo feito à mão em Sertanópolis, Paraná. Entrega para todo o Brasil.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex gap-10">
          {/* Sidebar */}
          <Sidebar
            currentParams={currentParams}
            activeCategory={activeCategory}
            activeGenero={activeGenero}
            activeCor={activeCor}
            isPromo={isPromo}
            hasAnyFilter={hasAnyFilter}
          />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Mobile tabs */}
            <MobileFilterTabs
              currentParams={currentParams}
              activeCategory={activeCategory}
              isPromo={isPromo}
            />

            {/* Top bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <p className="text-sm text-muted-foreground">
                Mostrando{" "}
                <span className="font-semibold text-foreground">
                  {filtered.length}
                </span>{" "}
                de{" "}
                <span className="font-semibold text-foreground">{total}</span>{" "}
                produtos
              </p>
              {hasAnyFilter && (
                <Link
                  href="/produtos"
                  className="text-xs text-primary hover:underline"
                >
                  Limpar Filtros
                </Link>
              )}
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="py-24 text-center text-muted-foreground">
                <p className="text-lg mb-4">Nenhum produto encontrado.</p>
                <Link
                  href="/produtos"
                  className="text-sm text-primary hover:underline"
                >
                  Ver todos os produtos
                </Link>
              </div>
            ) : (
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {filtered.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
