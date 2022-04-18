import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ label, placeholder, type, onChange }) => {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  const mb15px = isBellow1000px ? "mb-10px" : "mb-15px";
  const fs18px = isBellow500px ? "fs-14px" : "fs-18px";

  return (
    <div className={`${styles.inputField}`}>
      <label
        htmlFor={label}
        className={`${styles.label} ${mb15px} ${fs18px} text-blue inline-block weight-5 pointer`}
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
        className={`${styles.input} ${fs18px} black block weight-5`}
      />
    </div>
  );
};
export default InputField;
