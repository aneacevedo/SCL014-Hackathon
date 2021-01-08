import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Styles/HeaderPoints.css'

const HeaderPoints = () => {
    return(
        <Fragment>
      <div className="headerPoints">
        <Link to="/">
        <div className="back-categories">{"<"}</div>
        </Link>
        <p className="text-header-points">Mis Puntos</p>
      </div>
      </Fragment>
    )
}
export default HeaderPoints;