import {useEffect, useState} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) throw Error('Could not fetch data for that resource');

          return res.json();
        })
        .then(data => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === 'AbortError') return;

          setError(error.message);
          setIsLoading(false);
        })
    }, 500);

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;