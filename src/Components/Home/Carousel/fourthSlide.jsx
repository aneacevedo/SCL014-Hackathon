import React from "react";
import '../Styles/carousel.css';
import alcancia from '../../../Img/alcancia.svg';
const FourthSlide = () => {
  return (
    <div className='containerCarousel2'>
      <div className='containerPigCarousel' >
        <img className='imgCarousel' src={alcancia} alt='alcancia'/>
      </div>
      <div className='containerTextCarousel'>
        <p className='titleCarousel2'>Próximamente </p>
        <p>
          Estrenaremos la función de ahorro, que te permitirá crear metas, para
          que puedas cumplir tus sueños, junto a nosotros.
        </p>
      </div>
    </div>
  );
};

export default FourthSlide;
