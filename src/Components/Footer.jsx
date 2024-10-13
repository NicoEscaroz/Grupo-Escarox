import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Contacto" className="max-w-[1240px] mx-auto py-16 px-4 text-black">
      <div className="mb-8">
        <iframe
          className="w-full h-96 border-solid border-2 border-gray-600 rounded-lg shadow-sm bg-gray-50"
          title="GrupoEscaroxMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.3590914592023!2d-116.60730772437445!3d31.869651274056054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d86d11c0001%3A0x3da2049370ab3636!2sGRUPO%20ESCAROX%2C%20S%20DE%20RL%20DE%20CV!5e0!3m2!1ses!2smx!4v1699559275273!5m2!1ses!2smx"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 font-body text-xl">
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4">Síguenos en:</h2>
          <div className="flex items-center space-x-4 place-content-center">
            <FaFacebookSquare
              className="hover:scale-125 transition-transform cursor-pointer"
              size={30}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/escarox/?locale=es_LA",
                  "_blank"
                )
              }
            />
            <FaInstagram
              className="hover:scale-125 transition-transform cursor-pointer"
              size={30}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/escarox/?hl=es-la",
                  "_blank"
                )
              }
            />
            <FaWhatsappSquare
              className="hover:scale-125 transition-transform cursor-pointer"
              size={30}
              onClick={() => window.open("https://wa.me/526461854410")}
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className=" font-bold mb-4">Horario:</h2>
          <p className="font-semibold">Lunes a Viernes: </p>
          <p>8 a.m. - 6 p.m.</p>
          <p className="font-semibold">Sábados:</p>
          <p>8 a.m. - 2 p.m.</p>
        </div>
        <div className="text-center">
          <h2 className=" font-bold mb-4">Dirección:</h2>
          <p>Calle once #900-C 22830</p>
          <p>Ensenada, Baja California</p>
          <br />
          <p>grupoescarox@hotmail.com</p>
          <p>(646) 185 44 10</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
