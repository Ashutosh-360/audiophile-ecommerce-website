import React from "react";
import "./ZX9Speaker.css";
import speaker from "../../assets/shared/desktop/image-speakers.png";
import DisplayLeft from "../../components/DisplayLeft/DisplayLeft";
import Features from "../../components/Features/Features";

function ZX9Speaker() {
  return (
    <>
      <DisplayLeft
        btnText="Add to Cart"
        price="4500$"
        img={speaker}
        heading="ZX9 SPEAKER"
        text="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      />
      <div className="features-inthebox">
        <div className="features">
          <Features
            text1="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
            text2="Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
          />
        </div>
        <div className="in-the-box">
          <h1>IN-THE-BOX</h1>
          <p>
            <span>2x</span>
Speaker unit
          </p>
          <p>
            <span>2x</span>Speaker cloth panel
          </p>
          <p>
            <span>1x</span>
            User manual
          </p>
          <p>
            <span>1x</span>
            3.5mm 10m audio cable
          </p>
          <p>
            <span>1x</span>Optical cable
          </p>
        </div>
      </div>
    </>
  );
}

export default ZX9Speaker;
