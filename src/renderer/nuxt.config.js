/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'ScoreScan',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  css: [
    '~/assets/scss/main'
  ],
  plugins: [
    {
      ssr: true, src: '@/plugins/icons.js'
    },
  ],
  buildModules: [
    
  ],
  modules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    optionsPath: "./vuetify.options.js",
  }
};
