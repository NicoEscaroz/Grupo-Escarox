import React from "react";
import catalogo from "../Assets/Grupo_Escarox_Catálogo_2024.pdf";
import logo from "../Assets/logoLimex2.png";
const Catalogo = () => {
  return (
    <div>
      <div
        id="Catalogo"
        className="flex flex-col font-body md:flex-row items-center md:items-start justify-center md:justify-between mx-auto p-4 max-w-6xl"
      >
        <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4">
          <img
            src={logo}
            alt="logo"
            className="w-full h-64 md:h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 font-body">
          <h1 className="text-3xl mb-4">Catálogo</h1>
          <ul className="list-disc list-inside mb-4">
            <li>
              Tornillería en general. Hexagonal Grado 2, 5 y 8. Allen. Acero
              inoxidable.
            </li>
            <li>Bandas. Automotrices, servicio pesado e industrial.</li>
            <li>Resortes. Extensión, compresión, acero inoxidable.</li>
            <li>Abrazaderas para muelle.</li>
            <li>Baleros, retenes y chumaceras.</li>
            <li>Sprockets (catarinas) y cadena de rodillos.</li>
            <li>Pegamentos industriales.</li>
            <li>Rodajas y ruedas.</li>
            <li>Abrasivos.</li>
            <li>
              Accesorios para la industria como brochas, pintura en spray,
              silicones, desarmadores, grasa.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex place-content-center">
        <p>
          Para más información descarga el catálogo{" "}
          <a
            href={catalogo}
            download="Grupo_Escarox_Catálogo_2024.pdf"
            className="underline text-bold hover:text-blue-800"
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
