import React from "react";
import styles from "./Grid.module.css";
import gridImg1 from "assets/images/grid-img-1.png";
import gridImg2 from "assets/images/grid-img-2.png";
import gridImg3 from "assets/images/grid-img-3.png";
import gridImg4 from "assets/images/grid-img-4.png";
import Pill from "components/Pill/Pill";

const GridItem = ({ bgImg, title, className, isSpanning, offer, isOffer }) => {
  return (
    <div
      className={`${styles.gridItem} ${className} ${
        isSpanning ? styles.spanning : ""
      }`}
    >
      <img src={bgImg} className={`${styles.gridItemImg}`} alt="" />
      <div className={`${styles.pill}`}>
        <Pill offer={offer} isOffer={isOffer} />
      </div>
      <p className="white font-hel-bold fs-32px">{title}</p>
    </div>
  );
};

function Grid() {
  return (
    <div className="container-wrapper py-70px">
      <div className={`${styles.grid}`}>
        <GridItem
          bgImg={gridImg1}
          title="Femijet falas"
          className="grid-col-span-2"
          isSpanning={true}
          isOffer={true}
          offer="26 OFERTA"
        />
        <GridItem
          bgImg={gridImg2}
          title="ALL INCLUSIVE nen 600 €"
          isSpanning={false}
          isOffer={false}
          offer="26 OFERTA"
        />
        <GridItem
          bgImg={gridImg3}
          title="Krociere"
          isSpanning={false}
          isOffer={false}
          offer="26 OFERTA"
        />
        <GridItem
          bgImg={gridImg4}
          title="RIXOS Hotels "
          className="grid-col-span-2"
          isSpanning={true}
          isOffer={false}
          offer="26 OFERTA"
        />
      </div>
    </div>
  );
}

export default Grid;
