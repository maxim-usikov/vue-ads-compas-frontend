import 'dotenv/config'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#009688', height: '5px' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/dotenv', '@nuxtjs/axios', '@nuxtjs/auth'],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BACKEND_HOST
  },

  auth: {
    defaultStrategy: 'GrantPassword',
    redirect: {
      login: '/sign-in',
      logout: false,
      callback: '/sign-in',
      home: '/'
    },
    token: { prefix: '_access_token.' },
    strategies: {
      local: false,
      GrantPassword: {
        _scheme: '~/services/auth/GrantPassword.scheme.js',
        _name: 'GrantPassword',
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        scope: '*',
        endpoints: {
          login: { url: '/oauth/token', method: 'post' },
          logout: false,
          user: { url: 'api/me', method: 'get', propertyName: 'data' }
        }
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib', '@nuxtjs/auth/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
