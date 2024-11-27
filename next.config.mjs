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
        remotePatterns: [{hostname: "https://avatar.iran.liara.run/username?username=${member.name}"}]// Add the required hostname here
    }
};

export default nextConfig;
