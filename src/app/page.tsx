import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Truck, Star, Award } from "lucide-react";

import {
  getFeaturedProducts,
  getProductsByCategory,
  getPromoProducts,
  getUnisexAndInfantilProducts,
  getAccessories,
  formatPrice,
  type Product,
} from "@/lib/products";
import { Badge } from "@/components/ui/badge";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Pimenta Country AJ | Cintos de Couro Artesanais em Sertanópolis PR",
  description:
    "Cintos de couro artesanais feitos à mão em Sertanópolis, Paraná. Cintos country western e social com couro legítimo, fivelas trabalhadas e tradição que atravessa gerações. Entrega para todo o Brasil.",
  keywords: [
    "cinto de couro",
    "cinto artesanal",
    "cinto country",
    "cinto western",
    "couro legítimo",
    "Pimenta Country",
    "cinto social",
    "Sertanópolis",
    "Paraná",
    "cintos de couro artesanais",
    "fivela western",
    "cinto de couro legítimo",
    "cinto masculino",
    "cinto feminino",
    "presente country",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pimenta Country AJ | Cintos de Couro Artesanais",
    description:
      "Cintos de couro artesanais feitos à mão com os melhores couros do Brasil. Do campo à cidade, estilo autêntico.",
    url: "/",
    images: [
      {
        url: "/brand/logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo Pimenta Country AJ",
      },
    ],
  },
};

const WHATSAPP_URL = "https://wa.me/554391432721";

