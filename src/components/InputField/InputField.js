import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ label, placeholder, type, onChange }) => {
  return (
    <div className={`${styles.inputField}`}>
      <label
        htmlFor={label}
        className={`${styles.label} text-blue fs-18px inline-block mb-15px weight-5 pointer`}
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
        className={`${styles.input} black fs-18px block weight-5`}
      />
    </div>
  );
};
export default InputField;
