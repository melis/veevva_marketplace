import React, { useState } from "react";

function Category({ category }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className="categories__category"
      // onMouseLeave={() => setActive(false)}
      style={{ cursor: "pointer" }}
    >
      <div className="categories__category--image" style={{ marginTop: "5px" }}>
        <img
          src={`./images/marketplace/categories/${category.category_path}`}
          alt="beauty"
        />
      </div>
      <div className="categories__category--body">
        <span
          className="categories__category--title"
          // style={{ marginBottom: "25px", marginLeft: "20px" }}
          onClick={() => setActive((a) => !a)}
        >
          {category.category_name}
          <img src="./images/marketplace/categories/arrow.svg" alt="arrow" />
        </span>
        <div
          className={`categories__category--list ${active && "list-active"}`}
        >
          <div className="categories__category--item">
            <a href="#">Beauty & Personal Care</a>
          </div>
          <div className="categories__category--item">
            <a href="#">Baby</a>
          </div>
          <div className="categories__category--item">
            <a href="#">Electronics</a>
          </div>
          <div className="categories__category--item">
            <a href="#">Fashion</a>
          </div>
          <div className="categories__category--item">
            <a href="#">Health & Household</a>
          </div>
          <div className="categories__category--item">
            <a href="#">Home & Kitchen</a>
          </div>
          <div className="categories__category--item">
            <a href="#">Luggage</a>
          </div>
          <div className="categories__category--item">
            <a href="#">Sports</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
