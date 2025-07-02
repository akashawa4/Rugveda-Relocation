import React, { useState } from 'react';
import { Star, ArrowRight, Phone, Filter, Search } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  service: string;
  image?: string;
}

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const reviews: Review[] = [
    {
      name: "Sagar Patil",
      location: "",
      rating: 5,
      date: "8 months ago",
      review: "Very Nice Packers And Movies Service In Kolhapur. They have Done Safe Packing, Rugveda Relocation give Fantastic Work Done",
      service: "Local Moving"
    },
    {
      name: "Narayani Shinde",
      location: "",
      rating: 5,
      date: "8 months ago",
      review: "Good Service fast and safe journey they have done excellent and safe packing",
      service: "Local Moving"
    },
    {
      name: "Sangram Patil",
      location: "",
      rating: 5,
      date: "9 months ago",
      review: "Fast and safe journey they have done excellent and safe moving and packing",
      service: "Long Distance Moving"
    },
    {
      name: "Savita Mali",
      location: "",
      rating: 5,
      date: "3 months ago",
      review: "Best packing and moving organisation in kolhapur,",
      service: "Local Moving"
    },
    {
      name: "Abhi Pawar",
      location: "",
      rating: 5,
      date: "8 months ago",
      review: "Good service given by rugveda relocation company, reasonable rate, packing, loading unloading and transport, very satisfied with this packers and movers",
      service: "Packing Services"
    },
    {
      name: "Geeta Chothe",
      location: "",
      rating: 5,
      date: "5 months ago",
      review: "Best packing quality,handling quality,good material handling and timely shifting",
      service: "Packing Services"
    },
    {
      name: "Kumar Gavali",
      location: "",
      rating: 5,
      date: "6 months ago",
      review: "Best service, best packing material use, timt to time service",
      service: "Packing Services"
    },
    {
      name: "Asavari Kulkarni",
      location: "",
      rating: 5,
      date: "5 months ago",
      review: "Will recommend the services to my known people as team was Punctual, Packing skills and speed excellent, Cooperative",
      service: "Commercial Moving"
    },
    {
      name: "Mahesh Dhavale",
      location: "",
      rating: 5,
      date: "8 months ago",
      review: "Good Service Best Packing Service Reasonable Rate great job",
      service: "Packing Services"
    },
    {
      name: "Vijay Borgaonkar",
      location: "",
      rating: 5,
      date: "8 months ago",
      review: "Good Packing loading & unloading best transport and packing service in kolhapur",
      service: "Local Moving"
    },
    {
      name: "Avinash Ghodake (Avi)",
      location: "",
      rating: 5,
      date: "4 months ago",
      review: "Very nice",
      service: "Local Moving"
    },
    {
      name: "Snehal Rane",
      location: "",
      rating: 5,
      date: "3 months ago",
      review: "Excellent storage facility. My belongings were safe and the process was hassle-free. Highly recommended!",
      service: "Storage Services"
    },
    {
      name: "Mrunali Mayur Desai",
      location: "",
      rating: 5,
      date: "3 months ago",
      review: "Very professional and friendly staff. The storage services exceeded my expectations.",
      service: "Storage Services"
    },
    {
      name: "Santosh Gurav",
      location: "",
      rating: 5,
      date: "3 months ago",
      review: "Quick and easy process. The team handled everything with care. Will use again!",
      service: "Storage Services"
    },
    {
      name: "Saisham Mahamuni",
      location: "",
      rating: 5,
      date: "3 months ago",
      review: "Moving can be stressful as i am a student , but Rugveda Relocation Packers and Movers made it stress-free with their efficient door-to-door service. The team was professional, and all my belongings arrived safely. I'm extremely satisfied with their service!",
      service: "Long Distance Moving"
    },
    {
      name: "Sheetal Jadhav",
      location: "",
      rating: 5,
      date: "4 months ago",
      review: "Fantastic service, prompt and reasonable rates. Highly recommended to use the services of Rugveda Relocation",
      service: "Long Distance Moving"
    },
    {
      name: "PRAVIN GURAV",
      location: "",
      rating: 5,
      date: "4 months ago",
      review: "Best service, coordination, timily delivery, Kolhapur to Bangalore shifting",
      service: "Long Distance Moving"
    },
    {
      name: "Nita Patil",
      location: "",
      rating: 5,
      date: "4 months ago",
      review: "It's best service provides. It is very nice experience.",
      service: "Long Distance Moving"
    },
    {
      name: "Suhas Takkekar",
      location: "",
      rating: 5,
      date: "8 months ago",
      review: "Very nice co-ordination from rugveda relocation, packers and movers and everything is went so nice till good delivery.",
      service: "Commercial Moving"
    },
    {
      name: "Vinayak Bhadagave",
      location: "",
      rating: 5,
      date: "4 months ago",
      review: "Good job best packers in kolhapur city",
      service: "Commercial Moving"
    },
    {
      name: "SURBHI GURAV",
      location: "",
      rating: 5,
      date: "3 months ago",
      review: "Its amazing",
      service: "Storage Services"
    },
    {
      name: "Snehal Gurav",
      location: "",
      rating: 5,
      date: "3 months ago",
      review: "Impressed with the secure storage and prompt service. Great experience overall!",
      service: "Storage Services"
    },
    {
      name: "Vivek Chavan",
      location: "",
      rating: 5,
      date: "3 months ago",
      review: "Affordable and reliable storage solutions. The staff was very helpful.",
      service: "Storage Services"
    },
    {
      name: "TEJAS KHADE",
      location: "",
      rating: 5,
      date: "4 months ago",
      review: "Smooth process from start to finish. My items were well taken care of.",
      service: "Storage Services"
    },
    {
      name: "PRASAD LAVHATE",
      location: "",
      rating: 5,
      date: "4 months ago",
      review: "Great service and excellent communication throughout. Highly satisfied!",
      service: "Storage Services"
    }
  ];

  const filters = [
    'all',
    'Local Moving',
    'Long Distance Moving',
    'Commercial Moving',
    'Packing Services',
    'Storage Services'
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesFilter = activeFilter === 'all' || review.service === activeFilter;
    const matchesSearch = review.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/90"></div>
        </div>
        
        <div className="container relative mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Testimonials</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            See what our satisfied customers have to say about their moving experience with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-yellow-400">★★★★★</span> 4.9/5 (500+ Reviews)
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Verified Reviews
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              10,000+ Happy Customers
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-96 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                <Filter className="h-5 w-5 text-gray-500" />
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      activeFilter === filter
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter === 'all' ? 'All Reviews' : filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {/* Avatar with initials */}
                  {(() => {
                    const nameParts = review.name.split(" ");
                    const initials = nameParts.length > 1
                      ? nameParts[0][0].toUpperCase() + nameParts[nameParts.length - 1][0].toUpperCase()
                      : review.name.slice(0, 2).toUpperCase();
                    // Generate a pastel color based on the name
                    const colors = [
                      'bg-pink-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200', 'bg-orange-200', 'bg-teal-200', 'bg-indigo-200'
                    ];
                    let colorIdx = 0;
                    for (let i = 0; i < review.name.length; i++) {
                      colorIdx = (colorIdx + review.name.charCodeAt(i)) % colors.length;
                    }
                    return (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white mr-4 ${colors[colorIdx]}`}>
                        {initials}
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{review.review}</p>
                <div className="text-sm text-blue-600 font-medium">{review.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

export default Reviews;