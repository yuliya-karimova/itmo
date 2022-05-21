// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['news.itmo.ru']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(ts)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: { plugins: [{ removeViewBox: false }] }
          }
        }
      ]
    });

    return config;
  }
};
