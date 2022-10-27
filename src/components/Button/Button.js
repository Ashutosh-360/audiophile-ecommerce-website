import React from 'react';
import "./Button.css";

const Button = (props) => {
  const {background,color,border,btnText}=props;
  return (
    <button style={{background:background,color:color,border:border}} className='btn'>{btnText?btnText:"SEE PRODUCT"}</button>
  )
}

export default Button;