import React from 'react';
import { CheckCircle, Clock, DollarSign, UserCheck, Headphones, Shield } from 'lucide-react';

interface ReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Reason = ({ icon, title, description }: ReasonProps) => {
  return (
    <div className="group flex items-start space-x-4 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fully Licensed & Insured",
      description: "We maintain all required licenses and comprehensive insurance for your complete peace of mind."
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Trained Professional Staff",
      description: "Our movers undergo rigorous training in proper handling, packing techniques, and customer service."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Transparent Pricing",
      description: "Upfront estimates with no hidden fees or surprises. What we quote is what you pay."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Punctual & Reliable",
      description: "We respect your time and stick to agreed-upon schedules with consistent communication."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Customer Support",
      description: "Our team is available to answer your questions and address concerns throughout your move."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <img 
                src="https://i.pinimg.com/736x/b4/06/b4/b406b4edce1eea62d1652e60ee93bcc2.jpg"
                alt="Professional movers carefully packing items" 
                className="rounded-xl shadow-xl w-full h-auto object-cover group-hover:shadow-2xl transition-shadow duration-300"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Professional Services?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We've helped thousands of families and businesses move with confidence. Our focus is on providing a stress-free experience through professional excellence.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <Reason 
                  key={index}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                />
              ))}
            </div>
            
            <a 
              href="/quote" 
              className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;