import { useEffect, useState } from "react";

const useSearch = (initialQuery = "") => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timeoutId;

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

    clearTimeout(timeoutId);

    timeoutId = setTimeout(fetchSearchResults, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

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
