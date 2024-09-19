/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';

const DEFAULT_HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
};

interface FetchParams {
  url: string;
  headers?: Record<string, string>;
}

export function useFetch<T>({ url, headers = {} }: FetchParams) {
  const [data, setData] = useState<T>({} as T);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_HOST}${url}`, {
        headers: {
          ...DEFAULT_HEADERS,
          ...headers,
        },
      })
      .then((response) => {
        console.log(`datta`, data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(`err`, err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, JSON.stringify(headers)]);

  return { data, isLoading };
}
