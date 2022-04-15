import InputField from "components/InputField/InputField";
import React from "react";
import styles from "./HeroForm.module.css";

function HeroForm() {
  return (
    <form className={`${styles.formSection}`}>
      <div className={`${styles.inputs}`}>
        <InputField placeholder="Zgjidh destinacionin" label="Destinacioni" />
        <InputField placeholder="Zgjidh" label="Hoteli" />
        <InputField placeholder="06/03/2022" label="Data e Nisjes" />
        <InputField placeholder="Rreth nje jeve" label="Kohëzgjatja" />
        <InputField placeholder="2 + 1" label="Të rritur & Fëmijë" />
      </div>
      <div className={`${styles.formRight}`}>
        <button
          type="submit"
          className={`${styles.formBtn} bg-btn-blue pointer white fs-20px uppercase weight-5`}
        >
          KERKO
        </button>
      </div>
    </form>
  );
}

export default HeroForm;
