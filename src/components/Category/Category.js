import React, { useEffect, useState } from "react";

function Category({ category }) {
  const [active, setActive] = useState(false);

  return (
    <a
      className="categories__category"
      onMouseLeave={() => setActive(false)}
      href={`./cartegory?c=${category.id}`}
    >
      <div className="categories__category--image" style={{ marginTop: "5px" }}>
        <img
          src={`./images/marketplace/categories/${category.category_path}`}
          alt={category.category_name}
        />
      </div>
      <div className="categories__category--body">
        <span
          className="categories__category--title"
          // style={{ marginBottom: "25px", marginLeft: "20px" }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setActive((a) => !a);
          }}
        >
          {category.category_name}
          <img src="./images/marketplace/categories/arrow.svg" alt="arrow" />
        </span>

        <div
          className={`categories__category--list ${active && "list-active"}`}
        >
          <a href="#" className="categories__category--item">
            <div>Beauty & Personal Care</div>
          </a>
          <a href="#" className="categories__category--item">
            <div>Baby</div>
          </a>
          <a href="#" className="categories__category--item">
            <div>Electronics</div>
          </a>
          <a href="#" className="categories__category--item">
            <div>Fashion</div>
          </a>
          <a href="#" className="categories__category--item">
            <div>Health & Household</div>
          </a>
          <a href="#" className="categories__category--item">
            <div>Home & Kitchen</div>
          </a>
          <a href="#" className="categories__category--item">
            <div>Luggage</div>
          </a>
          <a href="#" className="categories__category--item">
            <div>Sports</div>
          </a>
        </div>
      </div>
    </a>
  );
}

export default Category;

{
  /* <div
      classNameName="categories__category"
      // onMouseLeave={() => setActive(false)}
      style={{ cursor: "pointer" }}
    >
      <div
        classNameName="categories__category--image"
        style={{ marginTop: "5px" }}
      >
        <img
          src={`./images/marketplace/categories/${category.category_path}`}
          alt="beauty"
        />
      </div>
      <div classNameName="categories__category--body">
        <span
          classNameName="categories__category--title"
          // style={{ marginBottom: "25px", marginLeft: "20px" }}
          onClick={() => setActive((a) => !a)}
        >
          {category.category_name}
          <img src="./images/marketplace/categories/arrow.svg" alt="arrow" />
        </span>
        <div
          classNameName={`categories__category--list ${
            active && "list-active"
          }`}
        >
          <div classNameName="categories__category--item">
            <a href="#">Beauty & Personal Care</a>
          </div>
          <div classNameName="categories__category--item">
            <a href="#">Baby</a>
          </div>
          <div classNameName="categories__category--item">
            <a href="#">Electronics</a>
          </div>
          <div classNameName="categories__category--item">
            <a href="#">Fashion</a>
          </div>
          <div classNameName="categories__category--item">
            <a href="#">Health & Household</a>
          </div>
          <div classNameName="categories__category--item">
            <a href="#">Home & Kitchen</a>
          </div>
          <div classNameName="categories__category--item">
            <a href="#">Luggage</a>
          </div>
          <div classNameName="categories__category--item">
            <a href="#">Sports</a>
          </div>
        </div>
      </div>
    </div> */
}
