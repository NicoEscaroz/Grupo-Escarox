import React from "react";
import logo from "../Assets/logoLimex2.png";

const Historia = () => {
  return (
    <div
      id="Nosotros"
      className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mx-auto p-4 max-w-6xl"
    >
      <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4">
        <img
          src={logo}
          alt="logo"
          className="w-full h-64 md:h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 font-body">
        <h1 className="text-4xl font-bold text-center md:text-left">
          Historia
        </h1>
        <p className="mb-4 mt-4">
          Empresa familiar que nace en 1985 con la idea de su fundador, Don Luis
          Alberto Escaroz Ortiz en dar servicio especializado a la comunidad en
          tornillería y bandas.
        </p>
        <p className="mb-4">
          Con el tiempo surgen necesidades locales diferentes a las establecidas
          y se agregan productos como rodamientos, resortes, materiales para
          servicio terrestre pesado como abrazaderas para muelle y birlos sin
          descuidar su enfoque, a la par, crece el nivel de atención al público.
        </p>
        <p className="mb-4">
          El menudeo y medio mayoreo es el área cubierta con una lista amplia de
          productos:
        </p>

        <p className="mb-4">
          En Grupo Escarox contamos con un sistema de atención a clientes en
          mostrador y personalizado en horario amplio, además, entrega a
          domicilio para satisfacción de quienes nos prefieren.
        </p>
        <p className="mb-4">
          A través de los años, nos hemos distinguido por ser una empresa con
          influencia regional que ha llevado un ritmo de vanguardia y liderazgo
          en la comercialización de tornillería y accesorios automotrices e
          industriales, sembrando día a día la confianza en nuestros clientes
          con el deseo creciente de servirles.
        </p>
      </div>
    </div>
  );
};

export default Historia;
