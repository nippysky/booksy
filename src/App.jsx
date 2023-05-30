import React from "react";
import Hero from "./components/HomeComponents/Hero";
import Recommended from "./components/HomeComponents/Recommended";
import TurnOnLocationService from "./components/HomeComponents/TurnOnLocationService";
import GetInspired from "./components/HomeComponents/GetInspired";
import AppBiz from "./components/HomeComponents/AppBiz";
import SpecsContent from "./components/HomeComponents/SpecsContent";
import BlogRecommended from "./components/HomeComponents/BlogRecommended";
import Footer from "./components/Footer";
import FindSpecialist from "./components/HomeComponents/FindSpecialist";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Recommended />
      <TurnOnLocationService />
      <GetInspired />
      <AppBiz />
      <SpecsContent />
      <FindSpecialist />
      <BlogRecommended />
      <Footer />
    </React.Fragment>
  );
}

export default App;
