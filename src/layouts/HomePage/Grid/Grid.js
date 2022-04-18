import React from "react";
import styles from "./Grid.module.css";
import gridImg1 from "assets/images/grid-img-1.png";
import gridImg2 from "assets/images/grid-img-2.png";
import gridImg3 from "assets/images/grid-img-3.png";
import gridImg4 from "assets/images/grid-img-4.png";
import GridImageCard from "components/GridImageCard/GridImageCard";
import useMediaQuery from "hooks/useMediaQuery";

function Grid() {
  const isBellow650px = useMediaQuery("(max-width : 650px)");

  return (
    <div className="container-wrapper py-70px">
      <div className={`${styles.grid}`}>
        <GridImageCard
          bgImg={gridImg1}
          title="Femijet falas"
          className={`${isBellow650px ? "" : "grid-col-span-2"}`}
          isSpanning={isBellow650px ? false : true}
          isOffer={true}
          offer="26 OFERTA"
        />
        <GridImageCard
          bgImg={gridImg2}
          title="ALL INCLUSIVE nen 600 €"
          isSpanning={false}
          isOffer={false}
          offer="26 OFERTA"
        />
        <GridImageCard
          bgImg={gridImg3}
          title="Krociere"
          isSpanning={false}
          isOffer={false}
          offer="26 OFERTA"
        />
        <GridImageCard
          bgImg={gridImg4}
          title="RIXOS Hotels "
          className={`${isBellow650px ? "" : "grid-col-span-2"}`}
          isSpanning={isBellow650px ? false : true}
          isOffer={false}
          offer="26 OFERTA"
        />
      </div>
    </div>
  );
}

export default Grid;
