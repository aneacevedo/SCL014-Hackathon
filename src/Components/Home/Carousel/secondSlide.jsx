import React from "react";
import '../Styles/carousel.css';
import sabias from '../../../Img/sabias.svg';

const SecondSlide = () => {
  return (
    <div className='containerCarousel2'>
      <div className='containerImgQuestion'>
        <img className='imgCarousel' src={sabias} alt="question" />
      </div>
      <div className='containerTextCarouselSecondSlide'>
        <p className='titleCarousel2'>¿Sabías que?</p>
        <p>
          Los Fondos Mutuos son una forma de inversión, donde muchas personas
          aportan a un fondo común, y las ganancias son repartidas entre ellos.
        </p>
      </div>
    </div>
  );
};

export default SecondSlide;
