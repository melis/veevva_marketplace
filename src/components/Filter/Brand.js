import React, { useEffect, useState } from "react";
import api from "../../api";

function Brand({ select, setSelect }) {
  const [active, setActive] = useState(false);
  const [brands, setBrands] = useState([]);

  const [rBrands, setRbrands] = useState([]);
  const [sText, setSText] = useState("");

  useEffect(() => {
    api.getBrands().then((b) => setBrands(b.brand));
  }, []);

  useEffect(() => {
    if (!sText) {
      if (brands.length > 5) {
        let arr = [...brands];
        arr.length = 5;

        setRbrands([...arr]);
      } else {
        setRbrands(brands);
      }
    } else {
      setRbrands(
        brands.filter(
          (c) =>
            c.brand_name.toLowerCase().search(sText.toLowerCase()) !== -1 ||
            select?.id === c.id
        )
      );
    }
  }, [sText, brands, select]);

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
          <input
            type="text"
            placeholder="Search"
            value={sText}
            onChange={(e) => setSText(e.target.value)}
          />
        </div>
        <div className="filter__submenu--categories filter__submenu--brand">
          {rBrands.map((b) => (
            <div
              key={b.id}
              onClick={() =>
                setSelect((a) => {
                  if (a?.id === b.id) {
                    return null;
                  }
                  return b;
                })
              }
              className={`select_item ${
                select?.id === b.id ? "select_item_active" : ""
              }`}
            >
              {b.brand_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;
