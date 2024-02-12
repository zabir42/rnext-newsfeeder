const articlesByCategory = (categories, newsData) => {
  return categories.map((category) => newsData[category]?.articles);
};

export default articlesByCategory;
