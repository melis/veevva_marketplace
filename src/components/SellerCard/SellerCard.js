import React from "react";

function SellerCard({ seller }) {
  return (
    <div className="topsellers__cards">
      <div className="topsellers__card">
        <div className="topsellers__card--header">
          <div className="topsellers__card--social">
            <img
              src="./images/marketplace/topseller/tik-tok.svg"
              alt="tik-tok"
            />
            <a href="#">{seller.name}</a>
          </div>
        </div>
        <div className="topsellers__card--body">
          <div className="topsellers__card--btn">
            <a href="#" className="btn">
              See more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerCard;
