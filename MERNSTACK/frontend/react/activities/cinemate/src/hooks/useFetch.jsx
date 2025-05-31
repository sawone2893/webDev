import { useState, useEffect } from "react";
import { uri } from "../utils/apiRoutes";

const buildUrl = (baseUrl, endpoint, queryParams = {}) => {
  const url = new URL(`${baseUrl}${endpoint}`);
  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });
  return url.toString();
};

export const useFetch = (endpoint, queryParams = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = buildUrl(uri, endpoint, queryParams);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null); // reset error on new request

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_X_RAPID_API_KEY,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "An unexpected error occurred.");
        setData([]); // optional: clear stale data
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};
