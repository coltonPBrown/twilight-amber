import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_BASE_URL;

export function useFetch(url: string) {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("url: " + baseUrl + url);

    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);
  return { data, error, loading };
}
