import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [error, setErorr] = useState(null);
  const request = useCallback(async (url: string, method = 'GET', body = null, headers = {}) => {
    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
      });
      const data = response.json();

      return data;
    } catch (e) {}
  }, []);

  return { request, error };
};
