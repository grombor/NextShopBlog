/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['via.placeholder.com', 'fakeimg.pl', '46.41.149.166', 'localhost'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = {
  env: {
    customKey: 'my-value',
  },
}

module.exports = nextConfig

// Keep commented until staging build tests and production build
// webpack: (config, { dev, isServer }) => {
//   if (!dev && !isServer) {
//     Object.assign(config.resolve.alias, {
//       react: 'preact/compat',
//       'react-dom/test-utils': 'preact/test-utils',
//       'react-dom': 'preact/compat',
//     })
//   }

//   return config
// };
