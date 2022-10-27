import React from "react";
import "./DisplayRight.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function DisplayRight(props) {
    const {heading,text,img,to}=props;
  return (
    <div className="display-left-container">
      <div className="display-left-right">
        <h3>NEW PRODUCT</h3>
        <h1>{heading}</h1>
        <p>{text}</p>
        <Link to={to?to:""}><Button /></Link>
      </div>
      <div className="display-left-left">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default DisplayRight;
