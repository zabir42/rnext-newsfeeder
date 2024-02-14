import { useNewsContext, useSearchContext } from "../../context";
import NewsContainer from "./NewsContainer";

const NewsFeeder = () => {
  const { loading, articles, error } = useNewsContext();
  const { searchQuery, filterdBySearchQuery } = useSearchContext();

  // Move the declaration above the functions
  const filteredArticles = articles.filter((article) =>
    filterdBySearchQuery(article, searchQuery)
  );

  const renderSearchError = () =>
    searchQuery &&
    filteredArticles.length === 0 && (
      <p className="text-lg font-semibold text-center text-red-500">
        No articles matching the search query: {searchQuery} not found...
      </p>
    );

  const renderError = () => (
    <p className="text-lg font-semibold text-center text-red-500">
      Error: {error.message}
    </p>
  );

  const renderNewsContainer = () => (
    <div className="grid grid-cols-12 gap-8 container mx-auto">
      <NewsContainer articles={filteredArticles} />
    </div>
  );

  const renderLoadingMessage = () => (
    <div className="text-center text-blue-500">
      <p>{loading.message}</p>
    </div>
  );

  return (
    <main className="my-10 lg:my-14 container mx-auto mb-4">
      {renderSearchError()}

      {error && renderError()}

      {!loading.state && !error && renderNewsContainer()}

      {loading.state && !error && renderLoadingMessage()}
    </main>
  );
};

export default NewsFeeder;
