/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ['it', 'en'],
      defaultLocale: 'it',
      localeDetection: false,
    },
    images: {
      domains: ['www.studicabragadin.it'],
    },
  }
  
  module.exports = nextConfig