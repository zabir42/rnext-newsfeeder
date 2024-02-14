import { useEffect, useState } from "react";

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchAllNewsData = async () => {
    setLoading({
      state: true,
      message: "Fetching all news data...",
    });

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${apiBaseUrl}/top-headlines`);

      if (!response.ok) {
        throw new Error(`Fetching all news data failed: ${response.status}`);
      }

      const data = await response.json();
      setNewsData((prevData) => ({
        ...prevData,
        all: { articles: data.articles || [] },
      }));
    } catch (err) {
      setError(err);
    } finally {
      setLoading({ state: false, message: "" });
    }
  };

  const fetchNewsDataByCategory = async (category) => {
    setLoading({
      state: true,
      message: `Fetching news data from ${category}...`,
    });

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(
        `${apiBaseUrl}/top-headlines?category=${category}`
      );

      if (!response.ok) {
        throw new Error(`Fetching news data failed: ${response.status}`);
      }

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
    fetchAllNewsData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchNewsDataByCategory(selectedCategory);
    }
  }, [selectedCategory]);

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

  const getArticlesByCategory = () => {
    const getAllData = Object.values(newsData).flatMap(
      (categoryData) => categoryData.articles
    );
    const getSelectedData = newsData[selectedCategory]?.articles;

    return getSelectedData || getAllData || [];
  };

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
