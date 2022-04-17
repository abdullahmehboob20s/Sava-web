import React, { useState, useContext } from "react";
import { Tab_Context_Provider } from "./Tabs";

function TabButton({
  label,
  tabIndex,
  className,
  activeClassName,
  children,
  ref = null,
  onClick,
}) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);
  let active = activeTab === tabIndex;

  const handler = (e) => {
    setActiveTab(tabIndex);
    onClick(e);
  };

  return (
    <button
      className={active ? className + " " + activeClassName : className}
      onClick={(e) => handler(e)}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default TabButton;
