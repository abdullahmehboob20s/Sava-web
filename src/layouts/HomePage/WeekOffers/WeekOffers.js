import HotelCard from "components/Cards/HotelCard/HotelCard";
import WeeklyOfferCard from "components/Cards/WeeklyOfferCard/WeeklyOfferCard";
import Pill from "components/Pill/Pill";
import ResponsiveStyling from "hooks/ResponsiveStyling";
import React from "react";
import styles from "./WeekOffers.module.css";

function WeekOffers() {
  return (
    <div className={`container-wrapper py-70px pt-0 ${styles.container}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.left}`}>
          <div
            className={`${ResponsiveStyling("mb-20px", "mb-50px", "1000px")}`}
          >
            <Pill
              offer="04 OFERTA"
              fontSize={ResponsiveStyling("fs-12px", "fs-16px", "760px")}
            />
          </div>
          <h1 className="fs-58px white font-hel-bold">
            OFERTAT <br /> E JAVES
          </h1>
        </div>
        <HotelCard hotelName="NG PHASELIS" price="180" />
      </div>

      <div className={`${styles.offers_container} mb-15px`}>
        <WeeklyOfferCard title="NG PHASELIS" isOffer={true} />
        <WeeklyOfferCard title="GURAL PREMIER TEKIROVA" isOffer={false} />
        <WeeklyOfferCard title="RIXOS PREMIUM BELEK" isOffer={false} />
        <WeeklyOfferCard title="GURAL PREMIER TEKIROVA" isOffer={false} />
      </div>

      <p className="fs-18px black opacity-0_8 italic">
        Te limituara ne kohe dhe ne numer dhomash, ofertat e javes kane raportin
        me optimal cilesi-cmim. Mos i humbisni!
      </p>
    </div>
  );
}

export default WeekOffers;
