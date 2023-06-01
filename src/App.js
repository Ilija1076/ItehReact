import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Pocetna from "./pages/Pocetnap";
import Kontakt from "./pages/Kontaktp";
import Destinations from "./pages/Destinationsp";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/contact" element={<Kontakt />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
