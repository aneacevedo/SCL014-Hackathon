import React, { Fragment } from 'react';
import HeaderWelcomeDiscount from './HeaderWelcomeDiscount';
import homy from '../../Img/Homy2.svg'
import { Link } from 'react-router-dom';
import './Styles/Discounts.css';

export const DiscountHomy = () => {
    return(
        <Fragment>
        <HeaderWelcomeDiscount />
        <div className='dContainer'>
        <img src={homy} className='homyPic' alt='Homy desc'></img>
        <Link>
        <button className='btndsc'>Ver Cupón</button>
        </Link>
        </div>
        </Fragment>
        );
};
export default DiscountHomy;