import React, { useEffect, useState } from "react";
import Brand from "./Brand";
import Category from "./Category";
import Price from "./Price";
import { useNavigate } from "react-router-dom";
function Filter() {
  const [c, setC] = useState(null);
  const [b, setB] = useState(null);
  const [price, setPrice] = useState(null);
  // const [url, setUrl] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // let url = `/?${c ? ("c=" + c.id + b || price ? "&" : "") : ""}${
    //   b ? ("b=" + b.id + price ? "&" : "") : ""
    // }`;
    let cc = c ? "c=" + c.id : "";
    let bb = b ? "b=" + b.id : "";
    let pp = price ? "p" : "";
    let u = `${c || b || price ? "/?" : ""}${cc}${bb && cc ? "&" : ""}${bb}${
      pp ? "&" : ""
    }`;
    navigate(u);
  }, [c, b, price]);

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
