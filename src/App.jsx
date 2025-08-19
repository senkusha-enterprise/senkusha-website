import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import IndividualProduct from "./pages/IndividualProduct";
import IndividualService from "./pages/IndividualService";
import Testimonials from "./pages/Testimonials";
// import Testimonial2 from "./pages/Testimonial2";
import ComingSoon from "./pages/ComingSoon";
import Internship from "./pages/Internship";
import ResumeAnalyzerProductPage from './pages/ResumeAnalyzerProductPage';


function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/testimonial2" element={<Testimonial2 />} /> */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/product/:id" element={<IndividualProduct />} />
          <Route path="/service/:id" element={<IndividualService />} />
          <Route path="/resume-analyzer" element={<ResumeAnalyzerProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
