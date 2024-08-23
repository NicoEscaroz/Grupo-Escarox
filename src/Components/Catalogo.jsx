import React from "react";
import Grupo_Escarox_Catálogo_2024 from "../Assets/Grupo_Escarox_Catálogo_2024.pdf";
import Screw from "../Assets/Screw.jpg";
import Tornillo from "../Assets/Tornillo.png";

const Catalogo = () => {
  return (
    <div
      id="Catalogo"
      className="text-black font-body text-center max-w-[1240px] mx-auto"
    >
      <div className="flex items-center justify-center mx-auto md:grid-cols-3 gap-8 font-large text-lg ">
        <div className="grid-cols-2 ">
          <img src={Tornillo} alt="Tornillo" className="" />
          <h1>Tornillos</h1>
        </div>
        <div>
          <img src={Screw} alt="Screw" className="" />
          <h1>Chilillos</h1>
        </div>
        <div>
          <h1>Abrazaderas para muelle</h1>
        </div>
        <div>
          <h1>Bandas</h1>
        </div>
        <div>
          <h1>Cadenas</h1>
        </div>
        <div>
          <h1>Chumaceras</h1>
        </div>
        <div>
          <h1>Rodajas</h1>
        </div>
        <div>
          <h1>Poleas</h1>
        </div>
        <div>
          <h1>Resortes</h1>
        </div>
        <div>
          <h1>Roscas</h1>
        </div>
        <div>
          <h1>Herramientas</h1>
        </div>
        <div>
          <h1>Otros</h1>
        </div>
      </div>
      <div className="justify-center ">
        <p className="md:text-2xl text-md">
          Para mayor información de los productos descarga el catálogo{" "}
          <a
            className="underline underline-offset-3"
            href={Grupo_Escarox_Catálogo_2024}
            download="Grupo_Escarox_Catálogo_2024.pdf"
          >
            aquí
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Catalogo;
