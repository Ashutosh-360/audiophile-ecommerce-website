import React from "react";
import DisplayLeft from "../../components/DisplayLeft/DisplayLeft";
import Features from "../../components/Features/Features";
import speaker from "../../assets/shared/desktop/image-speakers.png";

function ZX7Speaker() {
  return (
    <>
      <DisplayLeft
        btnText="Add to Cart"
        price="3500$"
        img={speaker}
        heading="ZX7 SPEAKER"
        text="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      />
      <div className="features-inthebox">
        <div className="features">
          <Features
            text1="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
            text2="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
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
            3.5mm 7.5m audio cable
          </p>
          <p>
            <span>1x</span>7.5m Optical cable
          </p>
        </div>
      </div>
    </>
  );
}

export default ZX7Speaker;
