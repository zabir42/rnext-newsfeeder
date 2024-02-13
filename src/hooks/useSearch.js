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

        if (searchQuery.trim() !== "") {
          const response = await fetch(
            `http://localhost:8000/v2/search?q=${encodeURIComponent(
              searchQuery
            )}`
          );

          if (!response.ok) {
            const errorMessage = `Fetching search results failed: ${response.status}`;
            throw new Error(errorMessage);
          }

          const data = await response.json();

          setSearchResults(data.articles || []);
        } else {
          setSearchResults([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const filterBySearchQuery = (article, searchQuery) => {
    const titleIncludesQuery = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const descriptionIncludesQuery =
      article.description &&
      article.description.toLowerCase().includes(searchQuery.toLowerCase());

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
