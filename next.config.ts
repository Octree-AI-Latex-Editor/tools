import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    // Fix for react-pdf
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
      };
    }
    
    // Alias to use legacy build for pdfjs-dist that works better with webpack
    config.resolve.alias = {
      ...config.resolve.alias,
      'pdfjs-dist': 'pdfjs-dist/legacy/build/pdf',
    };
    
    return config;
  },
  // Transpile react-pdf for server-side rendering
  transpilePackages: ['react-pdf', 'pdfjs-dist'],
  
  // Experimental settings for better module handling
  experimental: {
    esmExternals: 'loose',
  },
};

export default withNextIntl(nextConfig);
