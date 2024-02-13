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
    getArticlesByCategory,
  } = useNewsQuery();
  return (
    <NewsContext.Provider
      value={{
        newsData,
        categories,
        error,
        loading,
        selectedCategory,
        setSelectedCategory,
        getArticlesByCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
