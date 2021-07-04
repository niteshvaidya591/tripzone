import Header from "../Blocks/Header/Header";
import HeroBlock from "../Blocks/HeroBlock/HeroBlock";
import Navigation from "../Blocks/Navigation/Navigation";
import SwipeToSlide from "../Components/Slider/SwipeToSlide";
import Quote from "../Blocks/Quote/Quote";
import Weather from "../Blocks/Weather/Weather";
import Promo from "../Blocks/Promo/Promo";
import Footer from "../Blocks/Footer/Footer";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <HeroBlock />
      <Weather />
      <SwipeToSlide />
      <Promo/>
      <Quote />
      <Footer/>
    </div>
  );
}

export default Home;
