import { fetcher } from '../utils/axios.js';
import useSWR from 'swr';
import { useMemo } from 'react';


export function useGetData() {
  const URL = 'https://67fcf61f3da09811b17426ed.mockapi.io/user';

  const { data, isLoading, error, isValidating,mutate } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      users: data || [],
      usersLoading: isLoading,
      usersError: error,
      usersValidating: isValidating,
      usersEmpty: !isLoading && (!data || data.length === 0),
      mutate
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
