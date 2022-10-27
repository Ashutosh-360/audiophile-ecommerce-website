import React from "react";
import "./Heading.css";
const Heading = (props) => {
  const { heading } = props;
  return (
    <div className="heading-container">
      <h1>{heading}</h1>
    </div>
  );
};

export default Heading;
