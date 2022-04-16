import Glass from "components/Glass/Glass";
import React from "react";
import styles from "./Pill.module.css";

function Pill({ offer, isOffer, style }) {
  return (
    <div
      className={`${styles.pill} fs-16px font-hel-medium white w-fit-content`}
      style={style}
    >
      <Glass
        bgColor={isOffer ? "orange" : "rgba(255, 255, 255, 0.3)"}
        filter="blur(30px)"
      />

      {offer}
    </div>
  );
}

export default Pill;
