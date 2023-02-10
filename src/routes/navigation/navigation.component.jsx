import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

// import logo from "../../assets/crown.svg";

import logo from "../../assets/logo-outfit-archive.jpeg";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const [darkMode, setDarkMode] = useState(true);

  const st = darkMode ? "navAtLightMode" : "navAtDarkMode";

  return (
    <Fragment>
      <div className={`navigation ${st}`}>
        <Link className="logo-container" to="/">
          {/* <CrwnLogo className="logo" /> */}
          <img src={logo} />
          <p>OArc</p>
        </Link>
        <div className="nav-links-container">
          <button
            style={{ margin: "0 15px" }}
            className={darkMode ? "darkmode" : "lightmode"}
            onClick={() => {
              setDarkMode((prevVal) => !prevVal);
              darkMode
                ? document.getElementById("root").classList.add("darkmode")
                : document.getElementById("root").classList.remove("darkmode");
            }}
          >
            {darkMode ? `🌙` : `🔆`}
          </button>

          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
