// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
// };

// export default withNextIntl(nextConfig);
module.exports = {
  i18n: {
    locales: ["en", "ar", "he"],
    defaultLocale: "he",
    localeDetection: false,
    // debug: true,
  },
};
