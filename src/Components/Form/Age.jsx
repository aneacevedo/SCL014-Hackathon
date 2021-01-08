import React from "react";
import "./Styles/Age.css";
import { Link } from "react-router-dom";

const Age = () => {
  return (
    <div className="AgeContainer">
      <div className="AgeHeader"></div>
      <section className="SelectDate">
        <div className="SelectText">Tu fecha de nacimiento (dd/mm/aaaa)</div>
        <div className="InputDate">
        <form>
        <input className="input-box" type="text" id="day" placeholder="dd" />
        <input className="input-box" type="text" id="month" placeholder="mm" />
        <input className="input-box" type="text" id="year" placeholder="aaaa" />
        </form>
      </div>
      </section>
      <div className="navigation-component" >
      <div className="navigation-container">
      <div>
        <button className="navigation-btn">{"< "}Atrás</button>
      </div>
      <div>
        <Link to="/form2">
        <button className="navigation-btn">Siguiente{" >"}</button>
        </Link>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Age;
