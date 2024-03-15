import { Error } from '@/components/common/error';
import { WatchMovie } from '@/components/watch-movie';
import { IWatchMovieParams } from '@/types';

export default function WatchMoviePage({ params: { movieId } }: IWatchMovieParams) {

    if (!movieId) return <Error />;

    return (
        <WatchMovie movieId={movieId} />
    );
}
