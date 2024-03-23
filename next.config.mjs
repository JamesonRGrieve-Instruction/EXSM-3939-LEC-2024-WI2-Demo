import { createRequire } from "module";
const require = createRequire(import.meta.url);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/photo/2024/01/29/20/04/mountains-8540738_1280.jpg",
      },
    ],
  },
};

export default process.env.NEXT_ANALYZE === "true"
  ? withBundleAnalyzer(nextConfig)
  : nextConfig;
