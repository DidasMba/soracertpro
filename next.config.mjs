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
    images:{
        remotePatterns:[{hostname:"photos.google.com"}],
        remotePatterns: [{hostname:"avatar.iran.liara.run"}]// Add the required hostname here
    }
};

export default nextConfig;
