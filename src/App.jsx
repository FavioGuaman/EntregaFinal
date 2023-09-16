/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { ContextGlobal } from "./components/utils/global.context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Contact from "./Routes/Contact.jsx";
import Favs from "./Routes/Favs.jsx";
import Detail from "./Routes/Detail.jsx";

function App() {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <div className={`App ${theme === "dark" ? "dark-mode" : ""}`}>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
