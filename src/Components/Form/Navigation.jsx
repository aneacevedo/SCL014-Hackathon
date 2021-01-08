import React from "react";
import "./Styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div>
        <button className="navigation-btn">{"< "}Atrás</button>
      </div>
      <div>
        <button className="navigation-btn">Siguiente{" >"}</button>
      </div>
    </div>
  );
};

export default Navigation;
