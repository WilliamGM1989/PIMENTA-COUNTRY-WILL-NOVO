import type { Product } from "@/lib/products";
import type { BlogPost } from "@/lib/blog";

const BASE_URL = "https://www.pimentacountry.com.br";

// Escapa caracteres perigosos para uso seguro em blocos <script> JSON-LD
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

// ─── Organization Schema ──────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pimenta Country AJ",
  url: BASE_URL,
  logo: `${BASE_URL}/brand/logo.jpg`,
  description: "Cintos de couro artesanais feitos à mão em Sertanópolis, PR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sertanópolis",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  sameAs: ["https://instagram.com/ajpimentacountry"],
};

export function OrganizationSchema({ nonce }: { nonce?: string }) {
  return (
    <script
      nonce={nonce}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }}
    />
  );
}

// ─── WebSite Schema ───────────────────────────────────────────────────────────

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pimenta Country AJ",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/produtos?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function WebSiteSchema({ nonce }: { nonce?: string }) {
  return (
    <script
      nonce={nonce}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(webSiteSchema) }}
    />
  );
}

// ─── BreadcrumbList Schema ────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({
  breadcrumbs,
  nonce,
}: {
  breadcrumbs: BreadcrumbItem[];
  nonce?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return (
    <script
      nonce={nonce}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}

// ─── Product Schema ───────────────────────────────────────────────────────────

export function ProductSchema({ product, nonce }: { product: Product; nonce?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) =>
      img.startsWith("http") ? img : `${BASE_URL}${img}`
    ),
    sku: product.id,
    brand: { "@type": "Brand", name: "Pimenta Country AJ" },
    manufacturer: {
      "@type": "Organization",
      name: "Pimenta Country AJ",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sertanópolis",
        addressRegion: "PR",
        addressCountry: "BR",
      },
    },
    category:
      product.category === "country" ? "Cintos Country Western" : "Cintos Sociais",
    material: "Couro legítimo",
    url: `${BASE_URL}/produtos/${product.slug}`,
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}/produtos/${product.slug}`,
      priceCurrency: "BRL",
      price: product.price.toFixed(2),
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "Pimenta Country AJ" },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", currency: "BRL", value: "0" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "BR" },
      },
    },
  };

  return (
    <script
      nonce={nonce}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}

// ─── BlogPost Schema ──────────────────────────────────────────────────────────

export function BlogPostSchema({ post, nonce }: { post: BlogPost; nonce?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith("http") ? post.image : `${BASE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Pimenta Country AJ", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Pimenta Country AJ",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/brand/logo.jpg` },
    },
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${post.slug}` },
    articleSection: post.category,
    inLanguage: "pt-BR",
  };

  return (
    <script
      nonce={nonce}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
