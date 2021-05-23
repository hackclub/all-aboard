const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    domains: [
      'cloud-16uu33t6r-hack-club-bot.vercel.app',
      'upload.wikimedia.org',
      '261.com',
      'cloud-3q64c1iul-hack-club-bot.vercel.app'
    ]
  }
})
