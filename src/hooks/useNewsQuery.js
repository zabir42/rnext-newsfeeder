import { useEffect, useState } from "react";
import articlesByCategoryName from "../utils/category-utility";

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchNewsData = async (category) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: `Fetching news data for ${category}...`,
      });

      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${category}`
      );

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const newsDataList = data.articles || [];

      setNewsData((prevData) => ({
        ...prevData,
        [category]: {
          articles: [...newsDataList],
        },
      }));
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      if (selectedCategory) {
        await fetchNewsData(selectedCategory);
      } else {
        for (const category of categories) {
          await fetchNewsData(category);
        }
      }
    };

    fetchData();
  }, [selectedCategory]);

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const getCategory = (category) =>
    articlesByCategoryName([category], newsData)[0] || [];

  return {
    newsData,
    loading,
    error,
    categories,
    selectedCategory,
    setSelectedCategory,
    getCategory,
  };
};

export default useNewsQuery;
