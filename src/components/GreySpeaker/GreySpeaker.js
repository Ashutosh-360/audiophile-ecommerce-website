import React from "react";
import Button from "../Button/Button";
import "./GreySpeaker.css";
import speaker from "../../assets/shared/desktop/image-speakers.png";
import { Link } from "react-router-dom";

const GreySpeaker = () => {
  return (
    <div className="grey-speaker-container">
      <div className="grey-speaker-content">
        <h1>ZX7 SPEAKER</h1>
        <Link to="zx7-speaker"><Button background={"transparent"} color={"black"} border={"1.5px solid black"} /></Link>
      </div>
      <div className="grey-speaker-img">
        <img src={speaker} alt="" />
      </div>
    </div>
  );
};

export default GreySpeaker;
