import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Apply the bundle analyzer if ANALYZE=true
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const finalConfig = bundleAnalyzer(nextConfig);

export default finalConfig;

// Setup Cloudflare dev platform only in development
if (process.env.NODE_ENV === "development") {
  setupDevPlatform().catch((e) => console.error(e));
}
