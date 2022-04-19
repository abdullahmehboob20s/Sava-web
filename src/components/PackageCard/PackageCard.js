import React from "react";
import styles from "./PackageCard.module.css";
import roomimg from "assets/images/room-card-img-1.png";
import { FaStar, FaInfoCircle, FaPlaneDeparture } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoBedOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import ResponsiveStyling from "hooks/ResponsiveStyling";

const ListItem = ({ icon, title }) => {
  return (
    <div className={`${styles.info} mb-15px`}>
      <div className={`${styles.icon}`}>{icon}</div>
      <p className="text-blue fs-18px font-hel-medium">{title}</p>
    </div>
  );
};

function PackageCard() {
  return (
    <div className={`${styles.card}`}>
      <img src={roomimg} className={`${styles.img} w-full`} alt="" />

      <div className={`${styles.details}`}>
        <p className="fs-28px text-blue font-hel-bold mb-15px">
          Deluxe Room garden view
        </p>

        <div className={`${styles.stars} mb-30px`}>
          <FaStar size={24} className="color-blue" />
          <FaStar size={24} className="color-blue" />
          <FaStar size={24} className="color-blue" />
          <FaStar size={24} className="color-blue" />
          <FaStar size={24} className="color-blue" />
        </div>

        <div className={`${styles.inHotel_details}`}>
          <ListItem
            title="Përmbledhja"
            icon={<FaInfoCircle size={22} className="text-blue" />}
          />
          <ListItem
            title="27 Maj - 6 Net / 7 Dite"
            icon={<FaPlaneDeparture size={22} className="text-blue" />}
          />
          <ListItem
            title="Ultra all inclusive"
            icon={<ImSpoonKnife size={22} className="text-blue" />}
          />
          <ListItem
            title="Deluxe Room"
            icon={<IoBedOutline size={22} className="text-blue" />}
          />
          <ListItem
            title="Dbl + 1chd (2-12)"
            icon={<IoIosPeople size={22} className="text-blue" />}
          />
        </div>
      </div>

      <div className={`${styles.priceSection} text-center`}>
        <p className="text-blue fs-32px font-hel-bold">Çmimi i Paketës</p>

        <del>
          <p className="fs-32px black opacity-0_7 ">3762 €</p>
        </del>

        <p
          className={`${ResponsiveStyling(
            "fs-36px",
            "fs-52px",
            "450px"
          )} text-blue font-hel-bold`}
        >
          3011 €
        </p>

        <button className="red-btn fs-22px white font-hel-bold w-full">
          VAZHDO
        </button>
      </div>
    </div>
  );
}

export default PackageCard;
