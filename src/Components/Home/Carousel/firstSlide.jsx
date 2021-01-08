import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import { makeStyles } from "@material-ui/core/styles";
import "react-circular-progressbar/dist/styles.css";
import "../Styles/carousel.css";

const useStyle = makeStyles({
  divProgrees: {
    width: 70,
  },
});
const FirstSlide = () => {
  const classes = useStyle();
  return (
    <div className="containerCarousel1">
      <div className="circular-barSlider">
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
            trailColor: "#ffff",
            pathTransitionDuration: 0.9,
            transform: 'rotate(0.2turn)',
          })}
          strokeWidth={8}
        >
          <div
            style={{
              fontSize: 10,
              marginTop: 22,
              marginRight: 9,
              width: 50,
              textAlign: "center",
              color: "#ffff",
            }}
          >
            <strong>50 PUNTOS</strong>
          </div>{" "}
        </CircularProgressbarWithChildren>
          );
        }}
      </VisibilitySensor>
      </div>
      <div className="containerTextCarousel">
        <p className="titleCarousel">Anímate a ganar punto</p>
        <p>Pasa a la siguiente categoría y recibe mejores beneficios</p>
      </div>
      <div>
        <button className="btnMisionCarousel">Ver misiones</button>
      </div>
    </div>
  );
};

export default FirstSlide;
