import React from "react";
import styles from "./RoomCard.module.css";
import tick from "assets/images/tick.svg";
import ResponsiveStyling from "hooks/ResponsiveStyling";

function RoomCard({ img, isOnTop = false }) {
  return (
    <div className={`${styles.card} ${isOnTop ? styles.isOnTop : ""} relative`}>
      {isOnTop ? (
        <div className={`${styles.tickWrapper} bg-blue`}>
          <img src={tick} alt="" />
        </div>
      ) : (
        ""
      )}
      <h1 className={`${styles.title} text-blue fs-28px font-hel-bold mb-30px`}>
        Deluxe Room garden view
      </h1>

      <main>
        <div className={`${styles.left}`}>
          <img src={img} alt="" />
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.listCont} mb-30px`}>
            <div className={`${styles.list}`}>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Pamje nga gjelbërimi
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Dhomë 37 m2
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Në ndërtesë qendrore
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                WiFi (falas)
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Kondicioner
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Pamje nga gjelbërimi
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                TV
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Kasafortë
              </p>
            </div>
            <div className={`${styles.list}`}>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Ballkon
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Minibar (me pije freskuese, birrë, çokollata)
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Garderobë
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                Banjo me vaskë dhe dush
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Tharëse flokësh
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Peshqirë banjoje
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Produkte higjienike
              </p>
              <p
                className={`${ResponsiveStyling(
                  "fs-12px mb-5px",
                  "fs-20px mb-10px",
                  "600px"
                )} black opacity-0_7`}
              >
                {" "}
                Maks 2 të rritur + 2 fëmijë ose 3 të rritur
              </p>
            </div>
          </div>

          <div className={`${styles.priceWrapper}`}>
            <p
              className={`${ResponsiveStyling(
                "fs-14px",
                "fs-16px",
                "450px"
              )} black opacity-0_7 italic`}
            >
              Çmimi fillestar: 3762€
            </p>
            <p className="text-blue fs-22px font-hel-bold">Totali 3011€</p>

            <button className="fs-18px white font-hel-bold bg-blue">
              DHOMA E ZGJEDHUR
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RoomCard;
