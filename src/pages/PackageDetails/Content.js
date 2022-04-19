import React from "react";
import styles from "./PackageDetails.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Dropdown from "components/Dropdown/Dropdown";
import PackageCard from "components/PackageCard/PackageCard";

function Content() {
  return (
    <div className={`${styles.content}`}>
      <header className="mb-45px">
        <div className={`${styles.left}`}>
          <div className={`${styles.headerTitle}`}>
            <BsFillMoonStarsFill size={26} className="text-blue" />
            <p className="fs-18px text-blue font-hel-medium">Numri I neteve:</p>
          </div>

          <div className={`${styles.paginations}`}>
            <button
              className={`${styles.active} fs-22px black opacity-0_7 font-hel-bold pointer`}
            >
              6
            </button>
            <button
              className={`fs-22px black opacity-0_7 font-hel-bold pointer`}
            >
              7
            </button>
            <button
              className={`fs-22px black opacity-0_7 font-hel-bold pointer`}
            >
              8
            </button>
            <button
              className={`fs-22px black opacity-0_7 font-hel-bold pointer`}
            >
              9
            </button>
          </div>
        </div>

        <div className={`${styles.right}`}>
          <p className="fs-18px text-blue font-hel-medium">Rendit Sipas:</p>
          <div className={`${styles.menu}`}>
            <Dropdown />
          </div>
        </div>
      </header>
      <PackageCard />
    </div>
  );
}

export default Content;
