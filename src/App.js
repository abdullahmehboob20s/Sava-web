import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import AboutHotelPage from "pages/AboutHotelPage/AboutHotelPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-hotel" element={<AboutHotelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
