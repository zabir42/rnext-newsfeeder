import { SearchContext } from "../context";
import { useSearch } from "../hooks";

const SearchProvider = ({ children }) => {
  const { searchQuery, setSearchQuery, searchResults, loading, error } =
    useSearch();

  const filterdBySearchQuery = (article, query) => {
    const titleQuery = article.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const descriptionQuery =
      article.description &&
      article.description.toLowerCase().includes(query.toLowerCase());

    return titleQuery || descriptionQuery;
  };
  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        loading,
        error,
        filterdBySearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
