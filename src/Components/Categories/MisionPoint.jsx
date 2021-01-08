import React from 'react';
import '../Home/Styles/Saldo.css';
import {Link} from 'react-router-dom';

const MisionPoints = () => {
    return(
        <div className="buttons-saldo-container">
            <Link to="/misiones">
            <button className="saldo-btn">Ver Misiones</button>
            </Link >
            <Link to="/puntos">
            <button className="saldo-btn">Mis puntos</button>
            </Link >
        </div>
    );
}

export default MisionPoints;