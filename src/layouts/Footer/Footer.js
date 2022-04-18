import React from "react";
import styles from "./Footer.module.css";
import logo from "assets/images/logo-2.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import ResponsiveStyling from "hooks/ResponsiveStyling";

function Footer() {
  return (
    <div className="bg-btn-blue">
      <div className="mb-30px">
        <div
          className={`container-wrapper ${ResponsiveStyling(
            "py-30px",
            "py-70px",
            "500px"
          )}`}
        >
          <div className={`${styles.footer_top} mb-40px`}>
            <img src={logo} className={`${styles.footerLogo}`} alt="" />

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

          <div className={`mb-60px`}>
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

          <div className={`${styles.footerBottom}`}>
            <div className={`${styles.box} `}>
              <p className="fs-20px white font-poppins weight-6 opacity-0_7">
                Rruga Brigada 8
              </p>
              <p className="fs-20px white font-poppins weight-6 opacity-0_7">
                Tirane, Albania
              </p>
            </div>
            <div className={`${styles.box} `}>
              <p className="fs-20px white font-poppins weight-6 opacity-0_7">
                TEL: +355672081903
              </p>
              <p className="fs-20px white font-poppins weight-6 opacity-0_7">
                TEL: +355672081903
              </p>
            </div>
            <form className={`${styles.box} ${styles.form}`}>
              <p
                className={`${ResponsiveStyling(
                  "fs-16px",
                  "fs-22px",
                  "1000px"
                )}  white font-poppins weight-7 lh-1_2`}
              >
                Regjistrohu per njoftime
              </p>

              <input
                type="email"
                placeholder="E-mail:"
                className="fs-18px weight-6 font-poppins white"
              />
            </form>
          </div>
        </div>
      </div>

      <div className={`${styles.footer_Footer}`}>
        <div className="container-wrapper">
          <p className="white font-poppins fs-20px opacity-0_6 weight-6 text-center">
            Zhvilluar nga: salvateurs.al
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
