import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Dbs.css";
import Title from "../../Img/dbs-1.svg";


const Dbs = () => {
  return (
    <div className="labial">
      <div className="dbs-cont">
        <div className="dbs-contenido">
          <img src={Title} alt="Canjear regalo" />
        </div>
        <div className="button-gift-cont">
          <Link to="/qr">
            <button className="btn-gift-canjear">Canjear Regalo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dbs;
