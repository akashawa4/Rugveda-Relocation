import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
        throttleTimeout = null;
      }, 100); // 100ms throttle
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className={`w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-xl'}`}>
              <Truck className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Rugveda Relocation
              </span>
              <div className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                Professional Moving Services
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { to: '/about', label: 'About' },
              { to: '/services', label: 'Services' },
              { to: '/process', label: 'Process' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/testimonials', label: 'Reviews' },
              { to: '/locations', label: 'Coverage' },
              { to: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            <a 
              href="tel:+919405699393" 
              className={`flex items-center font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 94056 99393</span>
            </a>
            
            <a 
              href="/quote" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Free Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="bg-white shadow-xl">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {[
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/process', label: 'Process' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/testimonials', label: 'Reviews' },
                { to: '/locations', label: 'Coverage' },
                { to: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium"
                >
                  {item.label}
                </Link>
              ))}
              
              <a 
                href="tel:+919405699393" 
                className="flex items-center text-blue-600 font-semibold py-2"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 94056 99393</span>
              </a>
              
              <a 
                href="/quote" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-semibold transition-colors"
              >
                Get Free Quote
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;