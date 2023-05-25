import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <div className={ style.header }>
        <div className={ style.logo }>
          <Link to="/">
            <h2>
              GEEK<span>Shop</span>
            </h2>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
