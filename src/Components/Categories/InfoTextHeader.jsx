import React from "react";
import { Link } from "react-router-dom";
import './Styles/infoTextHeader.css';
import "./Styles/NewMacher.css";

const InfoTextHeader = () => {
  return (
    <div>
      <div className="headerLevels">
        <Link to="/gana">
          <div className="back-categories">{"<"}</div>
        </Link>
        <p>Información MACH Points</p>
        <p> </p>
      </div>
      <div className="containerTextInformation">
        <p className="titleInformation">
          En MACH premiamos tu lealtad con los mejores beneficios
        </p>
        <p className="textInformation">
          Los que se atreven a romper con lo establecido, tienen su recompensa.
          Conoce los beneficios exclusivos a los que puedes acceder por ser un
          #MACHLover de corazón.
        </p>
      </div>
    </div>
  );
};

export default InfoTextHeader;
