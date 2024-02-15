import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/";

const useSearch = (initialQuery = "") => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      setError(null);

      const searchApiUrl = import.meta.env.VITE_SEARCH_API;
      const apiUrl = `${searchApiUrl}?q=${searchQuery}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Fetching search results failed: ${response.status}`);
      }

      const data = await response.json();
      setSearchResults(data.result || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchData = useDebounce(fetchSearchResults, 1000);

  useEffect(() => {
    debouncedFetchData();
  }, [searchQuery, debouncedFetchData]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
    setSearchResults,
  };
};

export default useSearch;
