import type { NextConfig } from "next";

// 获取仓库名称，用于GitHub Pages部署
const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\/(.*)/g, '$1') || '';
const isProd = process.env.NODE_ENV === 'production';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  
  // GitHub Pages 部署配置
  output: 'export', // 静态HTML导出
  distDir: 'out',
  // 在GitHub Pages上设置正确的基本路径
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  
  // 图像优化配置
  images: {
    unoptimized: true, // GitHub Pages不支持Next.js的图像优化
  },
  
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
};

export default nextConfig;
