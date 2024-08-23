import React from "react";

const Nosotros = ({ Nosotros }) => {
  return (
    <div
      id="Nosotros"
      ref={Nosotros}
      className="font-body w-full py-[10rem] px-4 bg-white"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-2">Misión</h2>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-6">
              Satisfacer las necesidades de nuestros clientes en todos sus
              niveles de trabajo, garantizando el mejor servicio, influyendo de
              manera positiva en la industria y el progreso de nuestra
              comunidad.
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-2">Valores</h2>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-6">
              COLABORACIÓN: Ofrecer al cliente una solución a su necesidad o una
              alternativa en atención a su preferencia.
              <p>
                UNIDAD: Se trabaja en equipo porque creemos en la complacencia
                al cliente.
              </p>
              <p>
                INTEGRIDAD: Actuamos con honestidad, integridad y respeto hacia
                todas las personas y organizaciones con las que interactuamos.
              </p>
              <p>
                CONFIANZA: Generar en el cliente un respaldo para su negocio.
              </p>
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-2">Visión</h2>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 mt-8">
              Ser una empresa con productos clave y servicio confiable para sus
              consumidores, así mismo, crecer a nivel regional con productos
              competitivos. Grupo Escarox busca ser:
              <ul>
                <li>Proveedor de un servicio preferido de sus clientes. </li>
                <li>Una empresa innovadora, que mira hacia el futuro.</li>
                <li> Una empresa financieramente solida.</li>
                <li> Un lugar extraordinario para trabajar.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
