import React, { useState } from "react";
import ReactDOM from "react-dom";
import st from "./Categoryes.module.css";

function Categoryes(props) {
  const [hCatatalog, setHCatalog] = useState(false);
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className="header__categories--menu"
          style={{ position: "relative" }}
          onClick={() => setHCatalog((a) => !a)}
          // onMouseOver={() => setHCatalog(true)}
          onMouseLeave={() => setHCatalog(false)}
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
          <span
            className="header__categories--name"
            style={{ userSelect: "none" }}
          >
            Categories
          </span>
          <ul
            className={`${st.head_menu} ${hCatatalog && st.head_menu_active}`}
          >
            <li>dasdasda ccdad</li>
            <li>dasdasda</li>
            <li>dasdasda ccdad</li>
            <li>dasdasda</li>
            <li>dasdasda</li>
            <li>dasdasda ccdad</li>
            <li>dasdasda</li>
            <li>dasdasda</li>
            <li>dasdasda</li>
          </ul>
        </div>,
        document.getElementById("header__categories")
      )}
      <section className="categories">
        {/* <!--            categories title--> */}
        <div className="categories__title">
          <h2 className="categories__title--text">Explore Categories</h2>
        </div>
        {/* <!--            categories title end--> */}
        {/* <!--            categories block--> */}
        <div className="categories__block">
          {/* <!--           category--> */}
          <div className="categories__category">
            <div className="categories__category--image">
              <img
                src="images/marketplace/categories/beauty.png"
                alt="beauty"
              />
            </div>
            <div className="categories__category--body">
              <span className="categories__category--title">
                Beauty{" "}
                <img
                  src="./images/marketplace/categories/arrow.svg"
                  alt="arrow"
                />
              </span>
              <div className="categories__category--list category__left">
                <div className="categories__category--item">
                  Beauty & Personal Care
                </div>
                <div className="categories__category--item">Baby</div>
                <div className="categories__category--item">Electronics</div>
                <div className="categories__category--item">Fashion</div>
                <div className="categories__category--item">
                  Health & Household
                </div>
                <div className="categories__category--item">Home & Kitchen</div>
                <div className="categories__category--item">Luggage</div>
                <div className="categories__category--item">Sports</div>
              </div>
            </div>
          </div>
          {/* <!--           category end--> */}

          {/* <!--           category--> */}
          <div className="categories__category">
            <div className="categories__category--image">
              <img src="images/marketplace/categories/baby.png" alt="baby" />
            </div>
            <div className="categories__category--body">
              <span className="categories__category--title">
                Baby{" "}
                <img
                  src="./images/marketplace/categories/arrow.svg"
                  alt="arrow"
                />
              </span>
              <div className="categories__category--list">
                <div className="categories__category--item">
                  Beauty & Personal Care
                </div>
                <div className="categories__category--item">Baby</div>
                <div className="categories__category--item">Electronics</div>
                <div className="categories__category--item">Fashion</div>
                <div className="categories__category--item">
                  Health & Household
                </div>
                <div className="categories__category--item">Home & Kitchen</div>
                <div className="categories__category--item">Luggage</div>
                <div className="categories__category--item">Sports</div>
              </div>
            </div>
          </div>
          {/* <!--           category end-->

              <!--           category--> */}
          <div className="categories__category">
            <div className="categories__category--image">
              <img
                src="images/marketplace/categories/fashion.png"
                alt="fashion"
              />
            </div>
            <div className="categories__category--body">
              <span className="categories__category--title">
                Fashion{" "}
                <img
                  src="./images/marketplace/categories/arrow.svg"
                  alt="arrow"
                />
              </span>
              <div className="categories__category--list">
                <div className="categories__category--item">
                  Beauty & Personal Care
                </div>
                <div className="categories__category--item">Baby</div>
                <div className="categories__category--item">Electronics</div>
                <div className="categories__category--item">Fashion</div>
                <div className="categories__category--item">
                  Health & Household
                </div>
                <div className="categories__category--item">Home & Kitchen</div>
                <div className="categories__category--item">Luggage</div>
                <div className="categories__category--item">Sports</div>
              </div>
            </div>
          </div>
          {/* <!--           category end-->

              <!--           category--> */}
          <div className="categories__category">
            <div className="categories__category--image">
              <img
                src="images/marketplace/categories/home-and-kitchen.png"
                alt="home and kitchen"
              />
            </div>
            <div className="categories__category--body">
              <span className="categories__category--title">
                Home & kitchen{" "}
                <img
                  // style="transform: translate(5px, -8px);"
                  src="./images/marketplace/categories/arrow.svg"
                  alt="arrow"
                />
              </span>
              <div className="categories__category--list">
                <div className="categories__category--item">
                  Beauty & Personal Care
                </div>
                <div className="categories__category--item">Baby</div>
                <div className="categories__category--item">Electronics</div>
                <div className="categories__category--item">Fashion</div>
                <div className="categories__category--item">
                  Health & Household
                </div>
                <div className="categories__category--item">Home & Kitchen</div>
                <div className="categories__category--item">Luggage</div>
                <div className="categories__category--item">Sports</div>
              </div>
            </div>
          </div>
          {/* <!--           category end-->

              <!--           category--> */}
          <div className="categories__category">
            <div className="categories__category--image">
              <img
                src="images/marketplace/categories/health-and-haushold.png"
                alt="health & household"
              />
            </div>
            <div className="categories__category--body">
              <span className="categories__category--title">
                Health & household{" "}
                <img
                  // style="transform: translate(5px, -8px);"
                  src="./images/marketplace/categories/arrow.svg"
                  alt="arrow"
                />
              </span>
              <div className="categories__category--list">
                <div className="categories__category--item">
                  Beauty & Personal Care
                </div>
                <div className="categories__category--item">Baby</div>
                <div className="categories__category--item">Electronics</div>
                <div className="categories__category--item">Fashion</div>
                <div className="categories__category--item">
                  Health & Household
                </div>
                <div className="categories__category--item">Home & Kitchen</div>
                <div className="categories__category--item">Luggage</div>
                <div className="categories__category--item">Sports</div>
              </div>
            </div>
          </div>
          {/* <!--           category end-->

              <!--           category--> */}
          <div className="categories__category">
            <div className="categories__category--image">
              <img
                src="images/marketplace/categories/electronics.png"
                alt="electronics"
              />
            </div>
            <div className="categories__category--body">
              <span className="categories__category--title">
                Electronics{" "}
                <img
                  src="./images/marketplace/categories/arrow.svg"
                  alt="arrow"
                />
              </span>
              <div className="categories__category--list">
                <div className="categories__category--item">
                  Beauty & Personal Care
                </div>
                <div className="categories__category--item">Baby</div>
                <div className="categories__category--item">Electronics</div>
                <div className="categories__category--item">Fashion</div>
                <div className="categories__category--item">
                  Health & Household
                </div>
                <div className="categories__category--item">Home & Kitchen</div>
                <div className="categories__category--item">Luggage</div>
                <div className="categories__category--item">Sports</div>
              </div>
            </div>
          </div>
          {/* <!--           category end-->

              <!--           category--> */}
          <div className="categories__category">
            <div className="categories__category--image">
              <img
                src="images/marketplace/categories/luggage.png"
                alt="luggage"
              />
            </div>
            <div className="categories__category--body">
              <span className="categories__category--title">
                Luggage{" "}
                <img
                  src="./images/marketplace/categories/arrow.svg"
                  alt="arrow"
                />
              </span>
              <div className="categories__category--list">
                <div className="categories__category--item">
                  Beauty & Personal Care
                </div>
                <div className="categories__category--item">Baby</div>
                <div className="categories__category--item">Electronics</div>
                <div className="categories__category--item">Fashion</div>
                <div className="categories__category--item">
                  Health & Household
                </div>
                <div className="categories__category--item">Home & Kitchen</div>
                <div className="categories__category--item">Luggage</div>
                <div className="categories__category--item">Sports</div>
              </div>
            </div>
          </div>
          {/* <!--           category end-->

              <!--           category--> */}
          <div className="categories__category">
            <div className="categories__category--image">
              <img
                src="images/marketplace/categories/sports.png"
                alt="sports"
              />
            </div>
            <div className="categories__category--body">
              <span className="categories__category--title">
                Sports{" "}
                <img
                  src="./images/marketplace/categories/arrow.svg"
                  alt="arrow"
                />
              </span>
              <div className="categories__category--list category__right">
                <div className="categories__category--item">
                  Beauty & Personal Care
                </div>
                <div className="categories__category--item">Baby</div>
                <div className="categories__category--item">Electronics</div>
                <div className="categories__category--item">Fashion</div>
                <div className="categories__category--item">
                  Health & Household
                </div>
                <div className="categories__category--item">Home & Kitchen</div>
                <div className="categories__category--item">Luggage</div>
                <div className="categories__category--item">Sports</div>
              </div>
            </div>
          </div>
          {/* <!--           category end  --> */}
        </div>
        {/* <!--            categories block end  --> */}
      </section>
    </>
  );
}

export default Categoryes;
