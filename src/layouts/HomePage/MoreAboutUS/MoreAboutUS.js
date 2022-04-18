import React from "react";
import styles from "./MoreAboutUS.module.css";
import img1 from "assets/images/img-1.png";
import img2 from "assets/images/img-2.png";
import img3 from "assets/images/img-3.png";
import aboutusImg from "assets/images/aboutusImg.png";

function MoreAboutUS() {
  return (
    <div className={`${styles.wrapper} py-100px relative`}>
      <div className={`${styles.imageGrid}`}>
        <div className={`${styles.imageGrid_left}`}></div>
        <div className={`${styles.imageGrid_right}`}></div>
      </div>
      <div className="container-wrapper">
        <div className={`${styles.sectionWrapper}`}>
          <div className={`${styles.section}`}>
            <h1 className="text-blue-light font-hel-bold mb-10px fs-46px">
              MË SHUMË PËR TY
            </h1>
            <p className="black opacity-0_6 fs-18px">
              Akuaparku eshte kusht per femijet, ciftet jane ne kerkim te
              rezorteve romantike dhe te gjitheve na pelqen privilegji i nje
              pishine private. Njeri prej ketyre hoteleve eshte per JU
            </p>
          </div>
          <div className={`${styles.images}`}>
            <img src={img1} className="w-full" alt="" />
            <div className={`${styles.images_row}`}>
              <img src={img2} className="w-full" alt="" />
              <img src={img3} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreAboutUS;
