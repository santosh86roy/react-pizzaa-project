import React from "react";
import "./App.css";
import { BestDeals } from "./components/BestDeals";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { OurMenu } from "./components/OurMenu";
import { TodayDeals } from "./components/TodayDeals";
import { DarkModeProvider } from "./DarkModeContext";
import TopRated from "./components/TopRated";
import { MainHero } from "./components/MainHero";
import AboutUs from "./components/AboutUs"; // Corrected import statement
import ContactUs from "./components/ContactUs";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Header />
      <MainHero />
      <AboutUs /> {/* Ensure this is correctly placed */}
      <ContactUs />
      <OurMenu />
      <BestDeals />
      <TopRated />
      <TodayDeals />
      <Footer />
    </DarkModeProvider>
  );
};

export default App;
