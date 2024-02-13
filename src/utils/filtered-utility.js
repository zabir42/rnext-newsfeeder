function getFilteredArticles(selectedCategory, categories, cb) {
  return (selectedCategory ? [selectedCategory] : [...categories]).flatMap(
    (category) => cb(category)
  );
}

export { getFilteredArticles };

