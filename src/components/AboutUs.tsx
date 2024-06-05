import React, { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs: React.FC = () => {
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
      className={`py-12 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container-fluid mx-auto bg-white mt-5 h-full px-0 py-20">
        <div className="flex flex-wrap ">
          {/* Left Column */}
          <div
            className="w-full lg:w-[65%] px-4 mb-8 lg:mb-0"
            data-aos="fade-right"
          >
            <div className="dark:bg-gray-800 p-6 rounded-custom-40">
              <div className="flex items-center mb-6">
                <h5 className="text-xl font-semibold text-primary">
                  Our Story
                </h5>
                <div
                  className="flex h-px bg-primary mx-4"
                  style={{ width: "90px" }}
                ></div>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                The Story About Pizzon
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="md:flex flex-col md:flex-row mt-14">
                <div className="flex flex-col flex-1">
                  <div className="flex items-center mb-6">
                    <h4 className="text-2xl font-semibold">Our Family Name</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center mb-6">
                    <h4 className="text-2xl font-semibold">Our Journey</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="md:flex flex-col md:flex-row pt-14">
                <div className="flex flex-col flex-1">
                  <div className="mt-0 mr-7">
                    <img
                      className="rounded-custom-40 shadow-lg mx-auto inline-block align-middle"
                      src="https://themes.templatescoder.com/pizzon/wp/demo-02/wp-content/uploads/sites/2/2023/11/abt-img-1.jpg"
                      alt="Our Story"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1 md:mt-0 mt-5">
                  <div className="flex items-center mb-6">
                    <h4 className="text-2xl font-semibold">Food and Fun</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <img
                    className="mr-auto"
                    src="https://themes.templatescoder.com/pizzon/wp/demo-02/wp-content/uploads/sites/2/2023/11/abt-logo.png"
                    alt="Pizzon Logo"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="w-full lg:w-[35%] px-4 hidden lg:block"
            data-aos="fade-left"
          >
            <img
              className="rounded-custom-40 shadow-lg h-[100%]"
              src="https://themes.templatescoder.com/pizzon/wp/demo-02/wp-content/uploads/sites/2/2023/11/abt-img-2.jpg"
              alt="Pizzon Story"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
