import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
    try {
        const moviesCount = await db.movie.count();
        const randomIndex = Math.floor(Math.random() * moviesCount);

        const randomMovies = await db.movie.findMany({
            take: 1,
            skip: randomIndex
        });

        return NextResponse.json(randomMovies[0]);
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 });
    }
};
