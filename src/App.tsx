import React from "react";
import "./App.css";
// import { Banners } from "./components/Banners";
import { BestDeals } from "./components/BestDeals";
// import { ExtraMenu } from "./components/ExtraMenu";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
// import Hero from "./components/Hero"; // Correct import statement
import { OurMenu } from "./components/OurMenu";
import { TodayDeals } from "./components/TodayDeals";
import { DarkModeProvider } from "./DarkModeContext";
import TopRated from "./components/TopRated";
import { MainHero } from "./components/MainHero";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Header />
      <MainHero />
      {/* <Hero /> */}
      {/* <Banners /> */}
      <OurMenu />
      <BestDeals />
      <TopRated />
      <TodayDeals />
      {/* <ExtraMenu /> */}
      <Footer />
    </DarkModeProvider>
  );
};

export default App;
