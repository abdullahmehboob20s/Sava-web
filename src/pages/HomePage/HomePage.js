import Footer from "layouts/Footer/Footer";
import Grid from "layouts/HomePage/Grid/Grid";
import Hero from "layouts/HomePage/Hero/Hero";
import MoreAboutUS from "layouts/HomePage/MoreAboutUS/MoreAboutUS";
import WeekOffers from "layouts/HomePage/WeekOffers/WeekOffers";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Grid />
      </div>
      <div>
        <WeekOffers />
      </div>
      <div>
        <MoreAboutUS />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
