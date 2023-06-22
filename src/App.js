import Add_item from "./Add_item";
import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from "react";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Working out" },
    { id: 2, checked: false, item: "Practise on Skills" },
    { id: 3, checked: true, item: "Playing" },
  ]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_List", JSON.stringify(listItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_List", JSON.stringify(listItems));
  };
  const handleClick = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_List", JSON.stringify(listItems));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div>
      <Header title="Todo-App"></Header>
      <Add_item
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      ></Add_item>
      <SearchItem search={search} setSearch={setSearch}></SearchItem>
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleClick={handleClick}
      ></Content>
      <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
