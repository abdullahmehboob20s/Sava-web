import React from "react";
import styles from "./WeeklyOfferCard.module.css";
import { FaStar } from "react-icons/fa";

function WeeklyOfferCard({ title, isOffer }) {
  return (
    <div className={`${styles.card} ${isOffer ? styles.isOffer : ""}`}>
      <div>
        <p className="text-blue fs-18px mb-5px uppercase font-hel-bold">
          {title}
        </p>

        <div className={`${styles.rating}`}>
          <p className="fs-20px font-hel-medium text-blue">Kemer</p>
          <div className={`${styles.stars}`}>
            <FaStar size={16} className="btn-blue" />
            <FaStar size={16} className="btn-blue" />
            <FaStar size={16} className="btn-blue" />
            <FaStar size={16} className="btn-blue" />
            <FaStar size={16} className="btn-blue" />
          </div>
        </div>
      </div>
      <button
        className={`red-btn fs-18px white font-hel-medium pointer text-center`}
      >
        180 € PER PERSON
      </button>
    </div>
  );
}

export default WeeklyOfferCard;
