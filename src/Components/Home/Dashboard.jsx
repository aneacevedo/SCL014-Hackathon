import React, { Fragment } from 'react';
import img from '../../Img/Iconpeso.svg';
import img1 from '../../Img/iconbill.svg';
import './Styles/Dashboard.css';


export const Dashboard = () => {
    return(
        <Fragment>
            <div className='div1'>
            <img src={img1} alt='iconbill' className='iconbill'></img>
                <div className='div2'>
                <h1 className='myTitle'>
                Equipo MACH
                </h1>
                <p className='myTxt'>
                Juana, acabas de realizar una transferencia de $5.000 a tu cuenta MACH...
                </p>
                </div>
                <div className='date'>
                    <p>hoy
                        <br/>
                        {" >"}
                    </p>
                </div>
            </div>
            <div className='div1'>
            <img src={img} alt='iconperson' className='iconpers'></img>
                <div className='div2'>
                <h1 className='myTitle'>
                Equipo MACH
                </h1>
                <p className='myTxt'>
                Juana, acabas de realizar un pago de $20.000 a la cuenta...
                </p>
                </div>
                <div className='date'>
                    <p>ayer
                        <br/>
                        {" >"}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}
export default Dashboard;