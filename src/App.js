import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const Kontakt = () => {
    const [ime, setIme] = useState("");
    const [email, setEmail] = useState("");

    const handleImeChange = (e) => {
      setIme(e.target.value);
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Ovde možete implementirati logiku za slanje podataka na server
    };

    return (
      <div>
        <h1>Kontaktirajte nas</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Ime:
            <input type="text" value={ime} onChange={handleImeChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <button type="submit">Pošalji</button>
        </form>
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      {/* Other components or content */}
    </div>
  );
}
export default App;
