import React from "react";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <Card />
      <About />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
