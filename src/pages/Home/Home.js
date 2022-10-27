import React from "react";
// import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import headphone from "../../assets/shared/desktop/image-headphones.png";
import speaker from "../../assets/shared/desktop/image-speakers.png";
import earphone from "../../assets/shared/desktop/image-earphones.png";
import OrangeSpeaker from "../../components/OrangeSpeaker/OrangeSpeaker";
import GreySpeaker from "../../components/GreySpeaker/GreySpeaker";
import GreyEarphone from "../../components/GreyEarphone/GreyEarphone";
// import BottomGear from "../../components/BottomGear/BottomGear";
// import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <MainContent />
      <div className="middle-content">
        <div className="product-display-container">
          <ProductDisplay src={headphone} title="HEADPHONES" to="headphones"/>
          <ProductDisplay src={speaker} title="SPEAKERS" to="speakers"/>
          <ProductDisplay src={earphone} title="EARPHONES" to="earphones"/>
        </div>

        <OrangeSpeaker />

        <GreySpeaker />

        <GreyEarphone />

      </div>
      
    </>
  );
};

export default Home;
