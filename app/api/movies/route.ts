import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async (_req: Request) => {
    try {
        const movies = await db.movie.findMany({});

        return NextResponse.json(movies);
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 });
    }
};
