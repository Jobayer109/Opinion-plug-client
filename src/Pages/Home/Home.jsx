import React from "react";
import About from "./About";
import Banner from "./Banner";
import FAQ from "./FAQ";
import HomeServices from "./HomeServices";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Banner></Banner>
      <HomeServices></HomeServices>
      <About></About>
      <FAQ></FAQ>
     
    </div>
  );
};

export default Home;
