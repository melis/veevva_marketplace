import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const CatalogButton = ({ setHCatalog, hCatatalog, category }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("c"));
  // setSearchParams({ melis: "melis" });
  // console.log(searchParams);
  return (
    <>
      <div
        className="header__categories--menu"
        onClick={() => setHCatalog((a) => !a)}
      >
        <div
          className={`hamburger hamburger--squeeze ${
            hCatatalog && "is-active"
          }`}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
        <span className="header__categories--name">Categories</span>
      </div>
      <div
        className={`header__categories--category ${
          hCatatalog && "header-category-active"
        }`}
      >
        {category.map((c) => (
          <div
            key={c.id}
            className="header__category--item"
            onClick={() => {
              let search = { c: c.id };
              // if (searchParams.get("f")) {
              //   search = { ...search, f: searchParams.get("f") };
              // }
              setSearchParams(search);
            }}
          >
            {c.category_name}
          </div>
        ))}
      </div>
    </>
  );
};

export default CatalogButton;
// <div
//   classNameName="header__categories--menu"
//   style={{ position: "relative" }}
//   onClick={() => setHCatalog((a) => !a)}
//   onMouseOver={() => setHCatalog(true)}
//   onMouseLeave={() => setHCatalog(false)}
// >

// </div>
