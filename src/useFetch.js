import {useEffect, useState} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
          setError(error.message);
          setIsLoading(false);
        })
    }, 1000)
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;