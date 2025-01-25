// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      hmr: true
    }
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
    },
  },
  compatibilityDate: "2024-11-01",
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
        },
      },
    },
    database: {
      type: "libsql",
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN!,
    },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
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
