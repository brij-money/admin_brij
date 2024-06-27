// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api/v2'
    }
  },

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  css: [
    '~/assets/css/global.css'  // Path to your CSS file
  ],
  modules: [
    'maz-ui/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    "@sidebase/nuxt-auth",
  ],



  plugins: [
    '~/plugins/apexcharts.client.ts',
  ],



  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  
  auth: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000/api',
    globalAppMiddleware:true,
    provider: {
      type: 'local',
      pages:{
        login: '/',
      },
      endpoints: {
        signIn: { path: '/login/admin', method: 'post' },
        // signOut: {  },
        getSession: { path: '/admin/me', method: 'get' },
      },
      token: {  signInResponseTokenPointer: '/data/tokens/0/personal_access_token', type:'Bearer', },
    }
  }
})

