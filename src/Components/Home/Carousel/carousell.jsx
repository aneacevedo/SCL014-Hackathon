import React from "react";
import FirstSlide from "./firstSlide";
import SecondSlide from "./secondSlide";
import ThirdSlide from "./thirdSlide";
import FourthSlide from "./fourthSlide";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../Styles/carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <FirstSlide onDragStart={handleDragStart} />,
  <SecondSlide onDragStart={handleDragStart} />,
  <ThirdSlide onDragStart={handleDragStart} />,
  <FourthSlide onDragStart={handleDragStart} />,
];

const Carousel = () => {
  return (
    <div className='containerCarouselFather'>
      <AliceCarousel
        mouseTracking
        items={items}
        infinite={true}
        disableDotsControls={true}
        disableButtonsControls={true}
        autoPlay={true}
        autoPlayInterval={5000}
      />
    </div>
  );
};

export default Carousel;
