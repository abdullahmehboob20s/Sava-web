import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setisOpen(false));

  return (
    <div className={`${styles.navbarWrapper} bg-blue`}>
      <div className="container-wrapper">
        <div className={`${styles.navbar}`}>
          <div className={`${styles.left}`}>
            <Link to="/">
              <img src={logo} className={`${styles.logo}`} alt="" />
            </Link>
          </div>
          <div className={`black-screen ${isOpen ? "show" : ""}`}></div>
          <div
            className={`${styles.right} ${isOpen ? styles.show : ""}`}
            ref={sidebarRef}
          >
            <div className={`${styles.sidebar_header}`}>
              <button
                className={`${styles.close_btn}`}
                onClick={() => setisOpen(false)}
              >
                <IoClose size={30} />
              </button>
              <img src={logo} className={`${styles.sidebar_logo}`} alt="" />
            </div>
            <div className={`${styles.links}`}>
              <Link to="/" className="fs-20px black block font-hel-bold">
                PUSHIME
              </Link>
              <Link
                to="/about-hotel"
                className="fs-20px black block font-hel-bold"
              >
                KROCIERE
              </Link>
              <Link
                to="/package-details"
                className="fs-20px black block font-hel-bold"
              >
                DESTINACIONE
              </Link>
            </div>
          </div>

          <button
            className={`${styles.hamburger}`}
            onClick={() => setisOpen(!isOpen)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