// ─── Shared Product Card ──────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.discountPercent !== undefined && product.discountPercent > 0;
  const showNew = product.isNew || product.badge === "Novo";

  return (
    <Link
      href={`/produtos/${product.slug}`}
      className="group flex flex-col min-w-[220px] w-[220px] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
    >
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="220px"
        />
        {/* Discount badge */}
        {hasDiscount && (
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center rounded px-1.5 py-0.5 text-xs font-bold bg-destructive text-white leading-none">
              -{product.discountPercent}%
            </span>
          </div>
        )}
        {/* NOVO badge */}
        {!hasDiscount && showNew && (
          <div className="absolute top-2 left-2">
            <Badge variant="default" className="text-xs font-bold">
              NOVO
            </Badge>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-2 flex flex-col gap-0.5 px-0.5">
        {product.ref && (
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
            Ref. {product.ref}
          </span>
        )}
        <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {product.name}
        </p>
        <div className="flex items-baseline gap-1.5 mt-1">
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
    </Link>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden
      />

      {/* Overlay mínimo: só vinheta nas bordas, centro livre */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center max-w-3xl mx-auto">
        {/* Logo — anel duplo para destacar sobre o vídeo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-black/40 blur-md scale-110" aria-hidden />
          <Image
            src="/brand/logo.jpg"
            alt="Pimenta Country AJ"
            width={180}
            height={180}
            priority
            className="relative rounded-full shadow-2xl ring-4 ring-white/60 ring-offset-2 ring-offset-black/30"
          />
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight uppercase tracking-wide drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
          Autenticidade e Estilo Country desde Sertanópolis
        </h1>
        <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
          Cintos de couro artesanais feitos à mão no Norte do Paraná
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/nossa-historia"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:brightness-110 hover:scale-105 active:scale-95"
          >
            Conheça Nossa História
          </Link>
          <Link
            href="/produtos"
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white backdrop-blur-sm bg-white/10 transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
          >
            Ver Produtos
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Category Showcase ────────────────────────────────────────────────────────

function CategoryShowcase({
  title,
  description,
  href,
  products,
  bg = "bg-background",
}: {
  title: string;
  description: string;
  href: string;
  products: Product[];
  bg?: string;
}) {
  return (
    <section className={`w-full py-24 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: title + description + link */}
          <div className="lg:w-64 flex-shrink-0 flex flex-col justify-center gap-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase leading-tight">
              {title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-accent transition-colors self-start group"
            >
              Ver coleção
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right: horizontal scroll cards */}
          <div className="flex-1 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
            <div className="flex gap-4 w-max">
              {products.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Promotions Banner ───────────────────────────────────────────────────────

function PromotionsBanner() {
  return (
    <section className="w-full py-16 bg-foreground text-background">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-5 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-background/60">
          Ofertas Especiais
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase leading-tight">
          Promoções
        </h2>
        <p className="text-lg md:text-xl text-background/80 max-w-lg leading-relaxed">
          Até 21% de desconto em peças selecionadas
        </p>
        <p className="text-sm text-background/50">
          Oferta válida até 15 de maio de 2026
        </p>
        <Link
          href="/produtos?promo=true"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-background text-foreground px-8 py-3 text-base font-semibold shadow-lg transition-all hover:bg-background/90 hover:scale-105 active:scale-95"
        >
          Ver Promoções
        </Link>
      </div>
    </section>
  );
}

// ─── Story Section ────────────────────────────────────────────────────────────

function StorySection() {
  return (
    <section className="relative w-full min-h-[480px] flex items-center overflow-hidden">
      <Image
        src="/lifestyle/cinto-story.jpg"
        alt="Cinto de couro artesanal Pimenta Country AJ"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-16">
        <div className="max-w-xl flex flex-col gap-5">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            Mais de 30 Anos de Tradição
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Uma família, um ofício, uma marca.
          </h2>
          <p className="text-white/90 leading-relaxed text-base drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            A Pimenta Country AJ nasceu da tradição que o pai de Alexandre
            plantou décadas atrás. Um ensinamento simples e poderoso: couro
            bom não engana — ele se prova no uso.
          </p>
          <blockquote className="border-l-2 border-accent pl-4 italic text-white/70 text-sm leading-relaxed">
            "A tradição começou com meu pai e segue até hoje, mantendo o
            cuidado artesanal em cada detalhe."
            <footer className="mt-1 not-italic text-white/50 text-xs">
              — Alexandre José da Silva, fundador
            </footer>
          </blockquote>
          <Link
            href="/nossa-historia"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors self-start mt-2 group"
          >
            Conheça nossa história completa
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Features / Trust ────────────────────────────────────────────────────────

function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Couro Legítimo",
      description: "Apenas couros selecionados, curtidos ao vegetal",
    },
    {
      icon: Award,
      title: "Feito à Mão",
      description: "Cada peça trabalhada por artesãos especializados",
    },
    {
      icon: Truck,
      title: "Entrega Segura",
      description: "Embalagem especial e envio rastreado para todo o Brasil",
    },
    {
      icon: Star,
      title: "Satisfação Garantida",
      description: "Qualidade certificada e atendimento dedicado",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 ring-2 ring-primary-foreground/20">
                  <Icon
                    className="w-7 h-7 text-primary-foreground"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading font-bold text-primary-foreground text-base md:text-lg leading-tight">
                  {feat.title}
                </h3>
                <p className="text-primary-foreground/75 text-sm leading-snug">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Instagram Section ────────────────────────────────────────────────────────

const INSTAGRAM_URL = "https://www.instagram.com/ajpimentacountry/";

function InstagramSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8 text-center">

          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Siga nas Redes
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Acompanhe no Instagram
            </h2>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Novos modelos, bastidores da produção artesanal e o melhor da
              cultura country direto do Norte do Paraná.
            </p>
          </div>

          {/* Instagram card */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-4">
              {/* Avatar com logo */}
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/brand/logo.jpg"
                  alt="Pimenta Country AJ no Instagram"
                  fill
                  sizes="64px"
                  className="rounded-full object-cover ring-2 ring-[#E1306C]/40"
                />
                {/* Instagram gradient ring */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full ring-2 ring-offset-2 ring-offset-card"
                  style={{
                    background:
                      "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                    WebkitMask:
                      "radial-gradient(circle at center, transparent 68%, black 69%)",
                    mask: "radial-gradient(circle at center, transparent 68%, black 69%)",
                  }}
                />
              </div>

              {/* Profile info */}
              <div className="flex flex-col items-start gap-0.5 text-left min-w-0">
                <span className="font-heading font-bold text-foreground text-base leading-none">
                  @ajpimentacountry
                </span>
                <span className="text-xs text-muted-foreground">
                  Pimenta Country AJ — Sertanópolis, PR
                </span>
                <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full px-3 py-1 group-hover:brightness-110 transition-all">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Ver perfil
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-left border-t border-border pt-4">
              Cintos de couro artesanais, capas e bainhas — feitos à mão em
              Sertanópolis, PR. Mais de 30 anos de tradição familiar.
            </p>
          </a>

          {/* Highlights pills */}
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {["Novos modelos", "Bastidores do ateliê", "Cultura country", "Dicas de couro"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted px-3 py-1 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── WhatsApp CTA Banner ──────────────────────────────────────────────────────

function WhatsAppBanner() {
  return (
    <section className="w-full py-14 px-4 bg-accent">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground leading-snug">
          Tem alguma dúvida? Fale conosco pelo WhatsApp
        </h2>
        <p className="text-accent-foreground/80 text-base md:text-lg max-w-xl">
          Nossa equipe está pronta para ajudar você a encontrar o cinto perfeito
          — tamanho, cor, estilo e mais.
        </p>
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-foreground px-8 py-3 text-base font-bold text-accent shadow-md transition-all hover:brightness-90 hover:scale-105 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar pelo WhatsApp
        </Link>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const countryProducts = getProductsByCategory("country");
  const socialProducts = getProductsByCategory("social");
  const familiaProducts = getUnisexAndInfantilProducts();
  const accessories = getAccessories();

  return (
    <main className="flex flex-col w-full">
      <HeroSection />

      <CategoryShowcase
        title="Cintos Country"
        description="Estilo faroeste e rodeio com couro legítimo, gravações artesanais e fivelas trabalhadas. Do campo à pista, com autenticidade."
        href="/produtos?categoria=country"
        products={countryProducts}
        bg="bg-background"
      />

      <CategoryShowcase
        title="Cintos Social"
        description="Elegância e sofisticação para o dia a dia e ocasiões formais. Acabamento premium, couro liso polido e fivelas refinadas."
        href="/produtos?categoria=social"
        products={socialProducts}
        bg="bg-muted"
      />

      <CategoryShowcase
        title="Unisex & Infantil"
        description="Para toda a família — cintos artesanais unissex com ilhós e modelos infantis com gravação de fazendinha. Couro legítimo do tamanho P ao G."
        href="/produtos?genero=unisex"
        products={familiaProducts}
        bg="bg-background"
      />

      <CategoryShowcase
        title="Acessórios de Couro"
        description="Capas de celular artesanais estilo canguru e bainhas de couro para canivete. Cada peça feita à mão com couro legítimo e gravação country exclusiva."
        href="/produtos?categoria=acessorio"
        products={accessories}
        bg="bg-muted"
      />

      <PromotionsBanner />

      <StorySection />

      <InstagramSection />

      <FeaturesSection />

      <WhatsAppBanner />
    </main>
  );
}
