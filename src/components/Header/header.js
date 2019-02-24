import React from "react";
import appIcon from "../../appicon.svg";

function Header() {
  return (
    <div className="hero-head">
      <div className="container">
        <nav className="navbar is-dark">
          <div className="navbar-brand">
            <img src={appIcon} className="is-rounded" alt="Application Icon" />
            <span className="navbar-item navbar-logo is-size-1">Echo</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
