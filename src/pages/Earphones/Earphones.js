import React from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import headphone from "../../assets/shared/desktop/image-headphones.png";
import speaker from "../../assets/shared/desktop/image-speakers.png";
import earphone from "../../assets/shared/desktop/image-earphones.png";
import Heading from "../../components/Heading/Heading";
import DisplayLeft from "../../components/DisplayLeft/DisplayLeft";
import earphonesxy1 from "../../assets/product-yx1-earphones/desktop/image-product.jpg";


const Earphones = () => {
  return (
    <>
      <Heading heading="EARPHONES" />
      <DisplayLeft to="/yx1-earphone"
        img={earphonesxy1}
        heading="YX1 WIRELESS EARPHONES"
        text="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />
      

      <div className="middle-content">
        <div className="product-display-container">
          <ProductDisplay src={headphone} title="HEADPHONES" />
          <ProductDisplay src={speaker} title="SPEAKERS" />
          <ProductDisplay src={earphone} title="EARPHONES" />
        </div>
      </div>
    </>
  );
};

export default Earphones;
