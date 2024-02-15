import { SearchContext } from "../context";
import { useSearch } from "../hooks";

// eslint-disable-next-line react/prop-types
const SearchProvider = ({ children }) => {
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
    setSearchResults,
  } = useSearch();

  const filterdBySearchQuery = (query) => (article) => {
    const titleQuery = article.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const descriptionQuery =
      article.description &&
      article.description.toLowerCase().includes(query.toLowerCase());

    return titleQuery || descriptionQuery;
  };

  const contextValue = {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
    filterdBySearchQuery,
    setSearchResults,
  };
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
