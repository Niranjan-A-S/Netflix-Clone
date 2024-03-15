import { fetcher } from '@/lib/utils';
import useSwr from 'swr';

export const useUser = () => {
    const { data, error, isLoading, mutate } = useSwr('/api/user', fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    };
};
