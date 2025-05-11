// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'ТурПланнер - Ваше приключение начинается здесь!',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Приложение для планирования походов, поиска маршрутов и попутчиков. Упростите подготовку к вашему следующему приключению!' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } 
      ]
    }
  },
   css: [
    '~/assets/css/main.css', 
    '@fortawesome/fontawesome-svg-core/styles.css' 
  ],
 
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      
    ],
  }, 
  modules: [], 
  
})