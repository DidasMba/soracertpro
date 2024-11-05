/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname:"photos.google.com"}]
    }
};

export default nextConfig;
