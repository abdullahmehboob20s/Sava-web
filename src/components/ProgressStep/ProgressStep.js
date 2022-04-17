import React from "react";
import styles from "./ProgressStep.module.css";
import TabButton from "components/Tabs/TabButton";

const ProgressStep = ({ formStepNum, setformStepNum, title, index }) => {
  return (
    <div className={`${styles.progress_step}`}>
      <TabButton
        className={`${styles.circle} pointer ${
          formStepNum === index || formStepNum > index
            ? styles.active_step_circle
            : ""
        }`}
        tabIndex={index}
        onClick={() => setformStepNum(index)}
      ></TabButton>

      <TabButton
        tabIndex={index}
        onClick={() => setformStepNum(index)}
        className={`${styles.progress_title} pointer`}
      >
        <div className={`fs-22px black opacity-0_7 font-hel-medium`}>
          {title}
        </div>
      </TabButton>
    </div>
  );
};
export default ProgressStep;
