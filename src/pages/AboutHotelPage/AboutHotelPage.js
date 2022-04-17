import React, { useRef, useState } from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import styles from "./AboutHotelPage.module.css";
import Data from "layouts/AboutHotelPage/Data/Data";
import Reservation from "layouts/AboutHotelPage/Reservation/Reservation";
import PassengerDetails from "layouts/AboutHotelPage/PassengerDetails/PassengerDetails";
import Tabs from "components/Tabs/Tabs";
import TabPanel from "components/Tabs/TabPanel";
import TabButton from "components/Tabs/TabButton";
import ProgressStep from "components/ProgressStep/ProgressStep";
import Header from "layouts/AboutHotelPage/Header/Header";

function AboutHotelPage() {
  return (
    <div>
      <Tabs defaultTab={0}>
        <div>
          <Navbar />
        </div>
        <div>
          <Header />
        </div>
        <div>
          <TabPanel tabIndex={0}>
            <Data />
          </TabPanel>
          <TabPanel tabIndex={1}>
            <Reservation />
          </TabPanel>
          <TabPanel tabIndex={2}>
            <PassengerDetails />
          </TabPanel>
        </div>
        <div>
          <Footer />
        </div>
      </Tabs>
    </div>
  );
}

export default AboutHotelPage;
