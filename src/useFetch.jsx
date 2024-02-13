import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch Aborted!!');
          } else {
            setError(err.message);
            setPending(false);
          }
          setError(err.message);
          setPending(false);
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
