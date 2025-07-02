import React, { useState, useEffect } from 'react';
import { PhoneCall, ChevronUp } from 'lucide-react';

const ContactWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div 
        className={`fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Quick Action Buttons */}
        <div className="flex space-x-3">
          <a 
            href="tel:+919405699393" 
            className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Call us"
          >
            <PhoneCall className="h-6 w-6" />
          </a>
          
          <button 
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        </div>
        
        {/* Bottom Bar for Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 flex z-50">
          <a 
            href="tel:+919405699393" 
            className="flex-1 py-4 flex flex-col items-center justify-center text-green-600 hover:bg-green-50 transition-colors"
          >
            <PhoneCall className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Call</span>
          </a>
          
          <a 
            href="/quote" 
            className="flex-1 py-4 flex flex-col items-center justify-center text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-xs font-medium">Quote</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactWidget;