import { auth } from '@/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
    try {
        const session = await auth();
        if (!session || !session.user) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const favoriteMovies = await db.movie.findMany({
            where: {
                id: {
                    in: session.user.favoriteIds
                }
            }
        });

        return NextResponse.json(favoriteMovies);
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 });
    }

};
