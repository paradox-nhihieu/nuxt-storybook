export default defineNuxtConfig({
  modules: [
    '../../storybook/src/module',
    '../src/module',
  ],
  myModule: {},
  devtools: { enabled: true }
})
