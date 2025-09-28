import { useState } from "react";

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contacts } from "./components/sections/Contacts";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
