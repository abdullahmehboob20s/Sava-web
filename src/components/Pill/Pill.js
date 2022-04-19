import Glass from "components/Glass/Glass";
import React from "react";
import styles from "./Pill.module.css";

function Pill({
  offer,
  style,
  fontSize = "16px",
  glassBg = "rgba(255, 255, 255, 0.3)",
  children,
}) {
  return (
    <div
      className={`${styles.pill} ${fontSize} font-hel-medium white w-fit-content`}
      style={style}
    >
      <Glass bgColor={glassBg} filter="blur(30px)" />
      {children}
    </div>
  );
}

export default Pill;
