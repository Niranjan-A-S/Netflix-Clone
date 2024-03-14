import { db } from "@/lib/db"
import { IWatchMovieParams } from "@/types/component-props"
import { NextResponse } from "next/server"

export async function GET(_req: Request, { params: { movieId } }: IWatchMovieParams) {
    try {
        if (!movieId) {
            return new NextResponse('Movie ID is missing', { status: 422 })
        }
        const movie = await db.movie.findUnique({
            where: {
                id: movieId
            }
        })
        if (!movie) {
            return new NextResponse('Movie not found', { status: 404 })
        }
        return NextResponse.json(movie)
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 })
    }

}