import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";

function Header(props) {
  const data = useSelector((a) => a.auth);
  console.log(data);
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__inner--block-1">
              <div className="header__logo">
                <a href="#">LOGOO </a>
              </div>

              <div className="header__categories">
                <div className="header__categories--menu">
                  <div className="hamburger hamburger--squeeze">
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                  <span
                    className="header__categories--name"
                    id="for_categories"
                  >
                    Categories
                  </span>
                </div>
              </div>
              <div className="header__searchbar">
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="header__inner--block-2">
              <div className="header__notif">
                <img src="./images/header/bell.svg" alt="Bell" />
                <span className="header__notif--name">Notification</span>
              </div>
              <div className="header__basket">
                <img src="./images/header/basket.svg" alt="Basket" />
                <span className="header__basket--name">Basket</span>
              </div>
              <div className="header__marketplace">
                <Button red>Go to the marketplace</Button>
              </div>

              <div className="header__login">
                <Button>Login</Button>
              </div>
              <div className="header__profile">
                <img src="./images/header/man.svg" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
