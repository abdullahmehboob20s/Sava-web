import React from "react";
import useMediaQuery from "./useMediaQuery";

function ResponsiveStyling(
  afterResponsiveValue,
  defaultValue,
  breakPoint,
  breakPointText = "max-width"
) {
  const isBellow = useMediaQuery(`(${breakPointText} : ${breakPoint})`);
  const value = isBellow ? afterResponsiveValue : defaultValue;

  return value.toString();
}

export default ResponsiveStyling;
