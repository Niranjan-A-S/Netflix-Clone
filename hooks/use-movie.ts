import { fetcher } from '@/lib/utils';
import useSWR from 'swr';

export const useMovie = (movieId?: string) => {
    const { data, error, isLoading } = useSWR(movieId ? `/api/movie/${movieId}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data,
        error,
        isLoading
    };
};
