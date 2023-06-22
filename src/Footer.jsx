import React from "react";
import "./Footer.css";

const Footer = ({ length }) => {
  return (
    <div className="footer">
      <footer>
        {length} list {length === 1 ? "item" : "items"}
      </footer>
    </div>
  );
};

export default Footer;
