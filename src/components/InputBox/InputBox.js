import React from "react";
import styles from "./InputBox.module.css";

const InputBox = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
}) => {
  return (
    <div className={`${styles.inputBox}`}>
      <label
        htmlFor={id}
        className="fs-22px black opacity-0_7 font-hel-medium mb-15px block w-fit-content pointer"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        className="fs-22px black opacity-0_7 font-hel-medium mb-15px block italic"
      />
    </div>
  );
};

export default InputBox;
