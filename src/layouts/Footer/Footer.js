import React from "react";
import styles from "./Footer.module.css";
import logo from "assets/images/logo-2.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-70px bg-btn-blue">
      <div className="container-wrapper">
        <div className={`${styles.footer_top} mb-40px`}>
          <img src={logo} alt="" />

          <div className={`${styles.icons_wrapper}`}>
            <p className="fs-22px font-poppins white weight-6">Social net</p>

            <div className={`${styles.socialIcons}`}>
              <a href="/" className="white">
                <BsInstagram size={30} />
              </a>
              <a href="/" className="white">
                <FaFacebookF size={26} />
              </a>
              <a href="/" className="white">
                <FaLinkedinIn size={30} />
              </a>
              <a href="/" className="white">
                <FaYoutube size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.links_wrpaper}`}>
          <a
            href="/"
            className="white fs-20px font-hel-medium pointer uppercase"
          >
            PUSHIME
          </a>
          <a
            href="/"
            className="white fs-20px font-hel-medium pointer uppercase"
          >
            KROCIERE
          </a>
          <a
            href="/"
            className="white fs-20px font-hel-medium pointer uppercase"
          >
            DESTINACIONE
          </a>
          <a
            href="/"
            className="white fs-20px font-hel-medium pointer uppercase"
          >
            ARGETIM
          </a>
          <a
            href="/"
            className="white fs-20px font-hel-medium pointer uppercase"
          >
            ROMANCE
          </a>
          <a
            href="/"
            className="white fs-20px font-hel-medium pointer uppercase"
          >
            LUKS
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
