/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    //TODO remove this domain later
    images: {
        domains: ['img.clerk.com']
    }
};

export default nextConfig;
