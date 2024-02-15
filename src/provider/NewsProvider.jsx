import { NewsContext } from "../context";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
  const {
    newsData,
    categories,
    error,
    loading,
    selectedCategory,
    setSelectedCategory,
  } = useNewsQuery();

  // filtered function
  const getArticlesByCategory = () => {
    const getAllData = Object.values(newsData).flatMap(
      (categoryData) => categoryData.articles
    );
    const getSelectedData = newsData[selectedCategory]?.articles;

    return getSelectedData || getAllData || [];
  };

  // Compute articles based on selectedCategory and categories
  const articles = selectedCategory
    ? getArticlesByCategory()
    : categories.flatMap(getArticlesByCategory);

  const contextValue = {
    newsData,
    categories,
    error,
    loading,
    selectedCategory,
    setSelectedCategory,
    articles,
  };

  return (
    <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
