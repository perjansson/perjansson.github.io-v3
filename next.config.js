const withPWA = require('next-pwa')

module.exports = withPWA({
  images: {
    domains: ['images.ctfassets.net'],
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
})
