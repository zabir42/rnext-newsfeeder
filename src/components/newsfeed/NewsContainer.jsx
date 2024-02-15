import React from "react";
import NewsLeft from "./NewsLeft";
import NewsRight from "./NewsRight";

// eslint-disable-next-line react/prop-types
const NewsContainer = ({ articles, category }) => {
  return (
    <React.Fragment key={category}>
      <NewsLeft articles={articles} />
      <NewsRight articles={articles} />
    </React.Fragment>
  );
};

export default NewsContainer;
