import React from "react";
import "./Header.css";

const Header = (props) => {
  let { logo } = props;
  return (
    <div>
      <header className="nav">
        <div className="nav__inner">
          <a href="#">
            <img className="logo" src={logo} alt="LOGO" />
          </a>
          <div className="nav__inner-list">
            <a className="nav__link" href="#">
              Stores
            </a>
            <a className="nav__link" href="#">
              Help & Support
            </a>
            <a className="nav__btn" href="#">
              Download
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
