import { useNewsContext, useSearchContext } from "../../context";
import { getFilteredArticles } from "../../utils/filtered-utility";
import NewsContainer from "./NewsContainer";

function NewsFeeder() {
  const { categories, selectedCategory, loading, getCategory } =
    useNewsContext();
  const { searchQuery } = useSearchContext();

  const filteredArticles = getFilteredArticles(
    selectedCategory,
    categories,
    getCategory
  ).filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto mb-4">
        {searchQuery && filteredArticles.length === 0 && (
          <p className="text-lg font-semibold text-center text-red-500">
            Search results not found for: {searchQuery}
          </p>
        )}
      </div>

      {!loading.state ? (
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <NewsContainer articles={filteredArticles} />
        </div>
      ) : (
        <div className="text-center text-blue-500">
          <p>{loading.message}</p>
        </div>
      )}
    </main>
  );
}

export default NewsFeeder;
