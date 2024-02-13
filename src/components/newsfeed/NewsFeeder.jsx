import { useNewsContext, useSearchContext } from "../../context";
import { getFilteredArticles } from "../../utils/filtered-utility";
import NewsContainer from "./NewsContainer";

function NewsFeeder() {
  const {
    categories,
    selectedCategory,
    loading,
    getArticlesByCategory,
    error,
  } = useNewsContext();
  const { searchQuery, filterBySearchQuery } = useSearchContext();

  const filteredArticles = getFilteredArticles(
    selectedCategory,
    categories,
    getArticlesByCategory
  ).filter((article) => filterBySearchQuery(article, searchQuery));

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto mb-4">
        {searchQuery && filteredArticles.length === 0 && (
          <p className="text-lg font-semibold text-center text-red-500">
            Search results not found for: {searchQuery}
          </p>
        )}

        {error && (
          <p className="text-lg font-semibold text-center text-red-500">
            Error: {error.message}
          </p>
        )}
      </div>

      {!loading.state && !error ? (
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <NewsContainer articles={filteredArticles} />
        </div>
      ) : null}

      {loading.state && !error && (
        <div className="text-center text-blue-500">
          <p>{loading.message}</p>
        </div>
      )}
    </main>
  );
}

export default NewsFeeder;
