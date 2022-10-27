import React from 'react';
import Button from '../Button/Button';
import "./OrangeSpeaker.css";
import speaker from "../../assets/shared/desktop/image-speakers.png";
import { Link } from 'react-router-dom';


const OrangeSpeaker = () => {
  return (
    <div className='orange-speaker-container'>
    <div className='orange-speaker-img'>
      <img src={speaker} alt="" />
    </div>
    <div className='orange-speaker-content'>
    <h1>ZX9</h1>
    <h1>SPEAKER</h1>
    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
    <Link to="zx9-speaker"><Button background={"black"}/></Link>

    </div>
    </div>
  )
}

export default OrangeSpeaker;