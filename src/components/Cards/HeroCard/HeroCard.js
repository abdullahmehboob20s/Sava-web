import Glass from "components/Glass/Glass";
import React from "react";
import styles from "./HeroCard.module.css";

function HeroCard({ titleImg, img }) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.cardTitle}`}>
        <Glass bgColor="rgba(8, 90, 126, .6)" filter="blur(10px)" />
        <img src={titleImg} alt="" />
      </div>
      <img src={img} className={`${styles.cardImg} w-full`} alt="" />
    </div>
  );
}

export default HeroCard;
