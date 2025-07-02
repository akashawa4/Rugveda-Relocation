import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  image?: string;
}

const TestimonialCard = ({ name, location, rating, testimonial, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      
      <div className="flex text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            fill={i < rating ? "currentColor" : "none"}
            stroke={i < rating ? "currentColor" : "currentColor"}
          />
        ))}
      </div>
      
      <p className="text-gray-700 flex-grow">"{testimonial}"</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offset, setOffset] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTestimonial, setModalTestimonial] = useState<TestimonialProps | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = 0.5; // px per frame
  
  const testimonials = [
    {
      name: "Sagar Patil",
      location: "",
      rating: 5,
      testimonial: "Very Nice Packers And Movies Service In Kolhapur. They have Done Safe Packing, Rugveda Relocation give Fantastic Work Done",
      image: ""
    },
    {
      name: "Narayani Shinde",
      location: "",
      rating: 5,
      testimonial: "Good Service fast and safe journey they have done excellent and safe packing",
      image: ""
    },
    {
      name: "Sangram Patil",
      location: "",
      rating: 5,
      testimonial: "Fast and safe journey they have done excellent and safe moving and packing",
      image: ""
    },
    {
      name: "Savita Mali",
      location: "",
      rating: 5,
      testimonial: "Best packing and moving organisation in kolhapur,",
      image: ""
    },
    {
      name: "Abhi Pawar",
      location: "",
      rating: 5,
      testimonial: "Good service given by rugveda relocation company, reasonable rate, packing, loading unloading and transport, very satisfied with this packers and movers",
      image: ""
    },
    {
      name: "Geeta Chothe",
      location: "",
      rating: 5,
      testimonial: "Best packing quality,handling quality,good material handling and timely shifting",
      image: ""
    },
    {
      name: "Kumar Gavali",
      location: "",
      rating: 5,
      testimonial: "Best service, best packing material use, timt to time service",
      image: ""
    },
    {
      name: "Asavari Kulkarni",
      location: "",
      rating: 5,
      testimonial: "Will recommend the services to my known people as team was Punctual, Packing skills and speed excellent, Cooperative",
      image: ""
    },
    {
      name: "Mahesh Dhavale",
      location: "",
      rating: 5,
      testimonial: "Good Service Best Packing Service Reasonable Rate great job",
      image: ""
    },
    {
      name: "Vijay Borgaonkar",
      location: "",
      rating: 5,
      testimonial: "Good Packing loading & unloading best transport and packing service in kolhapur",
      image: ""
    },
    {
      name: "Avinash Ghodake (Avi)",
      location: "",
      rating: 5,
      testimonial: "Very nice",
      image: ""
    },
    {
      name: "Saisham Mahamuni",
      location: "",
      rating: 5,
      testimonial: "Moving can be stressful as i am a student , but Rugveda Relocation Packers and Movers made it stress-free with their efficient door-to-door service. The team was professional, and all my belongings arrived safely. I'm extremely satisfied with their service!",
      image: ""
    },
    {
      name: "Sheetal Jadhav",
      location: "",
      rating: 5,
      testimonial: "Fantastic service, prompt and reasonable rates. Highly recommended to use the services of Rugveda Relocation",
      image: ""
    },
    {
      name: "PRAVIN GURAV",
      location: "",
      rating: 5,
      testimonial: "Best service, coordination, timily delivery, Kolhapur to Bangalore shifting",
      image: ""
    },
    {
      name: "Nita Patil",
      location: "",
      rating: 5,
      testimonial: "It's best service provides. It is very nice experience.",
      image: ""
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1));
  };

  // Auto-scroll for desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === Math.ceil(testimonials.length / 3) - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Smooth continuous auto-scroll for desktop
  useEffect(() => {
    if (modalOpen) return; // Pause when modal is open
    let animationId: number;
    const scroll = () => {
      setOffset((prev) => {
        const container = containerRef.current;
        if (!container) return prev;
        const totalWidth = container.scrollWidth / 2;
        if (prev >= totalWidth) return 0;
        return prev + speed;
      });
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [modalOpen]);

  // Duplicate testimonials for seamless infinite scroll
  const doubledTestimonials = [...testimonials, ...testimonials];

  // Handle click to open modal
  const handleTestimonialClick = (testimonial: TestimonialProps) => {
    setModalTestimonial(testimonial);
    setModalOpen(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalTestimonial(null);
  };

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We're proud to have helped thousands of families and businesses with their moving needs. Here's what some of them have to say:
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="flex text-yellow-400">
              <Star className="h-5 w-5" fill="currentColor" />
              <Star className="h-5 w-5" fill="currentColor" />
              <Star className="h-5 w-5" fill="currentColor" />
              <Star className="h-5 w-5" fill="currentColor" />
              <Star className="h-5 w-5" fill="currentColor" />
            </div>
            <span className="font-bold text-gray-800">4.9 out of 5</span>
            <span className="text-gray-600">based on 500+ reviews</span>
          </div>
        </div>
        
        {/* Desktop Smooth Continuous Carousel */}
        <div className="hidden lg:block overflow-hidden relative">
          <div
            ref={containerRef}
            className="flex gap-8"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: 'transform 0.1s linear',
              width: 'max-content',
            }}
          >
            {doubledTestimonials.map((testimonial, index) => (
              <div key={index} style={{ minWidth: '350px', flex: '0 0 350px', cursor: 'pointer' }} onClick={() => handleTestimonialClick(testimonial)}>
              <TestimonialCard 
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
              </div>
            ))}
          </div>
          </div>
          
        {/* Modal Popup for Testimonial */}
        {modalOpen && modalTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in-up">
          <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none"
                aria-label="Close"
          >
                ×
          </button>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                  {modalTestimonial.image ? (
                    <img src={modalTestimonial.image} alt={modalTestimonial.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    modalTestimonial.name.charAt(0)
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{modalTestimonial.name}</h3>
                  <p className="text-sm text-gray-600">{modalTestimonial.location}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4"
                        fill={i < modalTestimonial.rating ? "currentColor" : "none"}
                        stroke={i < modalTestimonial.rating ? "currentColor" : "currentColor"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg">"{modalTestimonial.testimonial}"</p>
            </div>
        </div>
        )}
        
        {/* Tablet Testimonials (2 columns) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile Testimonials (1 column) */}
        <div className="md:hidden">
          <div className="space-y-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/testimonials"
            className="inline-block font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Read More Customer Reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;