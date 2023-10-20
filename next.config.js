/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_USERNAME: '',
    MONGODB_PASSWORD: '',
    MONGODB_CLUSTER: '',
    MONGODB_DATABASE: ''
  }
};

module.exports = nextConfig;
