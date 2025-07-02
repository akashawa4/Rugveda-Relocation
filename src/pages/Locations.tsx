import React, { useState, useCallback, memo } from 'react';
import { MapPin, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useInView } from 'react-intersection-observer';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Location {
  state: string;
  cities: {
    name: string;
    services: string[];
    coordinates: [number, number];
    image?: string;
  }[];
}

const LazyImage = memo(({ src, alt }: { src?: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  if (!src) return null;

  return (
    <div 
      ref={ref}
      className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden"
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

const LocationCard = memo(({ location, city }: { location: Location; city: Location['cities'][0] }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-500 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {city.image && <LazyImage src={city.image} alt={`${city.name} office`} />}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{location.state}</p>
        <div className="space-y-2">
          {city.services.map((service, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

LocationCard.displayName = 'LocationCard';

const Locations = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const locations: Location[] = [
    {
      state: "Maharashtra",
      cities: [
        {
          name: "Kolhapur",
          coordinates: [16.691307, 74.244865],
          services: [
            "Residential Moving",
            "Commercial Moving",
            "Packing Services",
            "Storage Solutions"
          ],
          image: "https://pd.w.org/2024/04/667661ed66d48c807.46074102-2048x1152.jpg"
        },
        {
          name: "Ichalkaranji",
          coordinates: [16.69117, 74.46054],
          services: [
            "Residential Moving",
            "Commercial Moving",
            "Packing Services",
            "Storage Solutions"
          ],
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rajwada.jpg/640px-Rajwada.jpg"
        },
        {
          name: "Kagal",
          coordinates: [16.57702, 74.31544],
          services: [
            "Residential Moving",
            "Commercial Moving",
            "Packing Services",
            "Storage Solutions"
          ],
          image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/28/1a7b5670055ad0d215627dcf33df378d_1000x1000.jpg"
        },
        {
          name: "Sangli",
          coordinates: [16.854381, 74.564170],
          services: [
            "Residential Moving",
            "Commercial Moving",
            "Packing Services",
            "Storage Solutions"
          ],
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ganpati_Mandir%2C_Sangli_02.jpg/640px-Ganpati_Mandir%2C_Sangli_02.jpg"
        },
        {
          name: "Satara",
          coordinates: [17.691401, 74.000938],
          services: [
            "Residential Moving",
            "Commercial Moving",
            "Packing Services",
            "Storage Solutions"
          ],
          image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Pratapgad_The_Fort_of_Valour.jpg"
        },
        {
          name: "Miraj",
          coordinates: [16.83, 74.63],
          services: [
            "Residential Moving",
            "Commercial Moving",
            "Packing Services",
            "Storage Solutions"
          ],
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Mirajmarketnorth.jpg/640px-Mirajmarketnorth.jpg"
        },
        {
          name: "Pune",
          coordinates: [18.516726, 73.856255],
          services: [
            "Residential Moving",
            "Commercial Moving",
            "Packing Services",
            "Storage Solutions"
          ],
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pune_West_skyline_-_March_2017.jpg/1920px-Pune_West_skyline_-_March_2017.jpg"
        },
        {
          name: "Pimpri-Chinchwad",
          coordinates: [18.6186222, 73.8037306],
          services: [
            "Residential Moving",
            "Commercial Moving",
            "Packing Services",
            "Storage Solutions"
          ],
          image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Closeup_of_Pimpri-Chinchwad_Municipal_Corporation.jpg"
        }
      ]
    }
  ];

  const allCoordinates = locations.flatMap(location => location.cities.map(city => city.coordinates));
  const center: [number, number] = [
    allCoordinates.reduce((sum, coord) => sum + coord[0], 0) / allCoordinates.length,
    allCoordinates.reduce((sum, coord) => sum + coord[1], 0) / allCoordinates.length
  ];

  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/90"></div>
        </div>
        
        <div className="container relative mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serving Your Area with Professional Moving Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Find out if we serve your location and get a free quote today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Multiple Locations
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas Where Our Offices Are Located
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              View our service areas on the map to find the nearest location to you
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-[600px] w-full">
              <MapContainer 
                center={center} 
                zoom={9} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.flatMap(location =>
                  location.cities.map((city) => (
                    <Marker 
                      key={`${location.state}-${city.name}`}
                      position={city.coordinates}
                    >
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold text-lg">{city.name}, {location.state}</h3>
                          <div className="mt-2">
                            <p className="font-medium text-sm text-gray-700">Available Services:</p>
                            <ul className="mt-1 space-y-1">
                              {city.services.map((service, idx) => (
                                <li key={idx} className="text-sm flex items-center text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  {service}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              location.cities.map((city) => (
                <LocationCard key={`${location.state}-${city.name}`} location={location} city={city} />
              ))
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Service?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our thousands of satisfied customers. Get your free moving quote today.
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
                href="tel:+919405699393" 
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

export default Locations;