import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import AboutHotelPage from "pages/AboutHotelPage/AboutHotelPage";
import PackageDetails from "pages/PackageDetails/PackageDetails";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-hotel" element={<AboutHotelPage />} />
        <Route path="/package-details" element={<PackageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
