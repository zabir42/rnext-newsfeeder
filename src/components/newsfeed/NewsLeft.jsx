import React from "react";
import { formatDate } from "../../utils/date-utility";

function NewsLeft({ articles }) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      {articles.map((article, index) => (
        <div key={index} className="col-span-12 grid grid-cols-12 gap-4">
          {/* <!-- info --> */}
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {article.title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{article.description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {formatDate(article.publishedAt)}
            </p>
          </div>
          {/* <!-- thumb --> */}
          <div className="col-span-12 lg:col-span-8">
            <img
              className="w-full"
              src={article.urlToImage || "./assets/thumb_lg.png"}
              alt="thumb"
            />
            <p className="mt-5 text-base text-[#5C5955]">
              {article.source.name}: {article.author || "unknown"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsLeft;
