import React from 'react';
import { Truck, Building, PackageCheck, WarehouseIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 hover:border-blue-200">
      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <a href="/quote" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group-hover:translate-x-1">
        Get Quote
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const ServiceHighlights = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Local Moving",
      description: "Professional moving services within your city with efficient, careful handling of all your belongings."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Long Distance Moving",
      description: "Safe transportation of your possessions across state lines with tracking and dedicated support."
    },
    {
      icon: <PackageCheck className="h-8 w-8" />,
      title: "Packing & Unpacking",
      description: "Expert packing services using premium materials to ensure your items arrive safely and undamaged."
    },
    {
      icon: <WarehouseIcon className="h-8 w-8" />,
      title: "Storage Solutions",
      description: "Secure, climate-controlled storage facilities for short or long-term needs during your transition."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Comprehensive moving solutions tailored to your specific needs with a focus on safety, efficiency, and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/services" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;