import React from "react";

function Glass({
  bgColor = "rgba(255, 255, 255, 0.4)",
  filter = "blur(10px)",
  zIndex = -2,
  boxShadow = "none",
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: zIndex,
        backgroundColor: bgColor,
        backdropFilter: filter,
        boxShadow: boxShadow,
      }}
    ></div>
  );
}

export default Glass;
