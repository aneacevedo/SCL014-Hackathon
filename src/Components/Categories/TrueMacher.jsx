import React, { Fragment } from "react";
import woman from "../../Img/runing.svg";
import lock from "../../Img/lock.svg";
import "./Styles/NewMacher.css";
import {Link} from 'react-router-dom';

const TrueMacher = () => {
  return (
    <Fragment>
      <div className="headerLevels">
      <Link to="/gana">
        <div className="back-categories">{"<"}</div>
        </Link>
        <p className='levelbold'>Nivel 2</p>
        <p> </p>
      </div>
      <div className="containerMasterLevels">
        <div className="containerCardLevel">
          <div className="headCardLevel2">
            <div className="containerTitle">
              <p>True Macher</p>
              <div className="containerImgLevelsWoman">
                <img className="imgLevel" src={woman} alt="woman" />
              </div>
            </div>
            <div className="containerImgLock">
                <img className="imgLevel" src={lock} alt="lock" />
              </div>
          </div>
          <div className="bodyCardLevel2">
            <p>
            Perteneces a esta categoría si cuentas con entre 100 y 199 MACH Points, lo que te permite acceder a:
            </p>
            <ul>
              <li className='list2'>Por cada $5.000 pesos gastados, te damos 5 puntos.</li>
              <li className='list2'>Hasta 35% de descuento en productos seleccionados.</li>
              <li className='list2'>1 Caja sorpresa de regalo anual</li>
              <li className='list2'>Devoluciones de dinero, por compras específicas.</li>
              <li className='list2'>Descuentos personalizados, en base a tus preferencias.</li>
            </ul>
            <div className="bottomCardLevel">
            <div className='btnCardLevelblck'>Activar mi caja</div>
            <div  className='btnCardLevelblck'>Mis descuentos</div>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TrueMacher;