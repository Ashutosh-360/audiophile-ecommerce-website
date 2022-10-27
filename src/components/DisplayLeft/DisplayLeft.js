import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./DisplayLeft.css";


const DisplayLeft = (props) => {
  const {heading,text,img,btnText,price,to}=props;
  return (
    <div className="display-left-container">
      <div className="display-left-left">
        <img src={img} alt="" />
      </div>
      <div className="display-left-right">
        <h3>NEW PRODUCT</h3>
        <h1>{heading}</h1>
        <p>{text}</p>
        <h4>{price?price:""}</h4>
        <Link to={to?to:""}><Button btnText={btnText}/></Link>
      </div>
    </div>
  );
};

export default DisplayLeft;
