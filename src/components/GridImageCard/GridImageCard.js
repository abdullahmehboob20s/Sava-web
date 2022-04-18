import Pill from "components/Pill/Pill";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./GridImageCard.module.css";

const GridImageCard = ({
  bgImg,
  title,
  className,
  isSpanning,
  offer,
  isOffer,
}) => {
  const isBellow600px = useMediaQuery("(max-width : 600px)");
  const pillFontSize = isBellow600px ? "fs-12px" : "fs-16px";

  return (
    <div
      className={`${styles.gridItem} ${className} ${
        isSpanning ? styles.spanning : ""
      }`}
    >
      <img src={bgImg} className={`${styles.gridItemImg}`} alt="" />
      <div className={`${styles.pill}`}>
        <Pill offer={offer} isOffer={isOffer} fontSize={pillFontSize} />
      </div>
      <p className="white font-hel-bold fs-32px">{title}</p>
    </div>
  );
};

export default GridImageCard;
