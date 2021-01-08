import React from 'react'
import { Link } from "react-router-dom";

const HeaderGift = () => {
    return (
        <div className="header-mision-cont">
      <Link to="/gana/newmacher">
        <div className="mision-header-1">
          <h2 className="mision-text">{"<"}</h2>
        </div>
      </Link>
      <div className="mision-header-2">
        <h2 className="mision-text">Caja Regalo</h2>
      </div>
    </div>
    )
}

export default HeaderGift
