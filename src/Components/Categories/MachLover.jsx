import React, { Fragment } from "react";
import woman from "../../Img/superhero.svg";
import lock from "../../Img/lock.svg";
import {Link} from 'react-router-dom';
import "./Styles/NewMacher.css";

const MachLover = () => {
  return (
    <Fragment>
      <div className="headerLevels">
      <Link to="/gana">
        <div className="back-categories">{"<"}</div>
        </Link>
        <p className='levelbold'>Nivel 3</p>
        <p> </p>
      </div>
      <div className="containerMasterLevels">
        <div className="containerCardLevel">
          <div className="headCardLevel3">
            <div className="containerTitle">
              <p>Mach Lover</p>
              <div className="containerImgLevelsSuperHero">
                <img className="imgLevel" src={woman} alt="woman" />
              </div>
            </div>
            <div className="containerImgLock">
                <img className="imgLevel" src={lock} alt="lock" />
              </div>
          </div>
          <div className="bodyCardLevel3">
            <p>
            Perteneces a esta categoría si cuentas con  200 MACH Points. Desde este nivel, empiezas a juntar nuevamente puntos, los cuales puedes transformar en dinero. En esta categoria accedes a:
            </p>
            <ul>
              <li className='list3'>Por cada $5.000 pesos gastados, te damos 7 puntos.</li>
              <li className='list3'>Hasta 50% de descuento en productos seleccionados.</li>
              <li className='list3'>1 Caja sorpresa de regalo anual</li>
              <li className='list3'>$3.000 de regalo al mes, para gastar en una sección sorpresa.</li>
              <li className='list3'>Posibilidad de transerir puntos (revisar requisitos).</li>
              <li className='list3'>Devoluciones de dinero, por compras específicas.</li>
              <li className='list3'>Descuentos personalizados, en base a tus preferencias.</li>
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

export default MachLover;