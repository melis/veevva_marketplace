import React, { useEffect, useState } from "react";
import api from "../../api";

function Category({ select, setSelect }) {
  const [active, setActive] = useState(false);
  const [cat, setCat] = useState([]);
  const [sText, setSText] = useState("");
  const [rCat, setRCat] = useState([]);

  useEffect(() => {
    if (!sText) {
      setRCat(cat.filter((c) => c.level === 1 || select === c.id));
    } else {
      setRCat(
        cat.filter(
          (c) =>
            c.category_name.toLowerCase().search(sText.toLowerCase()) !== -1 ||
            c.id === select
        )
      );
    }
  }, [sText, cat, select]);

  useEffect(() => {
    api
      .getCategories()
      .then((category) => setCat(category))
      .catch((e) => setCat([]));
  }, []);
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
          <input
            type="text"
            placeholder="Search"
            value={sText}
            onChange={(e) => setSText(e.target.value)}
          />
        </div>
        <div className="filter__submenu--categories ">
          {rCat.map((c) => {
            return (
              <div
                key={c.id}
                onClick={() =>
                  setSelect((id) => {
                    if (id === c.id) {
                      return null;
                    }
                    return c.id;
                  })
                }
                className={`select_item ${
                  select === c.id ? "select_item_active fff" : ""
                }`}
              >
                {c.category_name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
