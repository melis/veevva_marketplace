import React, { useState } from "react";

function Category() {
  const [active, setActive] = useState(false);
  return (
    <div className="filter__body--categories">
      <div
        id="filter_header"
        className="filter__body--title"
        onClick={() => setActive((a) => !a)}
      >
        <div className="filter__title--text">
          <h2>Categories</h2>
        </div>
        <div className="filter__title--arrow">
          <img
            src="./images/marketplace_categories/arrow-bottom.svg"
            alt="arrow_bottom"
            style={{ transform: `rotate(${active ? "180deg" : "0deg"})` }}
          />
        </div>
      </div>

      <div
        className={`filter__body--submenu ${active ? "active-submenu" : ""}`}
      >
        <div className="filter__submenu--search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="filter__submenu--categories ">
          <div>
            <a href="#">Beauty & Personal Care</a>
          </div>
          <div>
            <a href="#">Baby</a>
          </div>
          <div>
            <a href="#">Electronics</a>
          </div>
          <div>
            <a href="#">Fashion</a>
          </div>
          <div>
            <a href="#">Health & Household</a>
          </div>
          <div>
            <a href="#">Home & Kitchen</a>
          </div>
          <div>
            <a href="#">Luggage</a>
          </div>
          <div>
            <a href="#">Sports</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
