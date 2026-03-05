import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Monthly from "./pages/Monthly";
import CommercialServices from "./pages/CommercialServices";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/monthly" element={<Monthly />} />
        <Route path="/commercial" element={<CommercialServices />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
