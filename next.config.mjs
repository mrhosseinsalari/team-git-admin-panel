/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "team-git.iran.liara.run",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
