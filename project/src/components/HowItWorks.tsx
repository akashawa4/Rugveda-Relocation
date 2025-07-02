import React from 'react';
import { ClipboardCheck, CalendarCheck, PackageOpen, Truck, HomeIcon, ArrowRight } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step = ({ icon, number, title, description, isLast }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center relative group">
      <div className="relative">
        <div className="absolute inset-0 w-24 h-24 rounded-2xl z-0 blur-xl opacity-60 bg-gradient-to-tr from-blue-400 via-blue-600 to-cyan-400 animate-pulse-slow group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" />
        <div className="w-24 h-24 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-blue-700 transform rotate-45 group-hover:rotate-0">
          <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-lg border-2 border-white z-20 animate-bounce-slow">
          {number}
        </div>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-0.5">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 animate-gradient-x"></div>
            <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 text-blue-400 w-6 h-6 animate-bounce-x" />
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="h-12 w-12" />,
      number: 1,
      title: "Request a Quote",
      description: "Fill out our simple form or call us directly to receive a personalized moving estimate."
    },
    {
      icon: <CalendarCheck className="h-12 w-12" />,
      number: 2,
      title: "Schedule Your Move",
      description: "Choose a convenient date and time for your move. We'll confirm all details with you."
    },
    {
      icon: <PackageOpen className="h-12 w-12" />,
      number: 3,
      title: "Packing Services",
      description: "Our team can professionally pack your belongings or provide guidance if you prefer to pack yourself."
    },
    {
      icon: <Truck className="h-12 w-12" />,
      number: 4,
      title: "Loading & Transportation",
      description: "We'll carefully load your items into our well-maintained trucks for safe transportation."
    },
    {
      icon: <HomeIcon className="h-12 w-12" />,
      number: 5,
      title: "Delivery & Setup",
      description: "We unload, place items in designated rooms, and even help with basic furniture assembly."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Our Moving Process Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            We've streamlined our process to make your move as smooth and stress-free as possible. 
            Here's what to expect when you work with us:
          </p>
        </div>
        
        {/* Steps - Desktop */}
        <div className="hidden lg:block relative mb-16">
          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <Step 
                key={index}
                icon={step.icon}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
        
        {/* Steps - Mobile & Tablet */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6 group">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md border-2 border-white z-20">
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute top-full left-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-200">
                    <ArrowRight className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full rotate-90 text-blue-400 w-6 h-6" />
                  </div>
                )}
              </div>
              <div className="flex-grow pt-2">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="/quote" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl group animate-pulse-slow"
          >
            <span>Start Your Moving Process</span>
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;