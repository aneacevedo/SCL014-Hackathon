import React, { Fragment } from 'react';
import HeaderWelcomeDiscount from './HeaderWelcomeDiscount';
import mc from '../../Img/mcdonalds.svg'
import { Link } from 'react-router-dom';
import './Styles/Discounts.css';

export const DiscountMc = () => {
    return(
        <Fragment>
        <HeaderWelcomeDiscount />
        <div className='dContainer'>
        <img src={mc} className='mcPic' alt='McDonalds desc'></img>
        <Link>
        <button className='btndsc'>Ver Cupón</button>
        </Link>
        </div>
        </Fragment>
        );
};
export default DiscountMc;