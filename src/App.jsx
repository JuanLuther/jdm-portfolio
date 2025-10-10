import { useState } from "react";

import { Header } from "./components/sections/Header";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contacts } from "./components/sections/Contacts";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { LoadingScreen } from "./components/common/loading/LoadingScreen";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BlogHome from "./components/sections/Blogs/BlogHome";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence>
      {isLoading ? (
        <LoadingScreen key="loading" onLoaded={() => setIsLoading(false)} />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<BlogHome />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </AnimatePresence>
  );
}

export default App;
