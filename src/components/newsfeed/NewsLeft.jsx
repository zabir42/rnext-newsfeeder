/* eslint-disable react/prop-types */

import { formatDate } from "../../utils/date-utility";

const NewsLeft = ({ articles }) => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {articles.map(
        (
          {
            title,
            description,
            author,
            publishedAt,
            urlToImage,
            content,
            source,
          },
          index
        ) => (
          <div key={index} className="col-span-12 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4">
              <a href="#">
                <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                  {title}
                </h3>
              </a>
              <p className="text-base text-[#5C5955]">
                {description || content}
              </p>
              <p className="mt-5 text-base text-[#5C5955]">
                {formatDate(publishedAt)}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <img
                className="w-full"
                src={urlToImage || "./assets/thumb_lg.png"}
                alt="thumb"
              />
              <p className="mt-5 text-base text-[#5C5955]">
                {source.name}: {author || "unknown"}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default NewsLeft;
