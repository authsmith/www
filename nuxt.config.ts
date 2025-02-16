// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
    },
  },
  hooks: {
    "prerender:routes"({ routes }) {
      routes.clear(); // Do not generate any routes (except the defaults)
    },
  },
  nitro: {
    preset: "cloudflare-pages",
  },
  compatibilityDate: "2024-11-01",
  content: {
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
    database: {
      type: "libsql",
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN!,
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
    },
  },
});
