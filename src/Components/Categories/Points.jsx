import React, { Fragment } from "react";
import HeaderPoints from "./HeaderPoints";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import { makeStyles } from "@material-ui/core/styles";
import "react-circular-progressbar/dist/styles.css";
import "../Categories/Styles/Points.css";

const useStyle = makeStyles({
  divProgrees: {
    width: 150,
  },
});
const Points = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <div>
        <HeaderPoints />
      </div>
      <div className="circular-bar-points">
      <VisibilitySensor>
      {({ isVisible }) => {
        const percentage = isVisible ? 50 : 0;
        return (
        <CircularProgressbarWithChildren
          value={percentage}
          className={classes.divProgrees}
          counterClockwise={true}
          styles={buildStyles({
            pathColor: "#00EDDF",
            trailColor: "#D8D8D8",
            pathTransitionDuration: 0.5,
            transform: 'rotate(0.2turn)',
          }
          )}
          strokeWidth={12}
          
        >
          <div
            style={{
              fontSize: 21,
              marginTop: -5,
              width: 103,
              textAlign: "center",
              color: "#333333",
            }}
          >
            <strong>50 PUNTOS</strong> De 100
          </div>
        </CircularProgressbarWithChildren>
          );
        }}
      </VisibilitySensor>
      </div>
      <div className="container-boxes">
        <div className="boxPoints">
          <div className="boxTitlePoints">
            <p className="titlePoints">Invitaste a un amigo</p>
            <p className="points">+20 pts</p>
           
          </div>
          <div>
            <p className="content-pointsText">Juana, acabas de invitar a un amigo, por lo que con fecha de 10/12/2020, acabas de sumar 20 puntos, lo que te da un total de 50 puntos.</p>
          </div>
        </div>
        <div className="boxPoints">
          <div className="boxTitlePoints">
          <p className="titlePoints">Ingresaste tus cuentas</p>
            <p className="points">+20 pts</p>
           
          </div>
          <div>
            <p className="content-pointsText">Juana, acabas de ingresar tus cuentas, por lo que con fecha de 8/12/2020, acabas de sumar 20 puntos, lo que te da un total de 30 puntos.</p>
          </div>
        </div>
        <div className="boxPoints">
          <div className="boxTitlePoints">
          <p className="titlePoints">Realizaste 20 pagos</p>
            <p className="points">+10 pts</p>
           
          </div>
          <div>
            <p className="content-pointsText">Juana, acabas de realizar 20 pagos sobre $15.000, en tiendas Cencosud, por lo que con fecha de 4/12/2020, acabas de sumar 10 puntos, lo que te da un total de 10 puntos.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Points;
