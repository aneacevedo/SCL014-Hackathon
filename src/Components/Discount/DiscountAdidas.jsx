import React, { Fragment } from 'react';
import HeaderWelcomeDiscount from './HeaderWelcomeDiscount';
import adidas from '../../Img/Adidas2.svg'
import { Link } from 'react-router-dom';
import './Styles/Discounts.css';

export const DiscountAdidas = () => {
    return(
        <Fragment>
        <HeaderWelcomeDiscount />
        <div className='dContainer'>
        <img src={adidas} className='adidPic' alt='adidas desc'></img>
        <Link>
        <button className='btndsc'>Ver Cupón</button>
        </Link>
        </div>
        </Fragment>
        );
};
export default DiscountAdidas;