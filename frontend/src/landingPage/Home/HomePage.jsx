import React from "react";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Education from "./Education";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
