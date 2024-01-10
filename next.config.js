const withNextIntl = require('next-intl/plugin')();
/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
}

module.exports = withNextIntl(nextConfig)
