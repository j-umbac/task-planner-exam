// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: './src',

  modules: [
    [
      '@nuxtjs/tailwindcss', {
        cssPath: '~/assets/styles/tailwind.css'
      }
    ],
    'nuxt-icon',
    '@pinia/nuxt',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  css: ['~/assets/css/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      environment: process.env.APP_ENV,
      baseUrl: process.env.BASE_URL,
      apiUrl: process.env.API_URL,
      version: process.env.VERSION,
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
