// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
