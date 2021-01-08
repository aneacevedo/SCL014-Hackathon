import React, { Fragment } from 'react';
import './Styles/Levels.css';
import walk from '../../Img/woman.svg';
import run from '../../Img/runing.svg';
import superw from '../../Img/superhero.svg';
import { Link } from 'react-router-dom';

export const Levels = () => {
    return(
        <Fragment>
            <div className='welc-cont'>
                <p className='title-welc'>
                    Bienvenida Juana a MACH Points
                </p>
                <p className='text-welc'>
                En MACH todos ganan. Acumula puntos, sube de nivel y disfruta de los diferentes beneficios.
                </p>
            </div>
            <div className='category'>
        
            <div className='new'>
            <Link to="/gana/newmacher">
                <h3 className='cat-title'>New Macher</h3>
                <p className='cat-txt'>4 Beneficios disponibles</p>
                <img className='walk' src={walk} alt='walking woman'></img>
            </Link>
            </div>
    
            <div className='true'>
            <Link to="/gana/truemacher">
                <h3 className='cat-title'>True Macher</h3>
                <p className='cat-txt'>5 Beneficios disponibles</p>
                <img className='run' src={run} alt='running woman'></img>
            </Link>
            </div>
            <div className='lover'>
            <Link to="/gana/machlover">
                <h3 className='cat-title'>MACH Lover</h3>
                <p className='cat-txt'>7 Beneficios disponibles</p>
                <img className='super' src={superw} alt='super woman'></img>
            </Link>
            </div>
            </div>
        </Fragment>

    )
}
export default Levels;