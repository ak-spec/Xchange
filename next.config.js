/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ipfs.filebase.io',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
