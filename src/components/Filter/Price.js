import React, { useState } from "react";

function Price({ price, setPrice }) {
  const [active, setActive] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [sort, setSort] = useState("");
  return (
    <div className="filter__body--price">
      <div
        id="filter_header"
        className="filter__body--title"
        onClick={() => setActive((a) => !a)}
      >
        <div className="filter__title--text">
          <h2>Price</h2>
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
        <div className="filter__submenu--price-1">
          <div
            className={`select_item ${
              sort === "LTH" ? "select_item_active" : ""
            }`}
            style={{ textAlign: "center" }}
            onClick={(e) => {
              // e.stopPropagation();
              setSort((a) => (a === "LTH" ? null : "LTH"));
            }}
          >
            Low to High
          </div>
          <div
            className={`select_item ${
              sort === "HTL" ? "select_item_active" : ""
            }`}
            style={{ textAlign: "center" }}
            onClick={(e) => {
              // e.stopPropagation();
              setSort((a) => (a === "HTL" ? null : "HTL"));
            }}
          >
            High to Low
          </div>
        </div>
        <div className="filter__submenu--price-2">
          <div className="filter__submenu--input">
            <input
              type="number"
              placeholder="Min"
              min={0}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div className="filter__submenu--to">to</div>
          <div className="filter__submenu--input">
            <input
              type="number"
              placeholder="Max"
              min={min ? min : 0}
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>
        <div className="filter__submenu--button">
          <button onClick={() => setPrice({ min, max, sort })}>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Price;
