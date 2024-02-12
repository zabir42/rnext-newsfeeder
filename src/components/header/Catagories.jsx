import React from "react";
import { useNewsContext } from "../../context";

function Catagories() {
  const { categories, setSelectedCategory } = useNewsContext();

  const handleClick = (e, category) => {
    e.preventDefault();
    console.log(category);
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        {categories.map((category, index) => (
          <li key={index}>
            <a onClick={(e) => handleClick(e, category)} href="#">
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catagories;
