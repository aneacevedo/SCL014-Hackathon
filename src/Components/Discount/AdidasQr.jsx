import React, { Fragment } from 'react';
import HeaderQr from './HeaderQr';
import adidasqr from '../../Img/Adidasqr.svg';
import './Styles/Discounts.css';

export const AdidasQr = () => {
    return(
        <Fragment>
        <HeaderQr />
        <div className='dContainer'>
        <img src={adidasqr} className='adidPic' alt='adidas desc'></img>
        </div>
        </Fragment>
        );
};
export default AdidasQr;