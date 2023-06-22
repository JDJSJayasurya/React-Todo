import "./Content.css";
import Items_list from "./Items_list";

const Content = ({ items, handleCheck, handleClick }) => {
  return (
    <div className="list">
      {items.length ? (
        <Items_list
          items={items}
          handleCheck={handleCheck}
          handleClick={handleClick}
        ></Items_list>
      ) : (
        <p>Your list is empty</p>
      )}
    </div>
  );
};

export default Content;
