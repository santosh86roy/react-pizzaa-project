import { Link } from "react-scroll";
import { useDarkMode } from "../DarkModeContext";
import { FaArrowUp, FaMoon, FaSun } from "react-icons/fa";

export const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer className="relative text-black">
        <hr className="border border-primary mt-8 -rotate-3" />
        <div className="bg-primary -rotate-2 h-12"></div>
        <div className="bg-footer-image bg-cover bg-bottom absolute inset-0 h-72"></div>
        <div className="bg-black opacity-90 h-72 -mt-12"></div>
        <div className="-mt-72 text-white absolute z-50 md:px-32 px-5 w-full">
          <div className="flex text-primary text-3xl mt-4">
            <span className="font-bold mr-1">Pizzaaa</span>
            <span>Cafe</span>
          </div>
          <div className="w-full flex justify-between text-center">
            <div className="text-left w-1/2 md:w-fit">
              <div className="flex flex-col mt-4">
                <span className=" font-bold text-base">Call to Order</span>
                <span className="text-sm">022 2528 3458</span>
              </div>
              <div className="flex flex-col mt-4">
                <span className="font-bold text-base">Email</span>
                <span className="text-sm ">pizzaaaCafe@email.com</span>
              </div>
              <div className="flex flex-col mt-4">
                <span className="font-bold text-base">Address</span>
                <span className="text-sm">Chembur, Mumbai - 400043</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col text-left">
                <span className="font-bold text-base">Useful Links</span>
                <span className="text-sm">Home</span>
                <span className="text-sm">Menu</span>
                <span className="text-sm">About</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col text-left">
                <span className="font-bold text-base">Opening Hours</span>
                <span className="text-sm">Mon - Fri : 10am - 11pm</span>
              </div>
            </div>
            <div className="flex flex-col md:hidden text-left mt-5 ">
              <span className="font-bold text-base">Useful Links</span>
              <span className="text-sm">Home</span>
              <span className="text-sm">Menu</span>
              <span className="text-sm">About</span>
              <span className="font-bold mt-7 text-left text-base">
                Opening Hours
              </span>
              <span className="text-sm break-all">
                Mon - Fri <br /> 10am - 11pm
              </span>
            </div>
          </div>
        </div>
        <div className="bg-primary text-white w-full py-0.5 absolute z-50 flex items-center justify-center text-sm">
          2024 Pizzaaa Cafe
        </div>
      </footer>

      {/* dark mode toggle button */}
      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-2 rounded-full bg-primary fixed lg:bottom-6 left-6 bottom-6"
        >
          {darkMode ? (
            <FaMoon size={20} className="text-black" />
          ) : (
            <FaSun size={20} className="text-black" />
          )}
        </button>
      </div>

      {/* scroll to top button */}
      <div
        id="icon-box"
        className="bg-primary text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6 hidden md:block"
      >
        <Link to="home" spy={true} offset={-100} smooth={true}>
          <FaArrowUp />
        </Link>
      </div>
    </>
  );
};
