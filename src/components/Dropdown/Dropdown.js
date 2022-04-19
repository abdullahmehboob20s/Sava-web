import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { HiOutlineChevronDown } from "react-icons/hi";
import OutsideClickDetector from "hooks/OutsideClickDetector";

const DropdownItem = ({ title, onClick, value }) => {
  return (
    <button
      className={`${styles.dropdownItem} ${
        value === title ? styles.active : ""
      } fs-18px black opacity-0_7 font-hel-medium pointer block`}
      onClick={() => onClick(title)}
    >
      {title}
    </button>
  );
};

function Dropdown() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("Cmimeve ne rritje");

  const handler = () => setShow(!show);

  const dropdownRef = OutsideClickDetector(() => setShow(false));

  const valueSetter = (val) => {
    setValue(val);
    setShow(false);
  };

  return (
    <div
      className={`${styles.dropdown} ${show ? styles.showing : ""}`}
      ref={dropdownRef}
    >
      <button className={`${styles.btn} pointer`} onClick={handler}>
        <p className="fs-18px black opacity-0_7 font-hel-medium">{value}</p>
        <span className={`${styles.icon}`}>
          <HiOutlineChevronDown size={22} className="black opacity-0_7" />
        </span>
      </button>

      <div className={`${styles.dropdownMenu} ${show ? styles.show : ""}`}>
        <DropdownItem
          title="Cmimeve ne rritje"
          onClick={valueSetter}
          value={value}
        />
        <DropdownItem
          title="Cmimeve ne 1"
          onClick={valueSetter}
          value={value}
        />
        <DropdownItem
          title="Cmimeve ne 2"
          onClick={valueSetter}
          value={value}
        />
      </div>
    </div>
  );
}

export default Dropdown;
