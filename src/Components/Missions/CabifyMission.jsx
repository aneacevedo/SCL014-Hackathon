import React, { Fragment } from 'react';
import CabifyHeader from './CabifyHeader';
import './Styles/CabifyM.css';
import logo from '../../Img/logo-cab.svg';
import chica from '../../Img/cabify-mujer.svg';

export const CabifyMission = () => {
    return(
        <Fragment>
            <CabifyHeader />
            <div className='purpleBox'>
                <div className='logo-cont'>
                    <img className='logo' src={logo} alt='logo cabify'></img>
                </div>
                <div className='bodyTxt'>
                    <h1 className='bodyTitle'>Muévete por la ciudad con más seguridad</h1>
                    <p className='bodySubt'>
                        Queremos que viajes seguro, es por eso que te premiamos con puntos cada vez que uses Cabify. Solo por este mes te regalamos 5 puntos por cada viaje en Cabify al pagar con MACH (por viajes superiores a $15.000).
                    </p>
                </div>
            <img className='girl' src={chica} alt='chica cabify'></img>
            </div>
        </Fragment>
    )
}
export default CabifyMission;