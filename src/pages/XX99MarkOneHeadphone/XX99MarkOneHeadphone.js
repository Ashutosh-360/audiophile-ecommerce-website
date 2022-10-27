import React from 'react';
import DisplayLeft from '../../components/DisplayLeft/DisplayLeft';
import Features from '../../components/Features/Features';
import headphone99mark1 from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";

function XX99MarkOneHeadphone() {
  return (
    <>
    <DisplayLeft btnText="Add to Cart" price="1750$"
        img={headphone99mark1}
        heading="XX99 MARK I HEADPHONES"
        text="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      />
      <div className='features-inthebox'>

      <div className="features">

     
      <Features text1="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz." text2="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector."/>
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

export default XX99MarkOneHeadphone;