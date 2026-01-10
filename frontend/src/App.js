import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import FAQs from "./pages/FAQs";
import Industries from "./pages/Industries";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              
              {/* Redirect old routes */}
              <Route path="/why-choose-us" element={<About />} />
              <Route path="/our-process" element={<About />} />
              <Route path="/technologies" element={<About />} />
              <Route path="/testimonials" element={<About />} />
              <Route path="/resources" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
