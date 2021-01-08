import React from "react";
import "./Styles/Saldo.css";
import MenuHam from "../../Img/sandwich-menu.svg"
import MenuQr from "../../Img/qr-menu.svg"

const Saldo = () => {
  return (
    <div className="saldo-container">
      <div className="saldo-icons">
        <img className="MenuHam" src={MenuHam} alt="menu" />
        <p className="saldo-mach">SALDO <strong>MACH</strong></p>
        <img  className="MenuQr" src={MenuQr} alt="QR" />
      </div>
      <div className="saldo-monto-container">
        <h2 className="saldo-monto">$5.000</h2>
      </div>
      <section className="buttons-saldo-container">
          <button className="saldo-btn">Recarga y retira</button>
          <button className="saldo-btn">Ver movimientos</button>
      </section>
    </div>
  );
};

export default Saldo;
