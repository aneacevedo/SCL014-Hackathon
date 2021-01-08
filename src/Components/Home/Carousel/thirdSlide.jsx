import React from "react";
import '../Styles/carousel.css';
import homy from '../../../Img/homy.svg';

const ThirdSlide = () => {
  return (
    <div className='containerCarousel1'>
      <div className='containerTextCarouselSecondSlide'>
        <p className='secondTitleCarousel'>Revisa tus descuentos del mes</p>
      </div>
      <div className='containerHomyCarousel'>
        <img className='imgCarousel1' src={homy} alt="homy" />
      </div>
      <div>
        <button className='btnMoreCarousel'>Ver más</button>
      </div>
    </div>
  );
};

export default ThirdSlide;
