import React from 'react';
import { ArrowRight, Phone, Shield, Award, CheckCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make Your Move?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let our experienced team handle all the details and make your relocation smooth and stress-free.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span>Professional Service</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/quote" 
              className="bg-white text-blue-600 hover:text-blue-800 px-8 py-4 rounded-lg font-semibold flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[200px] justify-center"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="tel:+919405699393" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-white/40 px-8 py-4 rounded-lg font-semibold transition-all duration-300 min-w-[200px] text-center"
            >
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call +91 94056 99393
              </div>
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-blue-100 text-lg">Trusted by over 10,000 families and businesses across India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;