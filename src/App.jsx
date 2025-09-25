import { useState } from "react";

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contacts } from "./components/sections/Contacts";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
