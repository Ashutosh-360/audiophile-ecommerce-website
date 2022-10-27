import React from 'react'
import DisplayLeft from '../../components/DisplayLeft/DisplayLeft';
import Features from '../../components/Features/Features';
import earphone from "../../assets/shared/desktop/image-earphones.png";

function YX1Earphone() {
  return (
    <>
      <DisplayLeft
        btnText="Add to Cart"
        price="599$"
        img={earphone}
        heading="YX1 WIRELESS EARPHONES"
        text="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />
      <div className="features-inthebox">
        <div className="features">
          <Features
            text1="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
            text2="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
          />
        </div>
        <div className="in-the-box">
          <h1>IN-THE-BOX</h1>
          <p>
            <span>2x</span>
            Earphone unit
          </p>
          <p>
            <span>6x</span>Multi-size earplugs
          </p>
          <p>
            <span>1x</span>
            User manual
          </p>
          <p>
            <span>1x</span>
            USB-C charging cable
          </p>
          <p>
            <span>1x</span>Travel pouch
          </p>
        </div>
      </div>
    </>
  )
}

export default YX1Earphone;