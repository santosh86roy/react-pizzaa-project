import React, { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs: React.FC = () => {
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
    <>
      <section
        className={`pt-12 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="container-fluid mx-auto bg-white mt-5 h-full px-0 py-20">
          <div className="flex flex-wrap ">
            {/* Left Column */}
            <div
              className="w-full lg:w-[50%] px-4 mb-8 lg:mb-0 min-h-full flex items-center"
              data-aos="fade-right"
            >
              <div className="dark:bg-gray-800 p-6 rounded-custom-40">
                <div className="flex items-center mb-6">
                  <h5 className="text-xl font-semibold text-primary">
                    Consultation
                  </h5>
                  <div
                    className="flex h-px bg-primary mx-4"
                    style={{ width: "90px" }}
                  ></div>
                </div>

                <h2 className="text-5xl font-bold mb-4">Send Us Message</h2>

                <form className="py-5">
                  <div className="nameAndEmail flex md:flex-row flex-col gap-4 mb-4 mt-4">
                    <div className="mb-4 w-72">
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-4 w-72">
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="phoneAndWebsite flex md:flex-row flex-col gap-4 mb-5 mt-5">
                    <div className="mb-4 w-72">
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="mb-4 w-72">
                      <input
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="website"
                        type="email"
                        placeholder="Website"
                      />
                    </div>
                  </div>

                  <div className="mb-5 mt-5">
                    <textarea
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      rows={4}
                      placeholder="Write Message"
                    />
                  </div>
                  <div className="mb-6 mt-4 py-5">
                    <button
                      className="bg-primary hover:bg-primary-dark text-white font-bold py-5 px-10 focus:outline-none focus:shadow-outline rounded-custom-40 uppercase"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="w-full lg:w-[50%] px-4 mb-8 lg:mb-0 min-h-full flex items-center"
              data-aos="fade-left"
            >
              <img
                className="rounded-custom-40 shadow-lg h-[100%]"
                src="https://themes.templatescoder.com/pizzon/wp/demo-02/wp-content/uploads/sites/2/2023/11/cons-img.jpg"
                alt="Pizzon Story"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-96">
        {/* <iframe
          className="w-full h-full border-0"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=New+York,NY`}
          allowFullScreen
        ></iframe> */}
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.5456643842467!2d72.8045946739624!3d19.4751459393232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9f67e74dd1b%3A0x213aea624ffe8bdd!2sGlobal%20City%20Virar!5e0!3m2!1sen!2sin!4v1717631341305!5m2!1sen!2sin`}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section>
        <div className="container-fluid mx-auto bg-white h-full px-0 py-0">
          <div className="flex flex-wrap">
            <div className="px-9 w-full" data-aos="fade-up">
              <div className="md:flex mt-14 gap-4 w-full">
                <div className="flex flex-1 md:flex-row justify-between">
                  {/* Left side with icon */}
                  <div className="flex items-center md:mr-6">
                    <span className="material-icons text-6xl text-primary">
                      location_on
                    </span>
                  </div>

                  {/* Right side with content */}
                  <div className="md:flex-1">
                    <div className="flex items-baseline mb-6">
                      <h4 className="text-2xl font-semibold">Location</h4>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 mb-1 hover:text-primary">
                        155 Main Street, 2nd
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 hover:text-primary">
                        Floor New York City
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="flex flex-col flex-1">
                  <span className="material-icons text-6xl text-primary">
                    location_on
                  </span>
                  <div>
                    <div className="flex items-center mb-6">
                      <h4 className="text-2xl font-semibold">Location</h4>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 mb-1 hover:text-primary">
                        155 Main Street, 2nd
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 hover:text-primary">
                        Floor New York City
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="flex flex-col flex-1">
                  <span className="material-icons text-6xl text-primary">
                    email
                  </span>
                  <div className="flex items-center mb-6">
                    <h4 className="text-2xl font-semibold">Email Address</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1 hover:text-primary">
                    Support@gmail.com
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 hover:text-primary">
                    Contact@gmail.com
                  </p>
                </div> */}
                <div className="flex flex-1 md:flex-row justify-between">
                  {/* Left side with icon */}
                  <div className="flex items-center md:mr-6">
                    <span className="material-icons text-6xl text-primary">
                      email
                    </span>
                  </div>

                  {/* Right side with content */}
                  <div className="md:flex-1">
                    <div className="flex items-baseline mb-6">
                      <h4 className="text-2xl font-semibold">Email Address</h4>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 mb-1 hover:text-primary">
                        Support@gmail.com
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 hover:text-primary">
                        Contact@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col flex-1">
                  <span className="material-icons text-6xl text-primary">
                    phone
                  </span>
                  <div className="flex items-center mb-6">
                    <h4 className="text-2xl font-semibold">Phone Number</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1 hover:text-primary">
                    + 49 123 456 789
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 hover:text-primary">
                    + 49 123 456 789
                  </p>
                </div> */}
                <div className="flex flex-1 md:flex-row justify-between">
                  {/* Left side with icon */}
                  <div className="flex items-center md:mr-6">
                    <span className="material-icons text-6xl text-primary">
                      phone
                    </span>
                  </div>

                  {/* Right side with content */}
                  <div className="md:flex-1">
                    <div className="flex items-baseline mb-6">
                      <h4 className="text-2xl font-semibold">Phone Number</h4>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 mb-1 hover:text-primary">
                        + 49 123 456 789
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 hover:text-primary">
                        + 49 123 456 789
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
