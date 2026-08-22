import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained Node.js server for the Hostinger KVM 2 Docker image.
  // The regular Sites/Cloudflare build remains available from the same source.
  output: "standalone",
};

export default nextConfig;
