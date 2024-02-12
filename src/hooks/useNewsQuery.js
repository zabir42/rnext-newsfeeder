import { useEffect, useState } from "react";

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
      if (selectedCategory) {
        console.log("Selected Category in useEffect:", selectedCategory);

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

  return {
    newsData,
    loading,
    error,
    categories,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useNewsQuery;
