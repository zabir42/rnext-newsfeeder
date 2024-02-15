/* eslint-disable react/prop-types */
import NewsLeft from "./NewsLeft";
import NewsRight from "./NewsRight";

// eslint-disable-next-line react/prop-types
const NewsContainer = ({ articles }) => {
  // eslint-disable-next-line react/prop-types
  const splitIndex = Math.ceil(articles.length / 2);

  return (
    <>
      <NewsLeft articles={articles.slice(0, splitIndex)} />
      <NewsRight articles={articles.slice(splitIndex)} />
    </>
  );
};

export default NewsContainer;
