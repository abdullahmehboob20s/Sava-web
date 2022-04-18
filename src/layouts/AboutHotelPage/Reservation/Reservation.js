import React from "react";
import styles from "./Reservation.module.css";
import planeTakeoff from "assets/images/plane-takeoff.svg";
import planeComming from "assets/images/plane-comming.svg";
import ResponsiveStyling from "hooks/ResponsiveStyling";

const PlaneAndFlightDetails = ({ planeName, date, from, to, isTakingOff }) => {
  return (
    <div className={`${styles.container}`}>
      <header
        className={`bg-blue-light ${ResponsiveStyling(
          "mb-40px",
          "mb-60px",
          "800px"
        )}`}
      >
        <div className={`${styles.plane_status} bg-blue`}>
          {isTakingOff ? (
            <img src={planeTakeoff} alt="" />
          ) : (
            <img src={planeComming} alt="" />
          )}
          <p
            className={`text-blue font-hel-bold ${ResponsiveStyling(
              "fs-24px",
              "fs-28px",
              "1200px"
            )}`}
          >
            {planeName}
          </p>
        </div>
        <div className={`${styles.plane_date}`}>
          <p
            className={`text-blue font-hel-bold ${ResponsiveStyling(
              "fs-24px",
              "fs-28px",
              "1200px"
            )}`}
          >
            {date}
          </p>
        </div>
      </header>

      <main>
        <div className={`${styles.from} text-center`}>
          <p
            className={`uppercase text-blue ${ResponsiveStyling(
              "fs-58px",
              "fs-54px",
              "1200px"
            )} font-hel-bold mb-10px`}
          >
            {from.code}
          </p>
          <p className="text-blue fs-26px font-hel-medium">{from.name}</p>
        </div>
        <div className={`${styles.lineWrapper}`}>
          <p className="text-blue fs-18px font-hel-medium text-center">
            Direkt
          </p>
          <div className={`${styles.line}`}></div>
        </div>
        <div className={`${styles.to} text-center`}>
          <p
            className={`uppercase text-blue ${ResponsiveStyling(
              "fs-58px",
              "fs-54px",
              "1200px"
            )} font-hel-bold mb-10px`}
          >
            {to.code}
          </p>
          <p className="text-blue fs-26px font-hel-medium">{to.name}</p>
        </div>
      </main>
    </div>
  );
};

function Reservation() {
  return (
    <div className={ResponsiveStyling("py-30px", "py-70px", "760px")}>
      <div className="container-wrapper">
        <h1 className="text-blue fs-50px font-hel-bold mb-50px">
          Fluturimi Juaj
        </h1>

        <div className={`${styles.flight_details}`}>
          <div className={`${styles.left}`}>
            <PlaneAndFlightDetails
              planeName="Nisja"
              date="03 Qershor 22"
              from={{ code: "TIA", name: "Tirana" }}
              to={{ code: "AYT", name: "Antalia" }}
              isTakingOff={true}
            />
          </div>
          <div className={`${styles.right}`}>
            <PlaneAndFlightDetails
              planeName="Kthimi"
              date="03 Qershor 22"
              from={{ code: "AYT", name: "Antalia" }}
              to={{ code: "TIA", name: "Tirana" }}
              isTakingOff={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
