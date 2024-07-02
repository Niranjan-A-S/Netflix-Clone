import { Redis } from 'ioredis';

const REDIS_CONNECTION_STRING = process.env.REDIS_CONNECTION_STRING;

const getRedisInstance = () => {
    try {
        const redis = new Redis(REDIS_CONNECTION_STRING || '');
        return redis;
    } catch (error) {
        console.log('[Redis] Could not create a Redis instance', error);
    }
};

export default getRedisInstance();

export const MOVIES_KEY = 'movies';
