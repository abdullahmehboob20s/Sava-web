import ProgressStep from "components/ProgressStep/ProgressStep";
import TabButton from "components/Tabs/TabButton";
import ResponsiveStyling from "hooks/ResponsiveStyling";
import React, { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [formStepNum, setformStepNum] = useState(0);

  return (
    <div
      className={`${ResponsiveStyling(
        "py-50px",
        "py-70px",
        "500px"
      )} pb-0 mb-30px`}
    >
      <div className="container-wrapper">
        <header className={`${styles.header}`}>
          <div className={`${styles.progressbar}`}>
            <div
              className={`${styles.progress}`}
              style={{ width: formStepNum * 50 + "%" }}
            ></div>
            <ProgressStep
              formStepNum={formStepNum}
              setformStepNum={setformStepNum}
              title={"Te Dhenat"}
              index={0}
            />
            <ProgressStep
              formStepNum={formStepNum}
              setformStepNum={setformStepNum}
              title={"Rishiko Udhetimin"}
              index={1}
            />
            <ProgressStep
              formStepNum={formStepNum}
              setformStepNum={setformStepNum}
              title={"Rezervo"}
              index={2}
            />
          </div>
          <div className={`${styles.reserve} bg-blue-light`}>
            <div>
              <p
                className={`text-blue font-hel-bold mb-5px  ${ResponsiveStyling(
                  "fs-26px",
                  "fs-34px",
                  "1200px"
                )}`}
              >
                3011 €
              </p>
              <p className="black opacity-0_7 italic fs-16px">
                Përfshirë dhe Uljen 751 €
              </p>
            </div>
            <TabButton
              className={`red-btn white ${ResponsiveStyling(
                "fs-16px",
                "fs-28px",
                "1200px"
              )} font-hel-bold pointer uppercase`}
              tabIndex={2}
              onClick={() => setformStepNum(2)}
            >
              REZERVO
            </TabButton>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
