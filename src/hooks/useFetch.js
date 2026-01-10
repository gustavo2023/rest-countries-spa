import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignored = false;

    setData(null);
    setLoading(true);
    setError(null);
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error("Something went wrong!");

        const data = await response.json();
        if (!ignored) setData(data);
      } catch (error) {
        if (!ignored) setError(error.message);
      } finally {
        if (!ignored) setLoading(false);
      }
    }
    fetchData();

    return () => {
      ignored = true;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
