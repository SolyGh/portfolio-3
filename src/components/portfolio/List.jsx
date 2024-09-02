/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="portfolio__list17">
      {list.map((category, index) => {
        return (
          <button
            className={`${
              active === index ? "active-work17" : ""
            } portfolio__list-item17 text-cs17 `}
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default List;
