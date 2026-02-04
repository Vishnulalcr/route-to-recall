import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://routetorecall.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/private/",
          "/_next/",
          "/admin/",
          "/*.json$",
          "/*?*", // Disallow URL parameters for crawlers
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/private/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/og-image.jpg"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
