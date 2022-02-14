import React, { useState } from "react";

function Brand(props) {
  const [active, setActive] = useState(false);
  return (
    <div className="filter__body--brand">
      <div
        id="filter_header"
        className="filter__body--title"
        onClick={() => setActive((a) => !a)}
      >
        <div className="filter__title--text">
          <h2>Brands</h2>
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
        <div className="filter__submenu--categories filter__submenu--brand">
          <div>
            <a href="#">Brand</a>
          </div>
          <div>
            <a href="#">Brand</a>
          </div>
          <div>
            <a href="#">Brand</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
