import React, { useState } from "react";
import HeaderMisiones from "../Components/Missions/HeaderMisiones";
import Permanentes from "../Components/Missions/Permanentes";
import Temporales from "../Components/Missions/Temporales";

const Misiones = () => {
  const [showPermanentes, setShowPermanentes] = useState(true);
  const [showTemporales, setShowTemporales] = useState(false);

  const handleClickPermanentes = () => {
    setShowPermanentes(true);
    setShowTemporales(false);
  };

  const handleClickTemporales = () => {
    setShowTemporales(true);
    setShowPermanentes(false);
  };

  return (
    <div>
      <HeaderMisiones />
      <section className="buttons-saldo-container">
        <button onClick={handleClickTemporales} className="saldo-btn">
          Misiones Temporales
        </button>
        <button onClick={handleClickPermanentes} className="saldo-btn">
          Misiones permanentes
        </button>
      </section>
      <Permanentes visible={showPermanentes} />
      <Temporales visible={showTemporales} />
    </div>
  );
};

export default Misiones;
