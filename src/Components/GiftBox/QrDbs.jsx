import React from 'react'
import QR from '../../Img/qr-dbs.svg'
import './Styles/Dbs.css'
import {Link} from 'react-router-dom'

const QrDbs = () => {
    return (
        <div className="qr-cont">
            <Link to="/gana/newmacher">
            <img src={QR} alt="Escanea QR" />
            </Link>
        </div>
    )
}

export default QrDbs
