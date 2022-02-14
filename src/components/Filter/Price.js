import React, { useState } from "react";

function Price(props) {
  const [active, setActive] = useState(false);
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
          <div className="option_sort">Low to High</div>
          <div className="option_sort">High to Low</div>
        </div>
        <div className="filter__submenu--price-2">
          <div className="filter__submenu--input">
            <input type="text" placeholder="Min" />
          </div>
          <div className="filter__submenu--to">to</div>
          <div className="filter__submenu--input">
            <input type="text" placeholder="Max" />
          </div>
        </div>
        <div className="filter__submenu--button">
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Price;
