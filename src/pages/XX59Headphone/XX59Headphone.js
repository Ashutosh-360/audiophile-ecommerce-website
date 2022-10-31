import React from "react";
import headphone59 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import DisplayLeft from "../../components/DisplayLeft/DisplayLeft";
import Features from "../../components/Features/Features";
import "./XX59Headphone.css";

function XX59Headphone() {
  return (
    <>
      <DisplayLeft
        btnText="Add to Cart"
        price="899$"
        img={headphone59}
        heading="XX59 HEADPHONES"
        text="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      />
      <div className="features-inthebox">
        <div className="features">
          <Features
            text1="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
            text2="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
          />
        </div>
        <div className="in-the-box">
          <h1>IN-THE-BOX</h1>
          <p>
            <span>1x</span>Headphone unit
          </p>
          <p>
            <span>2x</span>Replacement earcups
          </p>
          <p>
            <span>1x</span>
            User manual
          </p>
          <p>
            <span>1x</span>
            3.5mm 5m audio cable
          </p>
          <p>
            <span>1x</span>Travel bag
          </p>
        </div>
      </div>
    </>
  );
}

export default XX59Headphone;
