import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white"> Rugveda Relocation</span>
            </div>
            <p className="mb-4">
              Professional moving services with a personal touch. Licensed, insured, and committed to making your move stress-free.
            </p>
            <p className="text-sm text-gray-400">
              DOT #123456 | MC #654321<br />
              Licensed & Insured
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/process" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="/testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="/locations" className="hover:text-blue-400 transition-colors">Locations</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  <a href="tel:+919405699393" className="hover:text-blue-400 transition-colors">+91 94056 99393</a><br />
                  <span className="text-sm text-gray-400">Mon-Fri: 8am-7pm | Sat: 9am-5pm</span>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@rugvedarelocation.com" className="hover:text-blue-400 transition-colors">contact@rugvedarelocation.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                   Akkai Complex, 591/kh Sh No 02,<br />
                   1st Ln, E Ward, Shahupuri,<br />
                  Kolhapur, Maharashtra 416000
                </span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()}  Rugveda Relocation Inc. All rights reserved.
          </div>
          <div className="text-sm md:text-right space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
        
        {/* Schema.org structured data would be added here in production */}
      </div>
    </footer>
  );
};

export default Footer;