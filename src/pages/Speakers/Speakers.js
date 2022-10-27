import React from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import headphone from "../../assets/shared/desktop/image-headphones.png";
import speaker from "../../assets/shared/desktop/image-speakers.png";
import earphone from "../../assets/shared/desktop/image-earphones.png";
import Heading from "../../components/Heading/Heading";
import DisplayLeft from "../../components/DisplayLeft/DisplayLeft";
import speakerzx9 from "../../assets/product-zx9-speaker/desktop/image-product.jpg";
import speakerzx7 from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import DisplayRight from "../../components/DisplayRight/DisplayRight";

const Speakers = () => {
  return (
    <>
      <Heading heading="SPEAKERS" />
      <DisplayLeft to="/zx9-speaker"
        img={speakerzx9}
        heading="ZX9
SPEAKER"
        text="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      />
      <DisplayRight to="/zx7-speaker"
        img={speakerzx7}
        heading="ZX7
SPEAKER"
        text="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
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

export default Speakers;
