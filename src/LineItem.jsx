import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ item, handleCheck, handleClick }) => {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
        ></input>
        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => handleCheck(item.id)}
        >
          {item.item}
        </label>
        <FaTrashAlt
          role="button"
          tabIndex="0"
          aria-label={"Delete ${item.item}"}
          onClick={() => handleClick(item.id)}
        ></FaTrashAlt>
      </li>
    </div>
  );
};

export default LineItem;
