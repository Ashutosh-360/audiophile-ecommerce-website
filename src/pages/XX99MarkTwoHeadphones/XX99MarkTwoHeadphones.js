import React from 'react';
import DisplayLeft from '../../components/DisplayLeft/DisplayLeft';
import "./XX99MarkTwoHeadphones.css";
import headphone99 from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import Features from '../../components/Features/Features';

function XX99MarkTwoHeadphones() {
  return (
    <>
    <DisplayLeft btnText="Add to Cart" price="2999$"
        img={headphone99}
        heading="XX99 MARK II HEADPHONES"
        text="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />
      <div className='features-inthebox'>

      <div className="features">

     
      <Features text1="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat." text2="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."/>
      </div>
      <div className='in-the-box'>
        <h1>IN-THE-BOX</h1>
        <p><span>1x</span>Headphone unit</p>
        <p><span>2x</span>Replacement earcups</p>
        <p><span>1x</span>
User manual</p>
        <p><span>1x</span>
3.5mm 5m audio cable</p>
       <p><span>1x</span>Travel bag</p>
      </div>
      </div>
      </>
  )
}

export default XX99MarkTwoHeadphones;