import React from "react";
import styles from "./Reservation.module.css";
import planeTakeoff from "assets/images/plane-takeoff.svg";
import planeComming from "assets/images/plane-comming.svg";

function Reservation() {
  return (
    <div className="py-70px">
      <div className="container-wrapper">
        <h1 className="text-blue fs-50px font-hel-bold mb-50px">
          Fluturimi Juaj
        </h1>

        <div className={`${styles.flight_details}`}>
          <div className={`${styles.container} ${styles.left}`}>
            <header className="bg-blue-light mb-70px">
              <div className={`${styles.plane_status} bg-blue`}>
                <img src={planeTakeoff} alt="" />
                <p className="text-blue font-hel-bold fs-28px">Nisja</p>
              </div>
              <div className={`${styles.plane_date}`}>
                <p className="text-blue font-hel-bold fs-28px">03 Qershor 22</p>
              </div>
            </header>

            <main>
              <div className={`${styles.from} text-center`}>
                <p className="uppercase text-blue fs-54px font-hel-bold mb-10px">
                  TIA
                </p>
                <p className="text-blue fs-26px font-hel-medium">Tirana</p>
              </div>
              <div className={`${styles.lineWrapper}`}>
                <p className="text-blue fs-18px font-hel-medium text-center">
                  Direkt
                </p>
                <div className={`${styles.line}`}></div>
              </div>
              <div className={`${styles.to} text-center`}>
                <p className="uppercase text-blue fs-54px font-hel-bold mb-10px">
                  AYT
                </p>
                <p className="text-blue fs-26px font-hel-medium">Antalia</p>
              </div>
            </main>
          </div>
          <div className={`${styles.container} ${styles.right}`}>
            <header className="bg-blue-light mb-70px">
              <div className={`${styles.plane_status} bg-blue`}>
                <img src={planeComming} alt="" />
                <p className="text-blue font-hel-bold fs-28px">Kthimi</p>
              </div>
              <div className={`${styles.plane_date}`}>
                <p className="text-blue font-hel-bold fs-28px">03 Qershor 22</p>
              </div>
            </header>

            <main>
              <div className={`${styles.from} text-center`}>
                <p className="uppercase text-blue fs-54px font-hel-bold mb-10px">
                  TIA
                </p>
                <p className="text-blue fs-26px font-hel-medium">Tirana</p>
              </div>
              <div className={`${styles.lineWrapper}`}>
                <p className="text-blue fs-18px font-hel-medium text-center">
                  Direkt
                </p>
                <div className={`${styles.line}`}></div>
              </div>
              <div className={`${styles.to} text-center`}>
                <p className="uppercase text-blue fs-54px font-hel-bold mb-10px">
                  AYT
                </p>
                <p className="text-blue fs-26px font-hel-medium">Antalia</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
