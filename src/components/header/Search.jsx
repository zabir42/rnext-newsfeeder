import { useEffect, useState } from "react";
import { useSearchContext } from "../../context";

function Search() {
  const [showInput, setShowInput] = useState(false);
  const { searchQuery, setSearchQuery } = useSearchContext();

  const handleSearchInput = () => {
    setShowInput((prevShowInput) => !prevShowInput);
    console.log("click");
  };

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      {showInput && (
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      )}
      <img onClick={handleSearchInput} src="./assets/icons/search.svg" />
    </div>
  );
}

export default Search;
