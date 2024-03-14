/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    //TODO use remotePatterns instead of domains
    images: {
        domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com']
    }
};

export default nextConfig;
