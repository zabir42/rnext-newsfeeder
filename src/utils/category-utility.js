const articlesByCategoryName = (categories, newsData) => {
  if (Array.isArray(categories)) {
    return categories.map((category) => newsData[category]?.articles);
  } else {
    return [newsData[categories]?.articles];
  }
};

export default articlesByCategoryName;
