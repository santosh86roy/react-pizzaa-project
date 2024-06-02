import React, { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import { pizza } from "./Exports";
import AOS from "aos";
import "aos/dist/aos.css";

const TopRated: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <section
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 h-fit flex flex-col justify-center items-center gap-14`}
    >
      <h1
        data-aos="zoom-in"
        className="text-black dark:text-white text-6xl font-bold text-center"
      >
        Top Rated Sale
      </h1>
      <div
        data-aos="slide-up"
        className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6"
      >
        {pizza.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 flex flex-col justify-center items-center gap-4 rounded-lg"
          >
            <img
              src={item.image}
              alt="Pizza"
              className="rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-center text-2xl font-bold dark:text-white">
              {item.title}
            </h1>
            <h1 className="text-primary font-bold text-3xl">{item.price}</h1>
            <p className="text-lg text-slate-800 dark:text-white text-center">
              {item.para}
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black">
              ORDER NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRated;
