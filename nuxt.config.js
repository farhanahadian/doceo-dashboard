require('dotenv').config()
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Dashboard | Doceo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Doceo Dashboard' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/bootstrap.min.css' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },
      { rel: 'stylesheet', href: '/theme/css/style.css' },
      { rel: 'stylesheet', href: '/theme/css/components.css' },
      { rel: 'stylesheet', href: '/main.css' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/tooltip.js/1.3.3/umd/tooltip.min.js' },
      { src: '/assets/bootstrap.bundle.min.js', deffer: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js', deffer: true },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/v-select',
    '~/plugins/v-b-icons',
    '~/plugins/v-range-picker',
    '~/plugins/v-wizard',
    // '~/plugins/v-texteditor',
    '~/plugins/v-placeholder',
    '~/plugins/v-sortable',
    '~/plugins/v-video'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
    'vue-sweetalert2/nuxt'
  ],

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },

  toast: {
    theme: 'outline',
    duration: 1000,
    position: 'bottom-right'
  },

  env: {
    urlAPI: `${process.env.URL_API}`,
    urlLogin: `${process.env.URL_API}/auth/login`
  },

  auth: {
    strategies: {
      local: {
        token: { property: 'access_token', maxAge: 60 * 60 * 3.5 },
        refreshToken: { property: 'refresh_token', maxAge: 60 * 60 * 7 },
        user: { property: '' },
        endpoints: {
          login: false,
          logout: false,
          user: { url: `/webapi/account/me`, method: 'get' }
        }
      }
    }
  },

  loading: '~/components/LoadingPage.vue',
  loadingIndicator: {
    name: 'three-bounce',
    color: '#6777ef',
    background: 'white'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },
  proxy: {
    '/webapi/': { target: process.env.URL_API, pathRewrite: { '^/webapi/': '' } },
    '/slidec/': { target: process.env.URL_SLIDEC, pathRewrite: { '^/slidec/': '' } }
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  router: {
    middleware: ['authentic'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  server: {
    port: process.env.PORT || 5005,
    host: '0.0.0.0'
  }
}
