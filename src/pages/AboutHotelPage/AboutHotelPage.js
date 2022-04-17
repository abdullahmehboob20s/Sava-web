import React, { useRef } from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import styles from "./AboutHotelPage.module.css";
import Data from "layouts/AboutHotelPage/Data/Data";

function AboutHotelPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Data />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutHotelPage;
