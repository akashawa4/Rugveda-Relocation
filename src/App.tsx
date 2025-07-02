import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from './components/SEO';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ServiceHighlights from './components/ServiceHighlights';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Certifications from './components/Certifications';
import ServiceAreas from './components/ServiceAreas';
import ContactWidget from './components/ContactWidget';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Services from './pages/Services';
import GetAQuote from './pages/GetAQuote';
import AboutUs from './pages/AboutUs';
import Process from './pages/Process';
import Reviews from './pages/Reviews';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import Locations from './pages/Locations';

function HomePage() {
  return (
    <>
      <SEO 
        title="Rugveda Relocation - Professional Moving Services"
        description="Expert moving services for residential and commercial relocations. Licensed, insured, and trusted by thousands of families."
      />
      <main>
        <HeroSection />
        <ServiceHighlights />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Gallery />
        <Certifications />
        <ServiceAreas />
        <FinalCTA />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<GetAQuote />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/process" element={<Process />} />
          <Route path="/testimonials" element={<Reviews />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
        <Footer />
        <ContactWidget />
      </div>
    </Router>
  );
}

export default App;