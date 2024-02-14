import { useEffect, useRef, useState } from "react";
import { useSearchContext } from "../../context";
import useDebounce from "../../hooks/useDebounce";

function Search() {
  const [showInput, setShowInput] = useState(false);
  const { searchQuery, setSearchQuery, loading, error } = useSearchContext();
  const inputRef = useRef(null);

  const handleSearchInput = () => {
    setShowInput((prevShowInput) => !prevShowInput);
  };

  const doSearch = useDebounce((value) => setSearchQuery(value), 300);

  useEffect(() => {
    if (showInput) {
      inputRef.current.focus();
    }
  }, [showInput]);

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      {showInput && (
        <>
          <input
            ref={inputRef}
            type="text"
            className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => doSearch(e.target.value)}
          />
          {loading && <span className="text-blue-500">Loading...</span>}
          {error && <span className="text-red-500">{error.message}</span>}
        </>
      )}
      <img
        onClick={handleSearchInput}
        src="./assets/icons/search.svg"
        alt="Search"
        className="cursor-pointer"
      />
    </div>
  );
}

export default Search;
