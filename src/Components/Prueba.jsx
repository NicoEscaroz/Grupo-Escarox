import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleNav = () => {
    if (window.innerWidth <= 768) {
      setNav(!nav);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold font-body text-[#000000]">
        Grupo Escarox
      </h1>
      <ul className={`hidden md:flex ${isVisible ? "block" : "hidden"}`}>
        <li className="p-4">Inicio</li>
        <li className="p-4">Nosotros</li>
        <li className="p-4">Catálogo</li>
        <li className="p-4">Contáctanos</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFF] transform translate-x-0 ease-in-out duration-500"
            : "fixed left-[-60%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FFFF] transform translate-x-full ease-in-out duration-500"
        }
      >
        <ul className="uppercase">
          <li className="p-4 border-b border-l border-gray-600">Inicio</li>
          <li className="p-4 border-b border-l border-gray-600">Nosotros</li>
          <li className="p-4 border-b border-l border-gray-600">Catálogo</li>
          <li className="p-4 border-b border-l border-gray-600">Contáctanos</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
