import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={logo} alt="logo" />
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <span>Copyright 2021. All Rights Reserved</span>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <NavLink className="footer-link" to="">HOME</NavLink>
          <NavLink className="footer-link" to="">HEADPHONES</NavLink>
          <NavLink className="footer-link" to="">SPEAKERS</NavLink>
          <NavLink className="footer-link" to="">EARPHONES</NavLink>
        </div>
        <div className="media-links">
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>

        </div>
      </div>
    </div>
  );
};

export default Footer;
