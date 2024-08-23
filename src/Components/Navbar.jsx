import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from "../Assets/logoLimex2.png";
import { navItems } from "../constants";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex mx-auto sticky top-0 z-50 py-3 bg-white text-black w-full">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="w-auto h-20 mr-2 mx-auto" />
            <span className="text-xl tracking-tight font-bold">
              {" "}
              Grupo Escarox
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end transform translate-x-0 ease-in-out duration-500">
            <button onClick={toggleNavbar}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-3 justify-center items-center flex"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
