import Hero from "layouts/HomePage/Hero/Hero";
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
    </div>
  );
}

export default HomePage;
