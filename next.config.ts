import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/arbitration",
        destination: "/revenue-cycle",
        permanent: true,
      },
      {
        source: "/arbitration/",
        destination: "/revenue-cycle/",
        permanent: true,
      },
      {
        source: "/clinically-integrated-neuropsychology-2",
        destination: "/clinically-integrated-neuropsychology",
        permanent: true,
      },
      {
        source: "/clinically-integrated-neuropsychology-2/",
        destination: "/clinically-integrated-neuropsychology/",
        permanent: true,
      },
      {
        source: "/cognitive-franchise-program-2",
        destination: "/cognitive-franchise-program",
        permanent: true,
      },
      {
        source: "/cognitive-franchise-program-2/",
        destination: "/cognitive-franchise-program/",
        permanent: true,
      },
      {
        source: "/cognificaai",
        destination: "https://cognificaai.vercel.app?utm_source=kronoshealth&utm_medium=referral&utm_campaign=product_redirect",
        permanent: true,
      },
      {
        source: "/cognificaai/",
        destination: "https://cognificaai.vercel.app?utm_source=kronoshealth&utm_medium=referral&utm_campaign=product_redirect",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kronoshealth.co",
      },
    ],
  },
};

export default nextConfig;
