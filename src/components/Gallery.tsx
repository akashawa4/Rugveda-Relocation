import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItemProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const GalleryItem = ({ src, alt, onClick }: GalleryItemProps) => {
  return (
    <div 
      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-64 object-cover"
        loading="lazy"
      />
    </div>
  );
};

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  const images = [
    {
      src: "https://www.leopackersindia.com/wp-content/uploads/2024/05/2-Fleet-Of-Container-Vehicles-Since-1975-.png",
      alt: "Professional movers loading a truck"
    },
    {
      src: "https://mikemurphyremovals.com.au/wp-content/uploads/2018/01/Wrapping-furniture-before-the-move.jpg",
      alt: "Family excited about their move"
    },
    {
      src: "https://ambepackersandmoverschandigarh.com/admin/assets/images/1737377280ser6.jpg",
      alt: "Careful packing of fragile items"
    },
    {
      src: "https://cdn.prod.website-files.com/64af1855b0eebbdb1ab31bfd/6557e141e145de07aa847661_1960x798%20Office%20Moving.webp",
      alt: "Moving company truck with logo"
    },
    {
      src: "https://www.agarwalpackers.com/media/images/cache/agarwal_packers_car_moving_png_0_0_cover_70.jpg",
      alt: "Organized boxes ready for moving"
    },
    {
      src: "https://servilerelocations.com/wp-content/uploads/2021/10/Top-benefit-of-our-trucking-service_blog.png",
      alt: "Team of professional movers"
    }
  ];
  
  const openLightbox = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Moving Gallery</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Take a look at our team in action, helping families and businesses with their moving needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryItem 
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => openLightbox(image.src)}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/gallery"
            className="inline-block font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            View Full Gallery →
          </a>
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={currentImage} 
            alt="Enlarged gallery image" 
            className="max-w-full max-h-[90vh] object-contain"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;