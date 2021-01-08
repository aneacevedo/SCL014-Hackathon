///import { CenterFocusStrong } from "@material-ui/icons";
import React, { Fragment } from "react";
import '../Categories/Styles/ProgressBar.css'
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { makeStyles} from "@material-ui/core/styles";
import "react-circular-progressbar/dist/styles.css";
// npm install react-visibility-sensor

const useStyle = makeStyles({
  divProgrees: {
    width: 150,
    
  },
 
});

const ProgressBar = () => {
  const classes = useStyle();
  return (
    <div className="container-progress">
      <div className="box-text-win">
        <p className="text-win">Gana</p>
      </div>
      <div className="circular-bar">
      <VisibilitySensor>
      {({ isVisible }) => {
        const percentage = isVisible ? 50 : 0;
        return (
        <CircularProgressbarWithChildren
          value={percentage}
          className={classes.divProgrees}
          counterClockwise={true}
          styles={buildStyles({
            pathColor:'#00EDDF',
            trailColor: '#ffff',
            pathTransitionDuration: 0.9,
            transform: 'rotate(0.2turn)',
            
          })}
         strokeWidth={12}
        
        >
         
          <div
            style={{
              fontSize: 21,
              marginTop: -5,
              width: 103,
              textAlign: "center",
              color: '#ffff',
            }}
          >
            <strong>50 PUNTOS</strong> De 100
          </div>
        </CircularProgressbarWithChildren>
          );
        }}
      </VisibilitySensor>
      </div>
      <div className="text-new-matcherCategory">
        <p className="text-category">
          CATEGORIA <strong>NEW MACHER</strong>
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;