/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "photos.google.com" },
            { hostname: "res.cloudinary.com" },
            { hostname: "avatar.iran.liara.run" },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/sora/home",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
