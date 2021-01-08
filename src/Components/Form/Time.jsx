import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Time.css";

const Time = () => {
  return (
    <div className="time-container">
      <div className="AgeHeader"></div>
      <div className="time-text">
        <p className="time-p">¿Qué opinas de jugar contra el tiempo?</p>
      </div>
      <div className="buttons-time">
        <button className="btn-time">Me encanta</button>
        <button className="btn-time">Me estresa</button>
        <button className="btn-time">No sé</button>
      </div>
      <div className="navigation-time">
        <div className="navigation-container">
          <div>
            <Link to="/form3">
              <button className="navigation-btn">{"< "}Atrás</button>
            </Link>
          </div>
          <div>
            <Link to="/form6">
              <button className="navigation-btn">Siguiente{" >"}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
