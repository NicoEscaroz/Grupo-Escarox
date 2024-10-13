import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Element } from "react-scroll";
import Catalogo from "./Components/Catalogo";
import Footer from "./Components/Footer";
import GrupoEscarox from "./Components/GrupoEscarox";
import Historia from "./Components/Historia";
import Navbar from "./Components/Navbar";
import Nosotros from "./Components/Nosotros";
import "./index.css";

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function MainPage() {
  return (
    <>
      <Element name="inicio" id="inicio">
        <GrupoEscarox />
      </Element>
      <Element name="historia" id="historia">
        <Historia />
      </Element>
      <Element name="nosotros" id="nosotros">
        <Nosotros />
      </Element>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
        <Element name="contacto" id="contacto">
          <Footer />
        </Element>
      </div>
    </Router>
  );
}

export default App;
