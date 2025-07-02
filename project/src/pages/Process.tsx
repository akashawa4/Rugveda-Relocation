import React from 'react';
import { 
  ArrowRight, Phone, Calendar, PackageCheck, Truck, ClipboardCheck,
  Shield, Clock, Users, CheckCircle, Star, HomeIcon, ArrowDown
} from 'lucide-react';

const ProcessStep = ({ number, icon, title, description }: {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="relative flex flex-col items-center text-center group">
    <div className="relative">
      <div className="w-24 h-24 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl transform rotate-45 group-hover:rotate-0">
        <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white z-20">
        {number}
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Process = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="h-12 w-12" />,
      title: "Request a Quote",
      description: "Fill out our simple form or call us directly to receive a personalized moving estimate."
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Schedule Your Move",
      description: "Choose a convenient date and time for your move. We'll confirm all details with you."
    },
    {
      icon: <PackageCheck className="h-12 w-12" />,
      title: "Packing Services",
      description: "Our team can professionally pack your belongings or provide guidance if you prefer to pack yourself."
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Loading & Transportation",
      description: "We'll carefully load your items into our well-maintained trucks for safe transportation."
    },
    {
      icon: <HomeIcon className="h-12 w-12" />,
      title: "Delivery & Setup",
      description: "We unload, place items in designated rooms, and even help with basic furniture assembly."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Licensed & Insured",
      description: "Full coverage for your peace of mind"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "On-Time Service",
      description: "We respect your schedule"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Trained and experienced movers"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "5-Star Service",
      description: "Consistently rated 5 stars"
    }
  ];

  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/90"></div>
        </div>
        
        <div className="container relative mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our Moving Process Works</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            We've streamlined every step of your move to ensure a smooth, stress-free experience from start to finish.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-yellow-400">★★★★★</span> 4.9/5 (500+ Reviews)
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Simple 5-Step Process
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Professional Team
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Simple 5-Step Moving Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've made moving easy with our straightforward process. Here's what you can expect when you choose us.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={index + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
              <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-blue-200">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 w-full h-full transform scale-x-0 animate-expandLine"></div>
              </div>
            </div>

            <div className="lg:hidden space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <ProcessStep
                    number={index + 1}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                  />
                  {index < steps.length - 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
                      <ArrowDown className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Our Process Works
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our proven process is backed by years of experience and a commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 group hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 rounded-lg bg-white/20 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Move?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience our efficient moving process firsthand. Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/quote" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="tel:+18001234567" 
                className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-lg font-medium transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;