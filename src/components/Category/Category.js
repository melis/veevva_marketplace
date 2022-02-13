import React, { useState } from "react";
import api from "../../api";
function Category({ category, menu }) {
  const [active, setActive] = useState(false);

  return (
    <a
      className="categories__category"
      onMouseLeave={() => setActive(false)}
      href={`./cartegory?c=${category.id}`}
    >
      <div className="categories__category--image" style={{ marginTop: "5px" }}>
        <img
          src={`${api.baseUrl}/categories/${category.category_path}`}
          alt={category.category_name}
        />
      </div>
      <div className="categories__category--body">
        {menu.length ? (
          <>
            <span
              className="categories__category--title"
              // style={{ marginBottom: "25px", marginLeft: "20px" }}
              onClick={(e) => {
                e.preventDefault();
                setActive((a) => !a);
              }}
            >
              {category.category_name}
              <img src={`${api.baseUrl}/categories/arrow.svg`} alt="arrow" />
            </span>
            <div
              className={`categories__category--list ${
                active && "list-active"
              }`}
            >
              {menu.map((m) => (
                <div
                  className="categories__category--item"
                  key={m.id}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `./category?c=${m.id}`;
                  }}
                >
                  <div>{m.category_name}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          category.category_name
        )}
      </div>
    </a>
  );
}

export default Category;
