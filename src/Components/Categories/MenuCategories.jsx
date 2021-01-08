import React, { Fragment } from "react";
import "../Home/Styles/MenuComponent.css";
import Inicio from "../../Img/inacHome.svg";
import Transferir from "../../Img/Transferir.svg";
import Tarjetas from "../../Img/Tarjetas.svg";
import Servicios from "../../Img/Servicios.svg";
import Gana from "../../Img/actGana.svg";
import { Link } from "react-router-dom";

const MenuCategories = () => {
  return (
    <Fragment>
      <div className="container-icon-menu">
        <div className="icon-box1">
          <img src={Inicio} className="img-icon" alt={"inicio"}></img>
          <div>
            <p className="text-icon">Inicio</p>
          </div>
        </div>
        <div className="icon-box2">
          <img src={Transferir} className="img-icon" alt={"transferir"}></img>
          <div>
            <p className="text-icon">Transferir</p>
          </div>
        </div>

        <div className="icon-box3">
          <img src={Tarjetas} className="img-icon" alt={"tarjetas"}></img>
          <div>
            <p className="text-icon">Tarjetas</p>
          </div>
        </div>
        <div className="icon-box4">
          <img src={Servicios} className="img-icon" alt={"servicios"}></img>
          <div>
            <p className="text-icon">Servicios</p>
          </div>
        </div>
        <Link to="/gana">
          <div className="icon-box5">
            <img src={Gana} className="img-icon" alt={"gana"}></img>
            <div>
              <p className="text-icon">Gana</p>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default MenuCategories;
