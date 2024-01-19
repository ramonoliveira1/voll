import { useEffect, useState } from "react";

export default function useFetch<T>({ url }: { url: string }) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/${ url }`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, [ url ]);

  return { data, error };
}