import React from "react";
import { HeroSection, Navbar, Footer, CardContainer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CardContainer />
    </div>
  );
};

export default App;
