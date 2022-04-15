import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={`${styles.navbarWrapper} bg-blue`}>
      <div className="container-wrapper">
        <div className={`${styles.navbar}`}>
          <div className={`${styles.left}`}>
            <Link to="/">
              <img src={logo} className={`${styles.logo}`} alt="" />
            </Link>
          </div>
          <div className={`${styles.right}`}>
            <div className={`${styles.links}`}>
              <Link to="/" className="fs-22px black block font-hel-bold">
                PUSHIME
              </Link>
              <Link to="/" className="fs-22px black block font-hel-bold">
                KROCIERE
              </Link>
              <Link to="/" className="fs-22px black block font-hel-bold">
                DESTINACIONE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
