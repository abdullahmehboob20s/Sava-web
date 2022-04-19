import HeroForm from "components/HeroForm/HeroForm";
import Navbar from "components/Navbar/Navbar";
import ResponsiveStyling from "hooks/ResponsiveStyling";
import Footer from "layouts/Footer/Footer";
import React from "react";
import Content from "./Content";
import styles from "./PackageDetails.module.css";

function PackageDetails() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div
        className={`container-wrapper ${ResponsiveStyling(
          "py-30px",
          "py-70px",
          "600px"
        )}`}
      >
        <HeroForm />
      </div>

      <div
        className={`bg-gray-light ${ResponsiveStyling(
          "py-50px",
          "py-70px",
          "600px"
        )}`}
      >
        <div className="container-wrapper">
          <Content />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PackageDetails;
