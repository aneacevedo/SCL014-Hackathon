import React from "react";
import "./Styles/Gender.css";
import "./Styles/Navigation.css";
import { Link } from "react-router-dom";

const Gender = () => {
  return (
    <div className="gender-container">
      <div className="AgeHeader"></div>
      <section className="gender-p-container">
        <p className="gender-p">¿Qué género te define?</p>
      </section>
      <section className="gender-buttons">
        <button className="gender-btn">Femenino</button>
        <button className="gender-btn">Masculino</button>
        <button className="gender-btn">No binario</button>
      </section>
      <div className="gender-navigation">
        <div className="navigation-container">
          <div>
              <Link to="/form1">
                <button className="navigation-btn">{"< "}Atrás</button>
              </Link>
          </div>
          <div>
              <Link to="/form3">
            <button className="navigation-btn">Siguiente{" >"}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
