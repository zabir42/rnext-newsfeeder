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
    newsData
  } = useNewsContext();
  const { searchQuery, filterBySearchQuery } = useSearchContext();

  const filteredArticles = getFilteredArticles(
    selectedCategory,
    categories,
    getArticlesByCategory
  ).filter((article) => filterBySearchQuery(article, searchQuery));

  console.log(newsData);

  return (
    <main className="my-10 lg:my-14 container mx-auto mb-4">
      {searchQuery && filteredArticles.length === 0 && (
        <p className="text-lg font-semibold text-center text-red-500">
          No articles matching the search query: {searchQuery} not found...
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
}

export default NewsFeeder;
