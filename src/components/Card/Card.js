import React from "react";
import api from "../../api";
function Card({ product }) {
  return (
    <div className="bestsellers__card">
      <div className="bestsellers__card--image">
        <img
          src={`${api.baseUrl}/files/product/${product.picture.split(",")[0]}`}
          //   src="./images/marketplace/bestseller/product.png"
          alt="product"
        />
      </div>
      <div className="bestsellers__card--desc">
        <span className="bestsellers__desc--text">
          <strong>{product.brand}</strong> / {product.full_name.split("/")[1]}
        </span>
      </div>
      <div className="bestsellers__card--price">
        <span>${product.price}</span>
      </div>
    </div>
  );
}

export default Card;
