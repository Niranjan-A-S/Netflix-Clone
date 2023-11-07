import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export const useMovieList = () => {
    const { data, error, isLoading } = useSWR('/api/movies', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        movies: data,
        error,
        isLoading
    };
};