export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'prak-4',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast'
    // '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308

    baseURL: 'https://twl2023-2100016127-p6-7.vercel.app/'
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         token: {
  //           // property: false,
  //           required: false
  //           // global: false,
  //           // type: 'Bearer'
  //         }
  //       },
  //       user: {
  //         property: 'data'
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: 'users/login', method: 'post' },
  //         // logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: 'users/logins', method: 'get' }
  //       }
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // NOTE - toast configuration
  toast: {
    position: 'top-center',
    duration: 2000,
    theme: 'bubble'
  }
}
