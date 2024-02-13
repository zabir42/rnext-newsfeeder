import { SearchContext } from "../context";
import { useSearch } from "../hooks";

const SearchProvider = ({ children }) => {
  const { searchQuery, setSearchQuery, searchResults, loading, error } =
    useSearch();
  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        loading,
        error,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
