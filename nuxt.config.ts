// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
    },
  },
  routeRules: {
    "/docs/**": { prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
  },
  compatibilityDate: "2024-11-01",
  content: {
    watch: {
      ws: {
        // @ts-ignore
        enabled: true,
        port: 4000,
        showURL: true,
      },
    },
    build: {
      markdown: {
        highlight: {
          theme: "houston",
          preload: [
            "bash",
            "ts",
            "js",
            "css",
            "java",

            "groovy",
            "sql",
            "xml",
            "json",
          ],
        },
      },
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "nuxt-og-image",
    "@nuxtjs/google-fonts",
  ],
  site: {
    url: "https://authsmith.com",
    name: "AuthSmith",
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      "Martian Mono": "100..800",
      "Bricolage Grotesque": "200..800",
      "JetBrains Mono": "100..800",
    },
  },
});
