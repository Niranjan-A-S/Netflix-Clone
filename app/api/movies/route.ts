import { db } from '@/lib/db';
import redis, { MOVIES_KEY } from '@/redis';
import { NextResponse } from 'next/server';

export const GET = async (_req: Request) => {
    try {
        const cachedMovies = await redis?.get(MOVIES_KEY);
        if (cachedMovies) return NextResponse.json(JSON.parse(cachedMovies));

        const movies = await db.movie.findMany({});
        await redis?.set(MOVIES_KEY, JSON.stringify(movies));

        return NextResponse.json(movies);
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 });
    }
};
