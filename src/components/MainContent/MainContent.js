import React from "react";
import "./MainContent.css";
// import mainContentImg from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="maincontent-container">
      <div className="maincontent-left">
        <h3>NEW PROUCT</h3>
        <h1>XX99 MARK II HEADPHONES</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to=
        "xx99-mark-two-headphones"><Button/></Link>
        
      </div>
    </div>
  );
};

export default MainContent;
