module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './pages/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      grayscale: {
        50: '50%',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
