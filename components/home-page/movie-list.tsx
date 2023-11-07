import { useFavorites } from "@/hooks/use-favorites";
import { useMovieList } from "@/hooks/use-movie-list";
import { IMovie } from "@/types";
import { IMovieListProps } from "@/types/component-props";
import { FC, memo, useCallback } from "react";
import { MovieCard } from "./movie-card";

export const MovieList: FC<IMovieListProps> = memo(({ data, title }) => {
    if (!data.length) {
        return null;
    }
    //TODO fix this
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const renderMovieCard = useCallback((movie: IMovie) => (
        <MovieCard movie={movie} key={movie._id} />
    ), []);

    return <div className="px-4 md:px-12 mt-4 space-y-8">
        <div>
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">{title}</p>
            <div className="grid grid-cols-4 gap-2">
                {data.map(renderMovieCard)}
            </div>
        </div>
    </div>;
});

export const MovieListContainer = memo(() => {
    const { movies = [] } = useMovieList();
    const { data: favorites = [] } = useFavorites();

    return <div className="pb-4">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="Favorites" data={favorites} />
    </div>;
});