import React from "react";

function Products(props) {
  return (
    <section className="product__block">
      <div className="product">
        <div className="product__card">
          <div className="product__card--image">
            <img
              src="./images/marketplace/bestseller/product.png"
              alt="product"
            />
          </div>
          <div className="product__card--desc">
            <span className="product__desc--text">
              <strong>Tony Moly</strong> / Cleancing foam Tony Moly Clean Dew
              Foam
            </span>
          </div>
          <div className="product__card--price">
            <span>$28.5</span>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card--image">
            <img
              src="./images/marketplace/bestseller/product.png"
              alt="product"
            />
          </div>
          <div className="product__card--desc">
            <span className="product__desc--text">
              <strong>Tony Moly</strong> / Cleancing foam Tony Moly Clean Dew
              Foam
            </span>
          </div>
          <div className="product__card--price">
            <span>$28.5</span>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card--image">
            <img
              src="./images/marketplace/bestseller/product.png"
              alt="product"
            />
          </div>
          <div className="product__card--desc">
            <span className="product__desc--text">
              <strong>Tony Moly</strong> / Cleancing foam Tony Moly Clean Dew
              Foam
            </span>
          </div>
          <div className="product__card--price">
            <span>$28.5</span>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card--image">
            <img
              src="./images/marketplace/bestseller/product.png"
              alt="product"
            />
          </div>
          <div className="product__card--desc">
            <span className="product__desc--text">
              <strong>Tony Moly</strong> / Cleancing foam Tony Moly Clean Dew
              Foam
            </span>
          </div>
          <div className="product__card--price">
            <span>$28.5</span>
          </div>
        </div>
        <div className="product__card">
          <div className="product__card--image">
            <img
              src="./images/marketplace/bestseller/product.png"
              alt="product"
            />
          </div>
          <div className="product__card--desc">
            <span className="product__desc--text">
              <strong>Tony Moly</strong> / Cleancing foam Tony Moly Clean Dew
              Foam
            </span>
          </div>
          <div className="product__card--price">
            <span>$28.5</span>
          </div>
        </div>
      </div>

      <div className="pagination">
        <div className="pagination__list">
          <div className="pagination__list--item pagination-active">1</div>
          <div className="pagination__list--item">2</div>
          <div className="pagination__list--item">3</div>
          <div className="pagination__list--item">4</div>
          <div className="pagination__list--dots">...</div>
          <div className="pagination__list--item">50</div>
          <div className="pagination__list--item">Next</div>
        </div>
      </div>
    </section>
  );
}

export default Products;
