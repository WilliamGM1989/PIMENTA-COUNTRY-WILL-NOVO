import type { MetadataRoute } from "next";

const BASE_URL = "https://www.pimentacountry.com.br";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pimenta Country AJ — Cintos de Couro Artesanais",
    short_name: "Pimenta Country",
    description:
      "Cintos de couro artesanais feitos à mão em Sertanópolis, PR — tradição, qualidade e estilo country western e social com os melhores couros do Brasil.",
    start_url: "/",
    display: "standalone",
    background_color: "#FEFAF5",
    theme_color: "#8B4513",
    icons: [
      {
        src: "/brand/logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/brand/logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
