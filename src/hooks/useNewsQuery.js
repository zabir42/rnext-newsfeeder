import { useEffect, useState } from "react";
import articlesByCategoryName from "../utils/category-utility";

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchNewsData = async (category) => {
    setLoading({
      state: true,
      message: `Fetching news data from ${category}...`,
    });

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(
        `${apiBaseUrl}/top-headlines?category=${category}`
      );

      if (!response.ok)
        throw new Error(`Fetching news data failed: ${response.status}`);

      const data = await response.json();
      setNewsData((prevData) => ({
        ...prevData,
        [category]: { articles: data.articles || [] },
      }));
    } catch (err) {
      setError(err);
    } finally {
      setLoading({ state: false, message: "" });
    }
  };

  useEffect(() => {
    setError(null);
    const fetchCategories = selectedCategory ? [selectedCategory] : categories;
    Promise.all(fetchCategories.map((category) => fetchNewsData(category)));
  }, [selectedCategory, categories]);

  useEffect(() => {
    setCategories([
      "general",
      "business",
      "entertainment",
      "health",
      "science",
      "sports",
      "technology",
    ]);
  }, []);

  const getArticlesByCategory = (category) =>
    articlesByCategoryName([category], newsData)[0] || [];

  return {
    newsData,
    loading,
    error,
    categories,
    selectedCategory,
    setSelectedCategory,
    getArticlesByCategory,
  };
};

export default useNewsQuery;
