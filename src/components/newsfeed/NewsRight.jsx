/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/date-utility";

function NewsRight({ articles }) {
  return (
    <div className="col-span-12 self-start xl:col-span-4 space-y-6 divide-y-2 divide-[#D5D1C9]">
      {articles.map(
        ({ title, description, urlToImage, publishedAt, content }, index) => (
          <div key={index} className="col-span-12 mb-6 md:col-span-8">
            <img
              className="w-full"
              src={
                urlToImage || "./assets/thumb.png" || "./assets/thumb_lg.png"
              }
              alt="thumb"
            />

            <div className="col-span-12 mt-6 md:col-span-4">
              <a href={`#${index}`}>
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">
                {description || content}
              </p>
              <p className="mt-5 text-base text-[#94908C]">
                {formatDate(publishedAt)}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default NewsRight;
