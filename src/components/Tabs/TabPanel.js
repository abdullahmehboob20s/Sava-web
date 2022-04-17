import React, { useContext, useState } from "react";
import { Tab_Context_Provider } from "./Tabs";

function TabPanel({ children, tabIndex }) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);

  if (activeTab === tabIndex) {
    return <div className="tabs-tab-pan">{children}</div>;
  } else {
    return null;
  }
}

export default TabPanel;
