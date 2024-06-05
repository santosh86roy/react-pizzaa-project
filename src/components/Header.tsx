import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Logo from "../assets/Logo.png";
// import Logo2 from "../assets/Logo2.jpg";
import { Link } from "react-scroll";
import { useDarkMode } from "../DarkModeContext";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Menu", path: "menu" },
    { link: "About", path: "about" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      <header
        className={`${
          darkMode ? "dark bg-gray-800 text-white" : "bg-white text-primary"
        } flex items-center justify-between w-full h-15 px-8 py-4 sticky top-0 z-50`}
      >
        <div>
          <span className="text-2xl flex items-center">
            <img src={Logo} alt="" className="w-12 h-12 mr-3" />
            {/* <img
              src={Logo2}
              alt=""
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            /> */}
            {/* <strong className="font-bold">Pizzaaa</strong> <span>Cafe</span> */}
          </span>
        </div>
        <div className="flex gap-x-8">
          <ul className="lg:flex justify-center items-center gap-10 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  className="uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-primary dark:hover:text-black hover:text-white"
                  to={path}
                  spy={true}
                  offset={-100}
                  smooth={true}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-6 lg:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  className="text-dark uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 dark:hover:text-black hover:text-white"
                  to={path}
                  spy={true}
                  offset={-100}
                  smooth={true}
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
