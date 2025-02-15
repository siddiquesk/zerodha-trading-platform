import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./landingPage/Home/HomePage";
import Signup from "./landingPage/Sighnup/Signup";
import AboutPage from "./landingPage/About/AboutPage";
import ProductsPage from "./landingPage/Products/ProductsPage";
import PricingPage from "./landingPage/Pricing/PricingPage";
import SupportPage from "./landingPage/Supports/SupportPage";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import NotFound from "./landingPage/NotFound";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/supports" element={<SupportPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
