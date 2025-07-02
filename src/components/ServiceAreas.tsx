import React from 'react';
import { MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ServiceAreas = () => {
  // Sample service areas - would be replaced with actual service areas
  const serviceAreas = {
  "Kolhapur": [
    "Rankala Chowpati Area",
    "Tarabai Park",
    "Town Hall Garden Area",
    "Bindu Chowk Area",
    "Panchganga Ghat Area",
    "Rajarampuri"
  ],
  "Ichalkaranji": [
    "Adinath Housing Society",
    "Asara Nagar",
    "Vrindavan Colony",
    "Ashok Nagar",
    "Kagwade Mala",
    "Mahadev Nagar"
  ],
  "Kagal": [
    "Kagal MIDC",
    "Morewadi",
    "Ujalaiwadi",
    "Gokul Shirgaon MIDC",
    "Kandalgaon"
  ],
  "Sangli": [
    "Vijaynagar",
    "Nishant Colony",
    "Kala Nagar",
    "Kupwad",
    "Vishram Bagh"
  ],
  "Satara": [
    "Wai",
    "Rajwada",
    "Shirwal",
    "Sadar Bazar",
    "Saidapur"
  ],
  "Miraj": [
    "Jath Road",
    "Vijaynagar",
    "Vinayak Nagar",
    "Dattanagar",
    "Ganapati Peth"
  ],
  "Pune": [
    "Shivajinagar",
    "Aundh",
    "Kothrud",
    "Hadapsar",
    "Viman Nagar"
  ],
    "Pimpri-Chinchwad": [
    "Pimpri",
    "Chinchwad",
    "Dapodi",
    "Bhosari",
    "Nigdi"
  ]
};

const locations = [
  {
    position: [16.691307, 74.244865],
    name: "Kolhapur",
    description: "Historic city on the Panchganga River, famous for Kolhapuri cuisine and the Mahalakshmi Temple."
  },
  {
    position: [16.69117, 74.46054],
    name: "Ichalkaranji",
    description: "Textile hub known as the 'Manchester of Maharashtra' for its powerloom industry."
  },
  {
    position: [16.57702, 74.31544],
    name: "Kagal",
    description: "Industrial town in Kolhapur district, home to the Kagal MIDC manufacturing zone."
  },
  {
    position: [16.854381, 74.56417],
    name: "Sangli",
    description: "District headquarters known as the 'Turmeric City' for Asia’s largest spice trade."
  },
  {
    position: [17.691401, 74.000938],
    name: "Satara",
    description: "City named for its seven surrounding forts ('Saat Tara'), gateway to the Sahyadri hills."
  },
  {
    position: [16.83, 74.63],
    name: "Miraj",
    description: "Part of the Sangli–Miraj–Kupwad metro, famed for musical instrument craftsmanship."
  },
  {
    position: [18.516726, 73.856255],
    name: "Pune",
    description: "Former Maratha capital and educational/cultural hub on the Deccan Plateau."
  },
  {
    position: [18.6186222, 73.8037306],
    name: "Pimpri-Chinchwad",
    description: "Twin city of Pune, major industrial and IT hub under the Pimpri Chinchwad Municipal Corporation."
  }
];


  const center = [16.691307, 74.244865]; // Centered on Jacksonville, FL

  return (
    <section className="py-20 bg-white relative" id="areas">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our professional moving services are available in these locations. Don't see your area? Contact us to check if we can accommodate your move.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(serviceAreas).map(([state, cities]) => (
            <div key={state} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                {state}
              </h3>
              <ul className="space-y-2">
                {cities.map((city, index) => (
                  <li key={index}>
                    <a 
                      href={`#${city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Interactive Map */}
        <div className="mt-12 border-2 border-gray-200 rounded-lg overflow-hidden shadow-md relative z-10">
          <div className="h-96 w-full">
            <MapContainer 
              center={[center[0], center[1]]} 
              zoom={5} 
              style={{ height: '100%', width: '100%' }}
              className="z-10"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location, index) => (
                <Marker 
                  key={index} 
                  position={[location.position[0], location.position[1]]}
                >
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold text-lg">{location.name}</h3>
                      <p className="text-gray-600">{location.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Don't see your location? We might still be able to help!</p>
          <a 
            href="/quote" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Check Your Location
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;