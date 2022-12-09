import React from "react";
import "./Categories.css";

const categories = () => {
  return (
    <div className="product-type">
      <div className="mainfilterbox">
        <ul>
          <li>
            <a href="/product-type/assets">Assets</a>
          </li>
          <li>
            <a href="/product-type/video">Video</a>
          </li>
          <li>
            <a href="/product-type/graphics">Graphics</a>
          </li>
          <li>
            <a href="/product-type/ui">UI/UX</a>
          </li>
          <li>
            <a href="/product-type/craft">Artistic</a>
          </li>
          <li>
            <a href="/product-type/african">African</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default categories;
