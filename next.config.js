module.exports = {
  webpack(config) {
    config.module.rules.push(
      ...[
        {
          test: /\.svg$/,
          issuer: /\.(ts)x?$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.svg$/,
          issuer: /\.css$/,
          use: ['svg-url-loader'],
        },
      ]
    )

    return config
  },

  images: {
    domains: ['images.ctfassets.net'],
    loader: 'custom',
  },
}
