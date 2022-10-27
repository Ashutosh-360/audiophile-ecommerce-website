import React from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import headphone from "../../assets/shared/desktop/image-headphones.png";
import speaker from "../../assets/shared/desktop/image-speakers.png";
import earphone from "../../assets/shared/desktop/image-earphones.png";
import Heading from "../../components/Heading/Heading";
import DisplayLeft from "../../components/DisplayLeft/DisplayLeft";
import headphone99 from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import headphone59 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import headphone99mark1 from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import DisplayRight from "../../components/DisplayRight/DisplayRight";

const Headphones = () => {
  return (
    <>
      <Heading heading="HEADPHONES" />
      <DisplayLeft to="/xx99-mark-two-headphones"
        img={headphone99}
        heading="XX99 MARK II HEADPHONES"
        text="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />
      <DisplayRight to="/xx99-mark-one-headphone"
        img={headphone99mark1}
        heading="XX99 MARK I HEADPHONES"
        text="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      />
      <DisplayLeft to="/xx59-headphone"
        img={headphone59}
        heading="XX59 HEADPHONES"
        text="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
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

export default Headphones;
