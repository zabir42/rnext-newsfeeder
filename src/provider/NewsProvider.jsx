import { NewsContext } from "../context";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
  const {
    newsData,
    categories,
    error,
    loading,
    articleByCategoryName,
    selectedCategory,
    setSelectedCategory,
  } = useNewsQuery();
  return (
    <NewsContext.Provider
      value={{
        newsData,
        categories,
        error,
        loading,
        articleByCategoryName,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
