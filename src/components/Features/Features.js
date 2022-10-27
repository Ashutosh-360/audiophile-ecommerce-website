import React from "react";
import "./Features.css";

const Features = (props) => {
    const {text1,text2}=props;
  return (
    <div className="features-container">
    <h1>FEATURES</h1>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

export default Features;
