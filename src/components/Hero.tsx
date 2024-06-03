import React, { useEffect } from "react";
import BurgerCarouseImage from "../assets/banner4-uCkEY5Ar.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section
        id="hero"
        className=" w-full lg:px-20 px-10 lg:py-20 py-10 h-[600px] bg-cover bg-center flex flex-col justify-center items-start gap-8"
        style={{ backgroundImage: `url(${BurgerCarouseImage})` }}
      >
        <h1 data-aos="zoom-in" className="text-6xl text-white font-bold">
          Life is a combination <br /> of Pizzaaa & Magic{" "}
        </h1>
        <p data-aos="zoom-in" className="text-xl text-white font-lg">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quia
          alias soluta modi deleniti accusantium aspernatur sapiente. Obcaecati,
          praesentium maiores!
        </p>
        <button
          data-aos="flip-up"
          className="bg-primary text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black"
        >
          ORDER NOW
        </button>
      </section>

      {/* <div data-aos="fade-up">Hero</div>
      <h1 data-aos="fade-up">Hello</h1>
      <img src={BurgerCarouseImage} alt="Burger" data-aos="fade-up" />
      <img src={PastaCarouselImage} alt="Pasta" data-aos="fade-up" /> */}
    </>
  );
};

export default Hero;
