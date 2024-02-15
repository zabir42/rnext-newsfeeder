import { useNewsContext, useSearchContext } from "../../context";
import NewsContainer from "./NewsContainer";

const NewsFeeder = () => {
  const { loading, articles, error } = useNewsContext();
  const { searchQuery, filterdBySearchQuery, searchResults } =
    useSearchContext();

  const searchArticles = searchQuery ? searchResults : articles;
  const filteredArticles = searchArticles.filter((article) =>
    filterdBySearchQuery(article, searchQuery)
  );


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
};

export default NewsFeeder;
