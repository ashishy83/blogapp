import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {

  return (
    <>
        <div className="header">
          <button className="hamburger">
            <hr className="ham" />
            <hr className="ham" />
            <hr className="ham" />
          </button>
          <Link to={"/"} className="header-link">

          <div>
            <span className="s s1">The</span>
            <span className="s s2">Siren</span>
          </div>
      </Link>
        </div>
    </>
  )
};

export default Header;
