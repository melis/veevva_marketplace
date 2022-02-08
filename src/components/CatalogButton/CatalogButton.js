import React from "react";

const CatalogButton = ({ setHCatalog, hCatatalog, category, st }) => {
  return (
    <div
      className="header__categories--menu"
      style={{ position: "relative" }}
      onClick={() => setHCatalog((a) => !a)}
      // onMouseOver={() => setHCatalog(true)}
      // onMouseLeave={() => setHCatalog(false)}
    >
      <div
        className={`hamburger hamburger--squeeze ${hCatatalog && "is-active"}`}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <span className="header__categories--name" style={{ userSelect: "none" }}>
        Categories
      </span>
      <ul className={`${st.head_menu} ${hCatatalog && st.head_menu_active}`}>
        {category.map((c) => (
          <li key={c.id}>{c.category_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogButton;
