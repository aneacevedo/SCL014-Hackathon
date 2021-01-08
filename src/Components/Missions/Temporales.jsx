import React from "react";
import "./Styles/MissionContent.css";
import Friends from "../../Img/mision-5.svg";
import Coin from "../../Img/mision-6.svg";
import Amigo from "../../Img/mision-7.svg";
import Card from "../../Img/mision-2.svg";


const Temporales = ({visible}) => {
    if(visible === false) {
        return null
    }
  return (
    <div className="mission-content">
      <div className="mission-buttons">
        <div className="btn-mission">
          <div className="mision-img">
        <img src={Friends} alt="Amigos" />
        </div>
          <div className="title-mission">
          <div className="points-title">
            <p className="mission-p-dark">Invita a tus amigos</p>
            <p className="mission-p-dark">+20 pts</p>
            </div>
          <p className="mission-p-light">
            Por invitar a tus amigos, tú podrás...
          </p>
          </div>
        </div>
        <div className="btn-mission">
        <div className="mision-img">
        <img src={Coin} alt="Cuentas" />
        </div>
          <div className="title-mission">
          <div className="points-title">
            <p className="mission-p-dark">Ingresa tus cuentas</p>
            <p className="mission-p-dark">+20 pts</p>
          </div>
          <p className="mission-p-light">
            Registra tus cuentas con pago aut...
          </p>
          </div>
        </div>
        <div className="btn-mission">
        <div className="mision-img">
        <img src={Amigo} alt="Amigos" />
        </div>
          <div className="title-mission">
          <div className="points-title">
            <p className="mission-p-dark">Paga a tus amigos</p>
            <p className="mission-p-dark">+2 pts</p>
          </div>
          <p className="mission-p-light">
            Regresa el dinero prestado, y gan...
          </p>
          </div>
        </div>
        <div className="btn-mission">
        <div className="mision-img">
        <img src={Card} alt="Pagos" />
        </div>
          <div className="title-mission">
          <div className="points-title">
            <p className="mission-p-dark">Realiza 20 pagos</p>
            <p className="mission-p-dark">+10 pts</p>
          </div>
          <p className="mission-p-light">
            Realiza 20 pagos sobre los $15.00...
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temporales;
