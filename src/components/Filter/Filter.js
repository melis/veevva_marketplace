import React from "react";
import Brand from "./Brand";
import Category from "./Category";
import Price from "./Price";

function Filter({ setC, c, setB, b, setPrice, price }) {
  return (
    <aside className="filter">
      <div className="filter__header">
        <div className="filter__header--title">
          <div className="filter__title--logo">
            <img
              src="./images/marketplace_categories/filter.svg"
              alt="filter_icon"
            />
          </div>
          <div className="filter__title--text">
            <h2>Filter</h2>
          </div>
        </div>
        <div className="filter__header--arrow">
          <img
            src="./images/marketplace_categories/Arrow.svg"
            alt="Arrow_left"
          />
        </div>
      </div>

      <div className="filter__body">
        <Category setSelect={setC} select={c} />
        <Brand setSelect={setB} select={b} />
        <Price price={price} setPrice={setPrice} />
      </div>
    </aside>
  );
}

export default Filter;
