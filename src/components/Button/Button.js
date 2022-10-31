import React from 'react';
import { useDispatch } from 'react-redux';
import "./Button.css";
import {add} from "../../store/cartSlice";


const Button = (props) => {
  const {background,color,border,btnText}=props;
  const dispatch=useDispatch();
  return (
    <button onClick={btnText==="Add to Cart"?()=>dispatch(add()):()=>{}} style={{background:background,color:color,border:border}} className='btn'>{btnText?btnText:"SEE PRODUCT"}</button>
  )
}

export default Button;

//