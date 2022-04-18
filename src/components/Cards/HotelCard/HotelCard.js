import React from "react";
import styles from "./HotelCard.module.css";
import { FaStar } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import Glass from "components/Glass/Glass";

const HotelCard = ({ hotelName, price }) => {
  return (
    <div className={`${styles.hotelCard} relative overflow-hidden`}>
      <Glass bgColor="rgba(255, 255, 255, 0.2)" filter="blur(30px)" />

      <h4 className={`fs-28px white font-hel-bold uppercase mb-20px`}>
        {hotelName}
      </h4>

      <div className={`${styles.dividerLine} mb-20px`}></div>

      <div className={`${styles.content} mb-30px`}>
        <div className={`${styles.rating} mb-20px`}>
          <p className="fs-20px font-hel-medium white">Kemer</p>
          <div className={`${styles.stars}`}>
            <FaStar size={18} color="white" />
            <FaStar size={18} color="white" />
            <FaStar size={18} color="white" />
            <FaStar size={18} color="white" />
            <FaStar size={18} color="white" />
          </div>
        </div>

        <div className={`${styles.flightDetails} mb-20px`}>
          <MdFlightTakeoff size={28} color="white" />
          <p className="fs-18px white font-hel-medium">
            27 Maj - 6 Net / 7 Dite
          </p>
        </div>
        <div className={`${styles.flightDetails}`}>
          <ImSpoonKnife size={22} color="white" />
          <p className="fs-18px white font-hel-medium">
            27 Maj - 6 Net / 7 Dite
          </p>
        </div>
      </div>

      <div className={`${styles.dividerLine} mb-20px`}></div>

      <button
        className={`red-btn fs-24px white font-hel-medium pointer w-full text-center`}
      >
        {price} € PER PERSON
      </button>
    </div>
  );
};

export default HotelCard;
