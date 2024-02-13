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
    getCategory

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
        getCategory
      
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
