import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-4 text-black">
      <div className="lg:col-span-1 ">
        <h6 className="font-medium font-body text-gray-400">Horario</h6>
        <ul className="font-body">
          <li className="py-2 text-sm">Lunes: 8:00 - 18:00</li>
          <li className="py-2 text-sm">Martes: 8:00 - 18:00</li>
          <li className="py-2 text-sm">Miércoles: 8:00 - 18:00</li>
          <li className="py-2 text-sm">Jueves: 8:00 - 18:00</li>
          <li className="py-2 text-sm">Viernes: 8:00 - 18:00</li>
          <li className="py-2 text-sm">Sábado: 8:00 - 14:00</li>
          <li className="py-2 text-sm">Domingo: Cerrado</li>
        </ul>
      </div>
      <div className="lg:col-span-2 col-span-1 flex">
        <iframe
          className="w-full h-96"
          title="GrupoEscaroxMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.3590914592023!2d-116.60730772437445!3d31.869651274056054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d86d11c0001%3A0x3da2049370ab3636!2sGRUPO%20ESCAROX%2C%20S%20DE%20RL%20DE%20CV!5e0!3m2!1ses!2smx!4v1699559275273!5m2!1ses!2smx"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-10 col-span-1 lg:col-span-3">
        <h1 className="w-full text-2xl font-bold text-black font-body">
          Grupo Escarox
        </h1>
        <p className="py-4">
          Contáctanos para más información sobre nuestros productos y servicios
          en Whatsapp (646) 185 44 10
        </p>
        <div className="cursor-pointer flex md:w-[100%] my-6">
          <FaFacebookSquare
            className="hover:scale-125 mr-4"
            onClick={() =>
              window.open(
                "https://www.facebook.com/escarox/?locale=es_LA",
                "_blank"
              )
            }
            size={30}
          />
          <FaInstagram
            className="hover:scale-125 mr-4"
            onClick={() =>
              window.open(
                "https://www.instagram.com/escarox/?hl=es-la",
                "_blank"
              )
            }
            size={30}
          />
          <FaWhatsappSquare size={30} className="hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
