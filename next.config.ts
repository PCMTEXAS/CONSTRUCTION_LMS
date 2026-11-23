import type { NextConfig } from "next";

const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

const config: NextConfig = {
  trailingSlash: true,
  // Two root layouts (app/(en), app/(es)) need one global 404: app/global-not-found.tsx.
  experimental: { globalNotFound: true },
  // Preview builds: tell search engines not to index anything, on every response.
  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
    ];
    return [{ source: "/:path*", headers: ALLOW_INDEXING ? security : [...security, { key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default config;
