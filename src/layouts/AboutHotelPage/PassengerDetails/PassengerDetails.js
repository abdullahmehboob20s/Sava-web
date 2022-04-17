import React from "react";
import styles from "./PassengerDetails.module.css";
import { HiUser } from "react-icons/hi";
import InputBox from "components/InputBox/InputBox";
import { FaInfoCircle } from "react-icons/fa";
import ContactUsFooter from "layouts/ContactUsFooter/ContactUsFooter";

function PassengerDetails() {
  return (
    <div className="py-70px pb-0">
      <div className="mb-60px">
        <div className="container-wrapper">
          <div className="mb-40px">
            <h1 className="text-blue fs-50px font-hel-bold mb-35px">
              Detajet e pasagjerit
            </h1>

            <div className={`${styles.contactInformation} bg-blue-light`}>
              <HiUser color="#1F3D6D" size={30} />
              <p className="fs-28px text-blue font-hel-bold">
                Të dhënat e Kontaktit
              </p>
            </div>
          </div>

          <form className={`${styles.form} mb-70px`}>
            <InputBox id="Emri" label="Emri" type="text" placeholder="Emri" />
            <InputBox
              id="Mbiemri"
              label="Mbiemri"
              type="text"
              placeholder="Mbiemri"
            />
            <InputBox
              id="Email"
              label="Email"
              type="text"
              placeholder="Email"
            />
            <InputBox
              id="Telefon"
              label="Telefon"
              type="text"
              placeholder="Telefon"
            />

            <button
              type="submit"
              className="red-btn pointer w-full white fs-28px pointer font-hel-bold"
            >
              REZERVO TANI
            </button>
          </form>

          <div>
            <div className={`${styles.info} mb-15px`}>
              <FaInfoCircle size={30} color="#4C4C4C" />
              <p className="black opacity-0_7 fs-28px font-hel-bold">
                INFORMACIONI JUAJ
              </p>
            </div>

            <p className="italic opacity-0_2 black fs-22px font-hel-medium">
              Të gjitha detajet e siguruara nga ju do të mbahen nga SavaTours në
              përputhje me Njoftimin tonë të Privatësisë.
            </p>
          </div>
        </div>
      </div>

      <ContactUsFooter />
    </div>
  );
}

export default PassengerDetails;
