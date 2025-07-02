import React, { useRef, useEffect, useState } from 'react';
import { Phone, Shield, Award, CheckCircle, Truck } from 'lucide-react';
import QuoteForm from './QuoteForm';

// Intersection Observer hook
function useInView(options = { threshold: 0.1 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, inView];
}

const HeroSection = () => {
  const [contentRef, contentInView] = useInView();
  return (
    <section className="relative min-h-[900px] bg-cover bg-center flex items-center overflow-hidden" id="home">
      {/* Professional Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
      </div>

      {/* Hero Content */}
      <div ref={contentRef} className={`container mx-auto px-4 md:px-6 z-10 py-20 transition-opacity duration-700 ${contentInView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Professional</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Relocation
                </span>
                <br />
                <span className="text-white">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Reliable, secure, and efficient moving solutions for residential and commercial clients across India.
              </p>
            </div>
            {/* Professional Trust Signals */}
            <div className="flex flex-wrap gap-4">
              <div className="group bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">Licensed & Insured</span>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">10+ Years Experience</span>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">ISO Certified</span>
                </div>
              </div>
            </div>
            {/* CTA Buttons - Mobile Only */}
            <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
              <a 
                href="/quote" 
                className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-white font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:+919405699393" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 rounded-lg text-white font-semibold flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>Call Now</span>
              </a>
            </div>
            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">10,000+</div>
                <div className="text-sm text-gray-300">Successful Moves</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm text-gray-300">Cities Served</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-gray-300">Customer Support</div>
              </div>
            </div>
          </div>
          {/* Right Column - Professional Quote Form */}
          <div className="lg:block" id="quote-form">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border hover:shadow-3xl transition-all duration-500">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Get Your Free Quote</h2>
                <p className="text-blue-100">Professional moving estimate in minutes</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;