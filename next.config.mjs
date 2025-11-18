/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/dribagwebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dribagwebsite' : '',
  trailingSlash: true,
}

export default nextConfig
