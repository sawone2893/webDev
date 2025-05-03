import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error,setError]=useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await fetch(url,{ signal: controller.signal });
        if(!response.ok){
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setloading(false);
        setData(result);
        setError("");
      } catch (err) {
        setloading(false);
        setError(err.message);
      }
    };
    fetchData();
    return ()=> controller.abort();
  }, [url]);

  return { data, loading,error };
};
