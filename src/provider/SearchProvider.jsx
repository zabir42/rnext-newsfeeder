import { SearchContext } from "../context";
import { useSearch } from "../hooks";

const SearchProvider = ({ children }) => {
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
    filterBySearchQuery,
  } = useSearch();
  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        loading,
        error,
        filterBySearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
