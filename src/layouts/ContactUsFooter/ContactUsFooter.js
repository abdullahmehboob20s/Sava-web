import React from "react";
import styles from "./ContactUsFooter.module.css";

function ContactUsFooter() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container-wrapper">
        <div className="fs-32px black opacity-0_7 font-hel-medium">
          Na kontaktoni ne:
        </div>
        <div className="fs-32px btn-blue font-hel-bold">+355692081903</div>
      </div>
    </footer>
  );
}

export default ContactUsFooter;
