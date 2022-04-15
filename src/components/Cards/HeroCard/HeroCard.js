import React from "react";
import styles from "./HeroCard.module.css";

function HeroCard({ titleImg, img }) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.cardTitle}`}>
        <img src={titleImg} alt="" />
      </div>
      <img src={img} className={`${styles.cardImg} w-full`} alt="" />
    </div>
  );
}

export default HeroCard;
