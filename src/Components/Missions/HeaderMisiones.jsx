import React from "react";
import "./Styles/HeaderMisiones.css";
import { Link } from "react-router-dom";

const HeaderMisiones = () => {
  return (
    <div className="header-mision-cont">
      <Link to="/gana">
        <div className="mision-header-1">
          <h2 className="mision-text">{"<"}</h2>
        </div>
      </Link>
      <div className="mision-header-2">
        <h2 className="mision-text">Misiones</h2>
      </div>
    </div>
  );
};

export default HeaderMisiones;
