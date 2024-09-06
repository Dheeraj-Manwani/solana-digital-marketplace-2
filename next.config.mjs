/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
        port: "",
        pathname: "blocks/marketing-ui/hero/phone-mockup.png",
      },
    ],
  },
};

export default nextConfig;
