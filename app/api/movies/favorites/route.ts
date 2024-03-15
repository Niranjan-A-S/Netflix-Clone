import { auth } from '@/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async (_req: Request) => {
    try {
        const session = await auth();
        if (!session || !session.user) return new NextResponse('Unauthorized', { status: 401 });

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

export const POST = async (req: Request) => {
    try {

        const session = await auth();
        if (!session || !session.user) return new NextResponse('Unauthorized', { status: 401 });

        const { movieId } = await req.json();
        if (!movieId) return new NextResponse('No movie ID found', { status: 422 });

        const existingMovie = await db.movie.findUnique({
            where: {
                id: movieId
            }
        });
        if (!existingMovie) return new NextResponse('No movie with the provided ID exist', { status: 404 });

        const user = await db.user.update({
            where: {
                id: session.user.id
            },
            data: {
                favoriteIds: {
                    push: [
                        movieId
                    ]
                }
            }
        });

        return NextResponse.json(user);

    } catch (error) {
        return new NextResponse('Internal Error!', { status: 500 });
    }
};

export const DELETE = async (req: Request) => {
    try {

        const session = await auth();
        if (!session || !session.user) return new NextResponse('Unauthorized', { status: 401 });

        const { movieId } = await req.json();
        if (!movieId) return new NextResponse('No movie ID found', { status: 422 });

        const existingMovie = await db.movie.findUnique({
            where: {
                id: movieId
            }
        });
        if (!existingMovie) return new NextResponse('No movie with the provided ID exist', { status: 404 });

        const user = await db.user.update({
            where: {
                id: session.user.id
            },
            data: {
                favoriteIds: {
                    set: session.user.favoriteIds?.filter((id) => id !== movieId)
                }
            }
        });

        return NextResponse.json(user);

    } catch (error) {
        return new NextResponse('Internal Error!', { status: 500 });
    }
};
