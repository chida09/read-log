import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server Actions の有効化
  experimental: {
  },
  // 画像最適化の設定
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 外部画像URLを許可（MVP用設定）
      },
    ],
  },
  // TypeScriptエラーを警告として扱う（開発時の利便性向上）
  typescript: {
    ignoreBuildErrors: false, // 本番環境ではfalseに設定
  },
  // ESLintエラーを警告として扱う（開発時の利便性向上）
  eslint: {
    ignoreDuringBuilds: false, // 本番環境ではfalseに設定
  },
};

export default nextConfig;
