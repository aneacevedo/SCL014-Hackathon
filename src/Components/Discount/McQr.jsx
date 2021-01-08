import React, { Fragment } from 'react';
import HeaderQr from './HeaderQr';
import mc from '../../Img/mcdonaldsqr.svg';
import './Styles/Discounts.css';

export const McQr = () => {
    return(
        <Fragment>
        <HeaderQr />
        <div className='dContainer'>
        <img src={mc} className='mcPic' alt='McDonalds desc'></img>
        </div>
        </Fragment>
        );
};
export default McQr;