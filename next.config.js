/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        MONGODB_USERNAME: 'netflix-clone-user',
        MONGODB_PASSWORD: 'ldwCobOlQLprNwqg',
        MONGODB_CLUSTER: 'netflix-cluster',
        MONGODB_DATABASE: 'netflix-clone',
        NEXTAUTH_JWT_SECRET: 'NEXT_JWT_SECRET',
        NEXTAUTH_SECRET: 'NEXT_SECRET',
        GITHUB_ID: '730b0cf077cdd547fb68',
        GITHUB_SECRET: 'cbaa6edeb3a6cf3ab2813071716bca5b16b81773',
        GOOGLE_ID: '419216670444-tni4it9ot79mg9736o35ar49bnhbsin3.apps.googleusercontent.com',
        GOOGLE_SECRET: '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'
      }
    };
  }

  //production config
  return {
    env: {
      MONGODB_USERNAME: 'netflix-clone-user',
      MONGODB_PASSWORD: 'ldwCobOlQLprNwqg',
      MONGODB_CLUSTER: 'netflix-cluster',
      MONGODB_DATABASE: 'netflix-clone',
      NEXTAUTH_JWT_SECRET: 'NEXT_JWT_SECRET',
      NEXTAUTH_SECRET: 'NEXT_SECRET',
      GITHUB_ID: '730b0cf077cdd547fb68',
      GITHUB_SECRET: 'cbaa6edeb3a6cf3ab2813071716bca5b16b81773',
      GOOGLE_ID: '419216670444-tni4it9ot79mg9736o35ar49bnhbsin3.apps.googleusercontent.com',
      GOOGLE_SECRET: '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'
    }
  };
};

module.exports = nextConfig;
