/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/dribagwebsite',
  assetPrefix: '/dribagwebsite',
  trailingSlash: true,
}

export default nextConfig
