import React, { useState, useCallback, memo } from 'react';
import { 
  Truck, Home, Building2, PackageCheck, WarehouseIcon, Box,
  ShieldCheck, Users, DollarSign, Clock, Headphones,
  ChevronDown, ChevronUp, ArrowRight, Car, Package, Award, Filter
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const LazyImage = memo(({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <div 
      ref={ref}
      className="aspect-w-16 aspect-h-9 overflow-hidden bg-gray-100"
    >
      {inView && (
        <picture>
          <source
            type="image/webp"
            srcSet={`${src}?format=webp&w=400 400w, ${src}?format=webp&w=800 800w`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <img
            src={`${src}?w=800`}
            srcSet={`${src}?w=400 400w, ${src}?w=800 800w`}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`w-full h-64 object-cover transform transition-all duration-300 ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            } group-hover:scale-105`}
            onLoad={() => setIsLoaded(true)}
          />
        </picture>
      )}
      {!isLoaded && inView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

const ServiceCard = memo(({ icon, title, description, features, image }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group cursor-pointer
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] border border-transparent hover:border-blue-500
      `}
      style={{ contentVisibility: 'auto' }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-br from-blue-50 via-blue-100 to-transparent z-10" />
      <LazyImage src={image} alt={title} />
      <div className="p-8 relative z-20">
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
              <ShieldCheck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <a 
          href="/quote" 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group-hover:translate-x-2 transform transition-transform"
        >
          Get a Quote
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const FAQItem = memo(({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className={`mb-4 rounded-xl shadow-lg transition-all duration-300 bg-white ${isOpen ? 'border-l-4 border-blue-600 bg-blue-50' : ''}`}> 
      <button
        className="w-full flex justify-between items-center px-6 py-5 focus:outline-none group"
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-2">
            Q
          </span>
          <span className={`text-lg font-semibold text-left transition-colors duration-300 ${isOpen ? 'text-blue-800' : 'text-gray-800'}`}>{question}</span>
        </div>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}>
          <ArrowRight className="h-6 w-6" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 px-6 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0 pb-0'}`}
      >
        <p className="text-gray-700 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "House Relocation",
      description: "Safe and efficient house shifting services for local and long-distance moves.",
      image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
      features: [
        "Professional packing and unpacking",
        "Careful handling of all household items",
        "Door-to-door service"
      ]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Office Shifting",
      description: "Seamless office and corporate relocations with minimal business disruption.",
      image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
      features: [
        "IT equipment and furniture handling",
        "Systematic packing and setup",
        "Flexible scheduling"
      ]
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Bike Packing and Transport",
      description: "Secure packing and transportation of bikes to any destination.",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
      features: [
        "Specialized bike packing",
        "Safe loading and unloading",
        "Timely delivery"
      ]
    },
    {
      icon: <PackageCheck className="h-8 w-8" />,
      title: "Courier Services (National & International)",
      description: "Reliable courier solutions for documents and parcels, both within India and abroad.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
      features: [
        "Fast and secure delivery",
        "Tracking facility",
        "Doorstep pickup and drop"
      ]
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Car Transport",
      description: "Safe and insured car transportation services across India.",
      image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      features: [
        "Enclosed and open carriers",
        "Insurance coverage",
        "On-time delivery"
      ]
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "GST Billing Facility",
      description: "Get GST-compliant bills for all your relocation and transport needs.",
      image: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg",
      features: [
        "Transparent billing",
        "Claim input tax credit",
        "Accepted by all companies"
      ]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "IBA Approved Billing Facility",
      description: "IBA-approved bills for all banks, ensuring hassle-free reimbursement.",
      image: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg",
      features: [
        "Accepted by all banks",
        "Meets IBA standards",
        "Quick processing"
      ]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Local Shifting",
      description: "Quick and efficient local shifting services within your city.",
      image: "https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg",
      features: [
        "Same-day shifting",
        "Experienced local team",
        "Affordable pricing"
      ]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Transport",
      description: "Reliable transport solutions for goods and cargo of all sizes.",
      image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg",
      features: [
        "Fleet of modern vehicles",
        "Timely delivery",
        "Pan-India coverage"
      ]
    },
    {
      icon: <Box className="h-8 w-8" />,
      title: "Logistics Services",
      description: "End-to-end logistics management for businesses and individuals.",
      image: "https://images.pexels.com/photos/256477/pexels-photo-256477.jpeg",
      features: [
        "Inventory management",
        "Supply chain solutions",
        "Custom logistics planning"
      ]
    },
    {
      icon: <WarehouseIcon className="h-8 w-8" />,
      title: "Storage Facility",
      description: "Secure and flexible storage solutions for short or long-term needs.",
      image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg",
      features: [
        "24/7 security",
        "Climate-controlled options",
        "Easy access"
      ]
    }
  ];

  const faqs = [
    {
      question: "In India, is it necessary for me to assist the goods-transporting truck?",
      answer: "No, it is not necessary for you to assist the truck. Our professional team will handle the loading, unloading, and transportation of your goods. However, you may accompany the truck if you wish for your peace of mind."
    },
    {
      question: "In India, is there any insurance of the luggage? What if there are damages?",
      answer: "Yes, we offer insurance coverage for your belongings during transit across India. In the rare event of damages, you can file a claim and our team will assist you in the process to ensure a fair settlement."
    },
    {
      question: "Do you relocate cars in India? I need to move my car from one city to another.",
      answer: "Yes, we provide car relocation services across India. Your car will be safely transported using specialized carriers to your desired destination."
    },
    {
      question: "What measures should I take during the shifting process in India?",
      answer: "We recommend labeling your boxes, keeping valuables and important documents with you, and informing our team of any fragile or special items. Our experts will guide you through the process for a smooth move."
    },
    {
      question: "Will you assist me in packing my belongings in India?",
      answer: "Absolutely! Our team offers professional packing services using high-quality materials to ensure the safety of your belongings during the move."
    },
    {
      question: "How do I choose the right packers and movers service provider in India for shifting my household items?",
      answer: "Look for a licensed and insured company with good reviews, transparent pricing, and a proven track record. We pride ourselves on meeting all these criteria for moves across India."
    },
    {
      question: "How early should I book for shifting my bike in India?",
      answer: "It is best to book at least 7-10 days in advance to ensure availability and proper planning for your bike relocation anywhere in India."
    },
    {
      question: "What are the charges for shifting a car by truck carriers in India?",
      answer: "Charges depend on the distance, type of carrier, and car model. Contact us for a transparent and customized quote for your car relocation needs."
    },
    {
      question: "What are service charges apart from the actual cost for the logistics shifting in India?",
      answer: "Apart from the transportation cost, there may be charges for packing, insurance, storage, and applicable taxes. We provide a detailed estimate with no hidden fees."
    },
    {
      question: "How long does it take to shift the logistics in India?",
      answer: "The time required depends on the distance and service type. Local moves may take a day, while intercity or interstate moves can take 2-7 days. We always strive for timely delivery."
    },
    {
      question: "Work process of packers and movers in India. How do they work?",
      answer: "Our process includes a pre-move survey, professional packing, careful loading, safe transportation, unloading, and unpacking at your new location. We ensure a hassle-free experience throughout India."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/90"></div>
        </div>
        
        <div className="container relative mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Moving Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive moving solutions tailored to your specific needs. 
            From local moves to long-distance relocations, we handle everything with care and professionalism.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-yellow-400">★★★★★</span> 4.9/5 (500+ Reviews)
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Licensed & Insured
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Professional Service
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience comprehensive moving solutions tailored to meet your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Moving Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our professional moving services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-8 w-8" />,
                title: "Licensed & Insured",
                description: "Full coverage for your peace of mind"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Team",
                description: "Trained and experienced movers"
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: "Clear Pricing",
                description: "No hidden fees or surprises"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "On-Time Service",
                description: "We value your schedule"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg group hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our moving services
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Move?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with us today for a free, no-obligation quote for your move.
            </p>
            <a 
              href="/quote" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;