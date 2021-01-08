import React, { Fragment } from 'react';
import HeaderQr from './HeaderQr';
import homy from '../../Img/Homyqr.svg';
import './Styles/Discounts.css';

export const QrHomy = () => {
    return(
        <Fragment>
        <HeaderQr />
        <div className='dContainer'>
        <img src={homy} className='homyPic' alt='Homy desc'></img>
        </div>
        </Fragment>
        );
};
export default QrHomy;