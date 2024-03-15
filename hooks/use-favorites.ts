import { fetcher } from '@/lib/utils';
import useSWR from 'swr';

export const useFavorites = () => {
    const { data, error, isLoading } = useSWR('/api/movies/favorites', fetcher, {
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
