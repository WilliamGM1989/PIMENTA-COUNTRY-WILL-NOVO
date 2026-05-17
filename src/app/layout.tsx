import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/components/cart-provider";
import { OrganizationSchema, WebSiteSchema } from "@/components/structured-data"
import { PromoPopup } from "@/components/promo-popup";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pimentacountry.com.br"),
  title: "Pimenta Country AJ | Cintos de Couro Artesanais",
  description:
    "Cintos de couro artesanais Pimenta Country AJ — tradição, qualidade e estilo country western e social. Feitos à mão com os melhores couros do Brasil.",
  keywords: [
    "cinto de couro",
    "cinto artesanal",
    "cinto country",
    "cinto western",
    "couro legítimo",
    "Pimenta Country",
    "acessórios masculinos",
    "cinto social",
  ],
  authors: [{ name: "Pimenta Country AJ" }],
  creator: "Pimenta Country AJ",
  category: "e-commerce",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Pimenta Country AJ | Cintos de Couro Artesanais",
    description:
      "Cintos de couro artesanais feitos à mão — estilo country western e social com qualidade premium.",
    siteName: "Pimenta Country AJ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pimenta Country AJ | Cintos de Couro Artesanais",
    description:
      "Cintos de couro artesanais feitos à mão — estilo country western e social com qualidade premium.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationSchema />
        <WebSiteSchema />
        <CartProvider>
          <PromoPopup />
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
