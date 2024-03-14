import { fetcher } from '@/lib/utils';
import useSwr from 'swr';

export const useBillboard = () => {
  const { data, error, isLoading } = useSwr('/api/random', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};
