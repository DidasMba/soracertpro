/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "photos.google.com" },
            { hostname: "res.cloudinary.com" },
        ],
    },
};

export default nextConfig;
