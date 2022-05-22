// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['news.itmo.ru']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/news',
        permanent: true
      }
    ];
  }
};
