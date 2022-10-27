import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
    const {src,title,to}=props;
  return (
    <div className='product-display-wrapper'>
        <img src={src} alt="" />
        <h3>{title}</h3>
        <NavLink className="link" to={to}>SHOP <span>></span></NavLink>
    </div>
  )
}

export default ProductDisplay;