export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'drscan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/css/vue-phone-number-input.css',
    'vue-form-wizard/dist/vue-form-wizard.min.css',

    'assets/css/all.css',
    'assets/css/style.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  script: [
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" },
    {
      src: 'jquery/dist/jquery.js',
      body: true,
    },

      {
      src: 'assets/js/popper.min.js',
      body: true
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-phone-number-input.js' },
    { src: '~/plugins/vuejs-datepicker.js', mode: "client"  },
    { src: '~/plugins/vue-the-mask.js', mode: 'client' },
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    { src: '~/plugins/vue-form-wizard.js', ssr: false },
    // '~plugins/js/bootstrap.min.js',
    // { src: "~/node_modules/bootstrap/dist/js/bootstrap.min.js", mode: "client" },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    'vue-toastification/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
