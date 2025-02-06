import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',

  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback, 
      fs: false,
      net: false,
      tls: false 
    };

    return config;
  },

  images: {
    domains: ['localhost', 'decifrandocoracoes.com']
  }
};

export default nextConfig;