import React from "react";
import styles from "./Bullet.module.css";

function Bullet({
  children,
  className,
  gap = "14px",
  bulletAlignment = "center",
  bulletColor = "#1f3d6d",
}) {
  return (
    <div
      className={`${styles.bulletWrapper} ${className}`}
      style={{ alignItems: bulletAlignment }}
    >
      <div
        className={`${styles.bullet}`}
        style={{
          backgroundColor: bulletColor,
          marginRight: gap,
        }}
      ></div>
      <div>{children}</div>
    </div>
  );
}

export default Bullet;
