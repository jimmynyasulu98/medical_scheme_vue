// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: [ ['@pinia/nuxt', {
    autoImports:['defineStore', 'acceptHMRUpdate']
  }
  ],'nuxt-headlessui'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devServer: {
    host: 'https://127.0.0.1'
  },

  routeRules: {
    "/profiles/*": { swr: true },
    "/*": { ssr: false },
    "/staff/*": { ssr: false },
    "/invoices/*": { ssr: false },
    "/components/*": { ssr: false },
    "/roles/*": { ssr: false },
    "/employees/*": { ssr: false },
   

  },
  validation: {
    template: false
  },
  
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  

})