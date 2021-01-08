import React from "react";
import "./Styles/MissionContent.css";
import Truck from "../../Img/mision-1.svg";
import Card from "../../Img/mision-2.svg";
import Shopping from "../../Img/mision-3.svg";
import Pc from "../../Img/mision-4.svg";

const Permanentes = ({ visible }) => {
  if (visible === false) {
    return null;
  }
  return (
    <div className="mission-content">
      <div className="mission-buttons">
        <div className="btn-mission">
          <div className="mision-img">
            <img src={Truck} alt="Viaja" />
          </div>
          <div className="title-mission">
            <div className="points-title">
            <p className="mission-p-dark">Viaja en Cabify</p>
            <p className="mission-p-dark">+5 pts</p>
            </div>
            <p className="mission-p-light">
              Queremos que viajes seguro, es por...
            </p>
          </div>
        </div>
        <div className="btn-mission">
          <div className="mision-img">
            <img src={Card} alt="Gasta" />
          </div>
          <div className="title-mission">
          <div className="points-title">
            <p className="mission-p-dark">Gasta sobre $20.000</p>
            <p className="mission-p-dark">+20 pts</p>
</div>
            <p className="mission-p-light">
              Por este mes gasta sobre $20.000...
            </p>
          </div>
        </div>
        <div className="btn-mission">
          <div className="mision-img">
            <img src={Shopping} alt="Pide" />
          </div>
          <div className="title-mission">
          <div className="points-title">
            <p className="mission-p-dark">Pide un McCombo</p>
            <p className="mission-p-dark">+5 pts</p>
</div>
            <p className="mission-p-light">
              Durante este mes pide una promoci...
            </p>
          </div>
        </div>
        <div className="btn-mission">
          <div className="mision-img">
            <img src={Pc} alt="Suscribete" />
          </div>
          <div className="title-mission">
          <div className="points-title">
            <p className="mission-p-dark">Suscríbete a Spotify</p>
            <p className="mission-p-dark">+10 pts</p>
</div>
            <p className="mission-p-light">
              Por este mes suscríbete a Spotify y...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permanentes;
