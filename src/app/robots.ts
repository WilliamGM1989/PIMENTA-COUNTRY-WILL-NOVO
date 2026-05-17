import type { MetadataRoute } from "next";

const BASE_URL = "https://www.pimentacountry.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/checkout/", "/login", "/cadastro"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
