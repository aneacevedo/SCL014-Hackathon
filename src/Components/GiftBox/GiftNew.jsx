import React from "react";
import "./Styles/GiftNew.css";
import GiftClosed from "../../Img/wrapped-gift.svg";
import woman from "../../Img/woman.svg";
import unlock from "../../Img/unlock.svg";
import { Link } from "react-router-dom";

const GiftNew = () => {
  return (
    <div className="gift-new-container">
      <div className="aqua-box-new">
        <div className="title-gift-cont">
          <div className="headCardLevel1">
            <div className="containerTitle">
              <p>New Macher</p>
              <div className="containerImgLevelsWoman">
                <img className="imgLevel" src={woman} alt="woman" />
              </div>
            </div>
            <div className="containerImgLock-new">
              <img className="imgLevel" src={unlock} alt="unlock" />
            </div>
          </div>
        </div>
        <div className="p-gift-cont">
          <p className="p-gift-new">
            Por tu preferencia y lealtad, queremos entregarte este regalo,
            pensado especialmente para ti.
          </p>
        </div>
        <div className="gift-img">
          <img src={GiftClosed} alt="Abrir mi caja" />
        </div>
        <div className="button-gift-cont">
          <Link to="/regalodbs">
            <button className="btn-gift-new">Abrir mi caja</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiftNew;
