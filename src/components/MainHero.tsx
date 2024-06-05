import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import ExampleCarouselImage from "../assets/Burger.jpg";
import BurgerCarouseImage from "../assets/Burger.jpg";
import PastaCarouselImage from "../assets/Pasta.jpg";
import { useDarkMode } from "../DarkModeContext";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const MainHero = () => {
  useDarkMode();
  return (
    <>
      <AutoplaySlider
        cssModule={{
          slider: "custom-slider",
          slide: "custom-slide",
        }}
        play={true}
        cancelOnInteraction={false}
        interval={3000}
      >
        <div>
          <img
            className="d-block w-100"
            src={ExampleCarouselImage}
            alt="First slide"
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src={BurgerCarouseImage}
            alt="Second slide"
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            src={PastaCarouselImage}
            alt="Third slide"
          />
        </div>
      </AutoplaySlider>
    </>
  );
};
