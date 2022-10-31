import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import "./Header.css";
import { NavLink,Link } from "react-router-dom";
import cart from "../../assets/shared/desktop/icon-cart.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to=""><img src={logo} alt="logo" /></Link>
        <Link to="cart" ><img id="cart" src={cart} alt="" /></Link>
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
       <Link to="cart"> <img src={cart} alt="" /></Link>
      </div>
    </div>
  );
};

export default Header;
