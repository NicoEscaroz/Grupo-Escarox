import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Assets/logoLimex2.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const NavLink = ({ item }) => {
    const isHomePage = location.pathname === "/";

    if (item.to === "catalogo") {
      return (
        <RouterLink
          to="/catalogo"
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </RouterLink>
      );
    }

    if (isHomePage) {
      return (
        <ScrollLink
          to={item.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to={`/#${item.to}`}
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </RouterLink>
      );
    }
  };

  return (
    <nav className="flex mx-auto sticky top-0 z-[9999] py-3 bg-white text-black w-full">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center z-[9999]">
          <div className="flex items-center flex-shrink-0">
            <RouterLink to="/">
              <img src={logo} alt="logo" className="w-auto h-20 mr-2 mx-auto" />
            </RouterLink>
            <span className="text-xl tracking-tight font-bold">
              Grupo Escarox
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink item={item} />
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
          <div className="lg:hidden fixed left-0 right-0 bg-white w-full p-12 flex flex-col justify-center items-center transition-all duration-500 ease-in-out delay-150">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="rounded-lg py-4 px-6 justify-center hover:bg-gray-100 items-center flex hover:scale-125 duration-300 ease-in-out"
                >
                  <NavLink item={item} />
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
