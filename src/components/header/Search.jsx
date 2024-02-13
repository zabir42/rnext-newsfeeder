import { useEffect, useState } from "react";
import { useSearchContext } from "../../context";
import useDebounce from "../../hooks/useDebounce"; // Import useDebounce hook

function Search() {
  const [showInput, setShowInput] = useState(false);
  const { searchQuery, setSearchQuery } = useSearchContext();

  const handleSearchInput = () => {
    setShowInput((prevShowInput) => !prevShowInput);
    console.log("click");
  };

  const doSearch = useDebounce((value) => {
    setSearchQuery(value);
    console.log("Debounced Search:", value);
  }, 500);

  useEffect(() => {
    console.log("Actual Search:", searchQuery);
  }, [searchQuery]);

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      {showInput && (
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => doSearch(e.target.value)}
        />
      )}
      <img
        onClick={handleSearchInput}
        src="./assets/icons/search.svg"
        alt="Search"
      />
    </div>
  );
}

export default Search;
