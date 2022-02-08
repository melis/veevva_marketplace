import React from "react";

function Category({ category }) {
  return (
    <div className="categories__category">
      <div className="categories__category--image">
        <img src="images/marketplace/categories/beauty.png" alt="beauty" />
      </div>
      <div className="categories__category--body">
        <span className="categories__category--title">
          {category.category_name}
          <img src="./images/marketplace/categories/arrow.svg" alt="arrow" />
        </span>
        <div className="categories__category--list category__left">
          <div className="categories__category--item">
            Beauty & Personal Care
          </div>
          <div className="categories__category--item">Baby</div>
          <div className="categories__category--item">Electronics</div>
          <div className="categories__category--item">Fashion</div>
          <div className="categories__category--item">Health & Household</div>
          <div className="categories__category--item">Home & Kitchen</div>
          <div className="categories__category--item">Luggage</div>
          <div className="categories__category--item">Sports</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
