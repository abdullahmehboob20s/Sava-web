import Header from "./components/Header/Header";
import styles from "./Data.module.css";

import Tabs from "components/Tabs/Tabs";
import TabButton from "components/Tabs/TabButton";
import TabPanel from "components/Tabs/TabPanel";
import { useEffect, useRef, useState } from "react";
import Details from "./components/Details/Details";
import AboutHotel from "./components/AboutHotel/AboutHotel";

function Data() {
  const markerRef = useRef(null);
  const containerRef = useRef(null);
  const [defaultTabIndex, setdefaultTabIndex] = useState(0);

  useEffect(() => {
    const button =
      containerRef.current.querySelectorAll("button")[defaultTabIndex];

    markerRef.current.style.left = button.offsetLeft + "px";
    markerRef.current.style.width = button.offsetWidth + "px";
  }, []);

  const indicator = (e) => {
    markerRef.current.style.left = e.target.offsetLeft + "px";
    markerRef.current.style.width = e.target.offsetWidth + "px";
  };

  return (
    <div className="py-70px pb-0">
      <div className="container-wrapper">
        <div className="mb-40px">
          <h1 className="text-blue fs-50px font-hel-bold mb-5px">
            Rixos Premium Belek
          </h1>
          <p className="fs-22px black opacity_8">Belek</p>
        </div>

        <div className="mb-80px">
          <Header />
        </div>
      </div>

      <Tabs defaultTab={defaultTabIndex}>
        <div className="mb-45px">
          <div className="container-wrapper">
            <div className={`${styles.tabs_container}`} ref={containerRef}>
              <div className={`${styles.marker}`} ref={markerRef}></div>
              <TabButton
                tabIndex={0}
                onClick={indicator}
                activeClassName={`text-blue-light`}
                className={`${styles.tabButton} fs-28px black opacity-0_7 font-hel-bold pointer`}
              >
                RRETH HOTELIT
              </TabButton>
              <TabButton
                tabIndex={1}
                onClick={indicator}
                activeClassName={`text-blue-light`}
                className={`${styles.tabButton} fs-28px black opacity-0_7 font-hel-bold pointer`}
              >
                DETAJET
              </TabButton>
            </div>
          </div>
        </div>

        <TabPanel tabIndex={0}>
          <AboutHotel />
        </TabPanel>

        <TabPanel tabIndex={1}>
          <Details />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Data;
