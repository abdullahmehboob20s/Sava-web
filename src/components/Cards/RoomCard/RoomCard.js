import React from "react";
import styles from "./RoomCard.module.css";
import tick from "assets/images/tick.svg";

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
      <h1 className="text-blue fs-28px font-hel-bold mb-30px">
        Deluxe Room garden view
      </h1>

      <main>
        <div className={`${styles.left}`}>
          <img src={img} alt="" />
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.listCont} mb-30px`}>
            <div className={`${styles.list}`}>
              <p className="fs-20px black opacity-0_7 mb-10px">
                {" "}
                Pamje nga gjelbërimi
              </p>
              <p className="fs-20px black opacity-0_7 mb-10px"> Dhomë 37 m2</p>
              <p className="fs-20px black opacity-0_7 mb-10px">
                {" "}
                Në ndërtesë qendrore
              </p>
              <p className="fs-20px black opacity-0_7 mb-10px"> WiFi (falas)</p>
              <p className="fs-20px black opacity-0_7 mb-10px"> Kondicioner</p>
              <p className="fs-20px black opacity-0_7 mb-10px">
                {" "}
                Pamje nga gjelbërimi
              </p>
              <p className="fs-20px black opacity-0_7 mb-10px"> TV</p>
              <p className="fs-20px black opacity-0_7 mb-10px"> Kasafortë</p>
            </div>
            <div className={`${styles.list}`}>
              <p className="fs-20px black opacity-0_7 mb-10px"> Ballkon</p>
              <p className="fs-20px black opacity-0_7 mb-10px">
                {" "}
                Minibar (me pije freskuese, birrë, çokollata)
              </p>
              <p className="fs-20px black opacity-0_7 mb-10px"> Garderobë</p>
              <p className="fs-20px black opacity-0_7 mb-10px">
                Banjo me vaskë dhe dush
              </p>
              <p className="fs-20px black opacity-0_7 mb-10px">
                {" "}
                Tharëse flokësh
              </p>
              <p className="fs-20px black opacity-0_7 mb-10px">
                {" "}
                Peshqirë banjoje
              </p>
              <p className="fs-20px black opacity-0_7 mb-10px">
                {" "}
                Produkte higjienike
              </p>
              <p className="fs-20px black opacity-0_7 mb-10px">
                {" "}
                Maks 2 të rritur + 2 fëmijë ose 3 të rritur
              </p>
            </div>
          </div>

          <div className={`${styles.priceWrapper}`}>
            <p className="fs-16px black opacity-0_7 italic">
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
