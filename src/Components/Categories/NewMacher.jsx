import React, { Fragment } from "react";
import woman from "../../Img/woman.svg";
import unlock from "../../Img/unlock.svg";
import "./Styles/NewMacher.css";
import { Link } from 'react-router-dom';

const NewMacher = () => {
  return (
    <Fragment>
      <div className="headerLevels">
        <Link to="/gana">
        <div className="back-categories">{"<"}</div>
        </Link>
        <p className='levelbold'>Nivel 1</p>
        <p> </p>
      </div>
      <div className="containerMasterLevels">
        <div className="containerCardLevel">
          <div className="headCardLevel1">
            <div className="containerTitle">
              <p>New Macher</p>
              <div className="containerImgLevelsWoman">
                <img className="imgLevel" src={woman} alt="woman" />
              </div>
            </div>
            <div className="containerImgLock">
                <img className="imgLevel" src={unlock} alt="unlock" />
              </div>
          </div>
          <div className="bodyCardLevel">
            <p>
              Perteneces a esta categoría si cuentas con entre 0 y 99 MACH
              Points, lo que te permite acceder a:
            </p>
            <ul>
              <li className='list1'>Por cada $5.000 pesos gastados, te damos 3 puntos.</li>
              <li className='list1'>Hasta 20% de descuento en productos seleccionados.</li>
              <li className='list1'>1 Caja sorpresa de regalo anual(desde los 50 puntos).</li>
              <li className='list1'>Descuentos personalizados, en base a tus preferencias.</li>
            </ul>
          <div className="bottomCardLevel">
            <Link to="/abrircaja">
            <button className='btnCardLevel'>Activar mi caja</button>
            </Link>
            <button  className='btnCardLevel'>Mis descuentos</button>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewMacher;
