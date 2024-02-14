import { useEffect, useState } from "react";

const useSearch = (initialQuery = "") => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        const searchApiUrl = import.meta.env.VITE_SEARCH_API;
        const response = await fetch(`${searchApiUrl}/search?q=${searchQuery}`);

        if (!response.ok) {
          throw new Error(`Fetching search results failed: ${response.status}`);
        }

        const data = await response.json();
        setSearchResults(data.articles || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const filterBySearchQuery = (article, query) => {
    const titleIncludesQuery = article.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const descriptionIncludesQuery =
      article.description &&
      article.description.toLowerCase().includes(query.toLowerCase());

    return titleIncludesQuery || descriptionIncludesQuery;
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
    filterBySearchQuery,
  };
};

export default useSearch;
