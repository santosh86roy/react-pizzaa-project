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
        <div className="-mt-72 text-white absolute z-50 md:px-32 px-11 w-full">
          <div className="flex text-primary text-3xl mt-4">
            <span className="font-bold mr-1">Pizzaaa</span>
            <span>Cafe</span>
          </div>
          <div className="w-full flex justify-between text-center">
            <div className="text-left">
              <div className="flex flex-col mt-4">
                <span>Call to Order</span>
                <span className="font-bold">022 2528 3458</span>
              </div>
              <div className="flex flex-col mt-4">
                <span>Email</span>
                <span className="font-bold">pizzaaaCafe@email.com</span>
              </div>
              <div className="flex flex-col mt-4">
                <span>Address</span>
                <span className="font-bold">Chembur, Mumbai - 400043</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col text-left">
                <span className="font-bold">Useful Links</span>
                <span>Home</span>
                <span>Menu</span>
                <span>About</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col text-left">
                <span className="font-bold">Opening Hours</span>
                <span>Mon - Fri : 10am - 11pm</span>
              </div>
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
          className="flex items-center p-4 rounded-full bg-primary fixed lg:bottom-6 left-6 bottom-6"
        >
          {darkMode ? (
            <FaMoon size={30} className="text-black" />
          ) : (
            <FaSun size={30} className="text-black" />
          )}
        </button>
      </div>

      {/* scroll to top button */}
      <div
        id="icon-box"
        className="bg-primary text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="home" spy={true} offset={-100} smooth={true}>
          <FaArrowUp />
        </Link>
      </div>
    </>
  );
};
