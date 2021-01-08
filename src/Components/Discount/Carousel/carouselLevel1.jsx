import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Styles/carouselLevel1.css";
import homy from "../../../Img/homy.svg";
import adidas from "../../../Img/adidas.svg";
import mcdonal from "../../../Img/mcdonal.svg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src={mcdonal}
    alt="photo"
    className="photoCarouselLvl1"
    onDragStart={handleDragStart}
  />,
  <img
    src={adidas}
    alt="photo"
    className="photoCarouselLvl1"
    onDragStart={handleDragStart}
  />,
  <img
    src={homy}
    alt="photo"
    className="photoCarouselLvl1"
    onDragStart={handleDragStart}
  />,
];

const CarouselLevel1 = () => {
  return (
    <div className="containerCarouselDiscLevel1">
      <AliceCarousel
      className='aliceCarDiscLvl1'
      paddingLeft={30}
      swipeDelta={0}
      swipeExtraPadding={0}
        mouseTracking
        items={items}
        infinite={true}
        disableButtonsControls={true}
      />
    </div>
  );
};

export default CarouselLevel1;
