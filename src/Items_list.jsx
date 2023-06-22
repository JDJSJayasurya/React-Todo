import React from "react";
import LineItem from "./LineItem";

const Items_list = ({ items, handleCheck, handleClick }) => {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <LineItem
              item={item}
              key={item.id}
              handleCheck={handleCheck}
              handleClick={handleClick}
            ></LineItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Items_list;
