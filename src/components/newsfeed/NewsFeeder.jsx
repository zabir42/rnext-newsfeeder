import { useNewsContext, useSearchContext } from "../../context";
import NewsContainer from "./NewsContainer";

const NewsFeeder = () => {
  const { loading, articles, error } = useNewsContext();
  const {
    searchQuery,
    filterdBySearchQuery,
    searchResults,
    error: searchError,
  } = useSearchContext();

  const searchArticles = searchQuery ? searchResults : articles;
  const filteredArticles = searchArticles.filter((article) =>
    filterdBySearchQuery(article, searchQuery)
  );

  return (
    <main className="my-10 lg:my-14 container mx-auto mb-4">
      {!searchError && searchQuery && filteredArticles.length === 0 && (
        <p className="text-lg font-semibold text-center text-red-500 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 mx-auto mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-4 0a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          Nothing Found
        </p>
      )}

      {error && (
        <p className="text-lg font-semibold text-center text-red-500">
          Error: {error.message}
        </p>
      )}

      {!loading.state && !error && (
        <div className="grid grid-cols-12 gap-8 container mx-auto">
          <NewsContainer articles={filteredArticles} />
        </div>
      )}

      {loading.state && !error && (
        <div className="text-center text-blue-500">
          <p>{loading.message}</p>
        </div>
      )}
    </main>
  );
};

export default NewsFeeder;
