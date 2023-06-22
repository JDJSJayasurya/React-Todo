import React from "react";
import { FaPlus } from "react-icons/fa";
const Add_item = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="additem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button type="submit" aria-label="Add Item">
        <FaPlus></FaPlus>
      </button>
    </form>
  );
};

export default Add_item;
