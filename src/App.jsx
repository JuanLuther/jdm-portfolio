import { useState, useEffect } from "react";

import { Header } from "./components/sections/Header";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contacts } from "./components/sections/Contacts";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { LoadingScreen } from "./components/common/LoadingScreen";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    // 💡 Example: Simulate a 2-second loading time for data
    const timer = setTimeout(() => {
      setIsLoading(false); // Set to false to show the main content
    }, 2000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this runs only once after the initial render
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
