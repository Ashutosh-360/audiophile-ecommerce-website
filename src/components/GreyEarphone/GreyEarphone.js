import React from "react";
import { Link } from "react-router-dom";
import earphone from "../../assets/home/desktop/image-earphones-yx1.jpg";
import Button from "../Button/Button";
import "./GreyEarphone.css";

const GreyEarphone = () => {
  return (
    <div className="grey-earphone-container">
      <img src={earphone} alt="" />

      <div className="grey-earphone-content">
        <h1>YX1 EARPHONES</h1>
      <Link to="yx1-earphone">  <Button
          background={"transparent"}
          color={"black"}
          border={"1.5px solid black"}
        /></Link>
      </div>
    </div>
  );
};

export default GreyEarphone;
