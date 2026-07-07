import type { NextConfig } from "next";

/**
 * Static export configuration for GitHub Pages.
 *
 * - `output: "export"`  -> `next build` emits a fully static `out/` folder
 *   (with a real `out/index.html`) that GitHub Pages can serve directly.
 * - `basePath` is read from NEXT_PUBLIC_BASE_PATH so the SAME code works:
 *     * locally (dev / preview):  empty  -> served at `/`
 *     * GitHub Pages project site: `/repo-name`
 *   The deploy workflow sets this env var automatically.
 * - `images.unoptimized` is required for static export (no server-side
 *   image optimizer on GitHub Pages).
 * - `trailingSlash: true` makes every route resolve to a folder with an
 *   `index.html`, which is what static hosts expect.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
