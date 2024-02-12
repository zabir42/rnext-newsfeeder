import React from "react";
import { useNewsContext } from "../../context";
import NewsLeft from "./NewsLeft";
import NewsRight from "./NewsRight";

function NewsFeeder() {
  const { newsData, categories, selectedCategory, loading } = useNewsContext();

  const renderNewsComponents = (category) => (
    <React.Fragment key={category}>
      <NewsLeft articles={newsData[category]?.articles || []} />
      <NewsRight articles={newsData[category]?.articles || []} />
    </React.Fragment>
  );

  return (
    <main className="my-10 lg:my-14">
      {!loading.state ? (
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {selectedCategory
            ? renderNewsComponents(selectedCategory)
            : categories.map(renderNewsComponents)}
        </div>
      ) : (
        <p className="text-center text-red-500">{loading.message}</p>
      )}
    </main>
  );
}

export default NewsFeeder;
