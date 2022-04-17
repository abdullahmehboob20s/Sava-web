import React from "react";
import styles from "./RoomCard.module.css";
import Container from "@mui/material/Container";

function RoomCard() {
  return (
    <div className={`${styles.card}`}>
      <h1 className="text-blue fs-28px font-hel-bold mb-30px">
        Deluxe Room garden view
      </h1>

      <main>
        <div>
          <div>
            <p> Pamje nga gjelbërimi</p>
            <p> Dhomë 37 m2</p>
            <p> Në ndërtesë qendrore</p>
            <p> WiFi (falas)</p>
            <p> Kondicioner</p>
            <p> Pamje nga gjelbërimi</p>
            <p> TV</p>
            <p> Kasafortë</p>
          </div>
          <div>
            <p> Ballkon</p>
            <p> Minibar (me pije freskuese, birrë, çokollata)</p>
            <p> Garderobë</p>
            Banjo me vaskë dhe dush
            <p> Tharëse flokësh</p>
            <p> Peshqirë banjoje</p>
            <p> Produkte higjienike</p>
            <p> Maks 2 të rritur + 2 fëmijë ose 3 të rritur</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RoomCard;
