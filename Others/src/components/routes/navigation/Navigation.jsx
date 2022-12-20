import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../../assets/crown.svg";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/sign-in" className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
