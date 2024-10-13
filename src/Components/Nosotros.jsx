import React from "react";

const Nosotros = () => {
  return (
    <div className="font-body w-full py-20 px-4 bg-gray-50 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-lg flex flex-col p-6 my-4 rounded-xl bg-white hover:scale-105 hover:shadow-xl transition-transform ease-in-out duration-300">
          <h2 className="text-3xl font-bold text-center py-4 text-gray-800">
            Misión
          </h2>
          <div className="text-justify font-medium text-gray-700 leading-relaxed">
            <p className="py-4 px-6">
              Satisfacer las necesidades de nuestros clientes en todos sus
              niveles de trabajo, garantizando el mejor servicio, influyendo de
              manera positiva en la industria y el progreso de nuestra
              comunidad.
            </p>
          </div>
        </div>
        <div className="w-full shadow-lg flex flex-col p-6 my-4 rounded-xl bg-white hover:scale-105 hover:shadow-xl transition-transform ease-in-out duration-300">
          <h2 className="text-3xl font-bold text-center py-4 text-gray-800">
            Valores
          </h2>
          <div className="text-justify font-medium text-gray-700 leading-relaxed">
            <p className="py-4 px-6">
              <span className="font-semibold">COLABORACIÓN:</span> Ofrecer al
              cliente una solución a su necesidad o una alternativa en atención
              a su preferencia.
              <br />
              <span className="font-semibold">UNIDAD:</span> Se trabaja en
              equipo porque creemos en la complacencia al cliente.
              <br />
              <span className="font-semibold">INTEGRIDAD:</span> Actuamos con
              honestidad, integridad y respeto hacia todas las personas y
              organizaciones con las que interactuamos.
              <br />
              <span className="font-semibold">CONFIANZA:</span> Generar en el
              cliente un respaldo para su negocio.
            </p>
          </div>
        </div>
        <div className="w-full shadow-lg flex flex-col p-6 my-4 rounded-xl bg-white hover:scale-105 hover:shadow-xl transition-transform ease-in-out duration-300">
          <h2 className="text-3xl font-bold text-center py-4 text-gray-800">
            Visión
          </h2>
          <div className="text-justify font-medium text-gray-700 leading-relaxed">
            <p className="py-4 px-6">
              Ser una empresa con productos clave y servicio confiable para sus
              consumidores, así mismo, crecer a nivel regional con productos
              competitivos. Grupo Escarox busca ser:
            </p>
            <ul className="list-disc list-inside text-left mt-4">
              <li>Proveedor de un servicio preferido de sus clientes.</li>
              <li>Una empresa innovadora, que mira hacia el futuro.</li>
              <li>Una empresa financieramente sólida.</li>
              <li>Un lugar extraordinario para trabajar.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
