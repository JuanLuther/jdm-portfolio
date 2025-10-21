import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/common/loading/LoadingScreen";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import Blogs from "./components/sections/Blogs";
import { Contacts } from "./components/sections/Contacts";
import { Footer } from "./components/sections/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onLoaded={() => setIsLoading(false)} />
        ) : (
          <>
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contacts />} />
            </Routes>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
