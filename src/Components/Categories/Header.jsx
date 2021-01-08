import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./Styles/NewMacher.css";


export const Header = () => {
    return(
        <Fragment>
      <div className="headerLevels">
        <Link to="/gana/newmacher">
        <div className="back-categories">{"<"}</div>
        </Link>
        <p>Descuentos</p>
      </div>
      </Fragment>
    )
}
export default Header;