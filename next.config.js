/** @type {import('next').NextConfig} */

module.exports = {
    basePath: '/'
    swcMinify: true,
    images: {
        domains: ['imgix.cosmicjs.com'],
        formats: ['image/avif', 'image/webp'],
    },
}