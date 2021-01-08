import React from "react";
import HeaderMisiones from "./HeaderMisiones";
import "./Styles/misionFriend.css";

const MisionFriend = () => {
  return (
    <div>
      <HeaderMisiones />
      <div>
        <div className="containerCardMisionF">
          <p className="titleCardMisionF">¡Todos ganan con MACH!</p>
          <p className="descriptionCard">
            Por invitar a tus amigos, tú podrás ganar puntos al momento que tu
            amig@ active su tarjeta, los cuales te servirán para subir de
            categoría y canjear fabulosos premios.{" "}
          </p>
          <div className="containerListMisionF">
            <div className="eachMisionF">
              <div className="containerNumberTitle">
                <div className="containerElipse">
                  <p className="number">1</p>
                </div>
                <p className="titleList">Invita en segundos</p>
              </div>
              <p className="descriptionList">
                Desde la sección “Invitar”, pódras compartir tu enlace a tus
                amig@s por Instagram, Whatsapp u otro
              </p>
            </div>
            <div className="eachMisionF">
              <div className="containerNumberTitle">
                <div className="containerElipse">
                  <p className="number">2</p>
                </div>
                <p className="titleList">Tu amig@ activa su tarjeta</p>
              </div>
              <p className="descriptionList">
                Ganarás 20 puntos cada vez que tu invitado active su tarjeta{" "}
              </p>
            </div>
            <div className="eachMisionF">
              <div className="containerNumberTitle">
                <div className="containerElipse">
                  <p className="number">3</p>
                </div>
                <p className="titleList">¡Ganaste!</p>
              </div>
              <p className="descriptionList">
                Recibirás los puntos por MACH ese mismo día, los cuales te
                servirán para subir de categoría y canjear fabulosos premios.
                ¿Qué mejor?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisionFriend;
