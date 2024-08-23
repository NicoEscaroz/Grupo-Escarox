import React from "react";
import Typed from "react-typed";

const GrupoEscarox = ({ Inicio }) => {
  return (
    <div id="Inicio" ref={Inicio} className="text-black font-body">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-2">DESDE 1991</p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Servicio para su empresa
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
            Contamos con diferentes tipos de productos como
            <Typed
              className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-2 pl-2"
              strings={["tornillos.", "bandas.", "resortes.", "abrazaderas."]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrupoEscarox;
