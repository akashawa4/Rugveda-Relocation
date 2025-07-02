import React, { useState, useCallback, memo } from 'react';
import { ArrowRight, Phone, Filter, X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
}

const LazyImage = memo(({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <div 
      ref={ref}
      className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      {inView && (
        <>
          <img 
            src={`${src}?auto=compress&w=800`}
            srcSet={`${src}?auto=compress&w=400 400w, ${src}?auto=compress&w=800 800w`}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "https://st4.depositphotos.com/1010613/40210/i/450/depositphotos_402104672-stock-photo-truck-movers-loading-van-carrying.jpg",
      alt: "Professional movers loading a truck",
      category: "Loading",
      description: "Our professional team carefully loading furniture into our moving truck"
    },
    {
      id: 2,
      src: "https://mikemurphyremovals.com.au/wp-content/uploads/2018/01/Wrapping-furniture-before-the-move.jpg",
      alt: "Packing and wrapping furniture",
      category: "Packing",
      description: "Expert packing services to protect your valuable items"
    },
    {
      id: 3,
      src: "https://www.leopackersindia.com/wp-content/uploads/2024/05/2-Fleet-Of-Container-Vehicles-Since-1975-.png",
      alt: "Moving truck ready for transport",
      category: "Transport",
      description: "Our modern fleet of moving trucks ready for your relocation"
    },
    {
      id: 4,
      src: "https://cdn.prod.website-files.com/64af1855b0eebbdb1ab31bfd/6557e141e145de07aa847661_1960x798%20Office%20Moving.webp",
      alt: "Office relocation in progress",
      category: "Commercial",
      description: "Professional office moving services with minimal disruption"
    },
    {
      id: 5,
      src: "https://content.jdmagicbox.com/v2/comp/kolhapur/w9/0231px231.x231.230704163555.d6w9/catalogue/shree-sairam-packers-and-movers-shahupuri-kolhapur-packers-and-movers-ha4t7gf17l.jpg",
      alt: "Residential moving team",
      category: "Residential",
      description: "Our team helping families move into their new homes"
    },
    {
      id: 6,
      src: "https://5.imimg.com/data5/SELLER/Default/2021/5/NC/FA/JM/3645153/grapes-cold-storage-room-500x500.jpg",
      alt: "Storage facility",
      category: "Storage",
      description: "Secure storage solutions for your belongings"
    },
    {
      id: 7,
      src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=224,fit=crop/YBg7pnjnQlfrNrNR/1-10-YZ9xey5Pbeh9DJbg.jpeg",
      alt: "Packing supplies and boxes",
      category: "Packing",
      description: "High-quality packing materials for safe transport"
    },
    {
      id: 8,
      src: "https://www.agarwalpackers.com/media/images/cache/agarwal_packers_car_moving_png_0_0_cover_70.jpg",
      alt: "Long distance moving",
      category: "Transport",
      description: "Cross-country moving services you can trust"
    },
    {
      id: 9,
      src: "https://servilerelocations.com/wp-content/uploads/2021/10/Top-benefit-of-our-trucking-service_blog.png",
      alt: "Team collaboration",
      category: "Team",
      description: "Our experienced team working together for your move"
    }
  ];

  const handleImageClick = useCallback((item: GalleryItem) => {
    setSelectedImage(item);
  }, []);

  const categories = ['all', 'Loading', 'Packing', 'Transport', 'Commercial', 'Residential', 'Storage', 'Team'];

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/90"></div>
        </div>
        
        <div className="container relative mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Moving Services in Action</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Browse through our gallery to see how we handle moves with care and professionalism.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Professional Equipment
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Experienced Team
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Safe & Secure Moving
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-4">
              <Filter className="h-5 w-5 text-gray-500" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Photos' : category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <LazyImage
                  src={item.src}
                  alt={item.alt}
                  onClick={() => handleImageClick(item)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium mb-1">{item.category}</p>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-white">
              <p className="text-lg font-medium">{selectedImage.category}</p>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Service?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you with your next move. Get in touch for a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/quote" 
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="tel:+18001234567" 
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-colors"
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

export default GalleryPage;