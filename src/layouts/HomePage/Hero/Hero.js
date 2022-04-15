import HeroCard from "components/Cards/HeroCard/HeroCard";
import React from "react";
import styles from "./Hero.module.css";
import hero_img_1 from "assets/images/hero-img-1.png";
import hero_img_2 from "assets/images/hero-img-2.png";
import hero_img_3 from "assets/images/hero-img-3.png";
import herocardtitleimg1 from "assets/images/hero-card-title-img-1.svg";
import herocardtitleimg2 from "assets/images/hero-card-title-img-2.svg";
import herocardtitleimg3 from "assets/images/hero-card-title-img-3.svg";
import HeroForm from "components/HeroForm/HeroForm";

function Hero() {
  return (
    <div className={`${styles.heroWrapper}`}>
      <div className="container-wrapper">
        <div className={`${styles.hero} py-100px`}>
          <div className={`${styles.upperSection} mb-100px`}>
            <div className={`${styles.left}`}>
              <h1 className="fs-64px white font-hel-bold mb-25px">
                VERA TANI MERR VRULL!
              </h1>

              <p className="fs-22px font-hel-medium white mb-45px">
                Gjej ofertën më të mirë për rezortet në Antalja!
              </p>
              <button className="red-btn white fs-22px font-hel-bold pointer">
                SHIKO OFERTAT
              </button>
            </div>
            <div className={`${styles.right}`}>
              <div className={`${styles.cards}`}>
                <HeroCard titleImg={herocardtitleimg1} img={hero_img_1} />
                <HeroCard titleImg={herocardtitleimg2} img={hero_img_2} />
                <HeroCard titleImg={herocardtitleimg3} img={hero_img_3} />
              </div>
            </div>
          </div>
          <HeroForm />
        </div>
      </div>
    </div>
  );
}

export default Hero;
