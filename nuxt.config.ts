// https://nuxt.com/docs/api/configuration/nuxt-config

require("dotenv").config();

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {},
  app: {
    //pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Intarat Mekloy",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "theme-color", content: "#FFFFFF" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "ขอมูลโปรไฟล์ของ อินทรัตน์ เมฆลอย",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          hid: "icon",
          rel: "icon",
          type: "image/png",
          href: "/intarat.png",
        },
        {
          hid: "apple-touch-icon",
          rel: "apple-touch-icon",
          href: "/intarat.png",
        },
        { rel: "manifest", href: "/manifest.json" },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  experimental: {
    reactivityTransform: false,
  },
  components: true,
  plugins: [],
  build: {
    transpile: ["@headlessui/vue"],
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  colorMode: {
    classSuffix: "",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  vite: {},
  nitro: {
    compressPublicAssets: true,
    /*
    prerender: {
      crawlLinks: true,
    },
    */
  },
  image: {
    provider: "imgix",
    imgix: {
      baseURL: "",
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
