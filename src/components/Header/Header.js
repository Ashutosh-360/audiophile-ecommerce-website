import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";
import cart from "../../assets/shared/desktop/icon-cart.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <NavLink className="header-link" to="">
          HOME
        </NavLink>
        <NavLink className="header-link" to="headphones">
          HEADPHONES
        </NavLink>
        <NavLink className="header-link" to="speakers">
          SPEAKERS
        </NavLink>
        <NavLink className="header-link" to="earphones">
          EARPHONES
        </NavLink>
      </div>
      <div className="cart-img">
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default Header;
