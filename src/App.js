import { useRef } from "react";
import Catalogo from "./Components/Catalogo";
import Footer from "./Components/Footer";
import GrupoEscarox from "./Components/GrupoEscarox";
import Navbar from "./Components/Navbar";
import Nosotros from "./Components/Nosotros";
import "./index.css";

function App() {
  const Nosotrosref = useRef(null);

  const NosotroshandleClick = () => {
    Nosotrosref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Navbar handleClick={NosotroshandleClick} />
      <GrupoEscarox />
      <Nosotros Nosotros={Nosotrosref} />
      <Catalogo />
      <Footer />
    </div>
  );
}

export default App;
