import React from 'react';
import { ArrowRight, Award, Clock, Shield, Users, Star, Building, CheckCircle, Truck } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Bipin Narde",
      role: "Operations Director",
      image: "/Bipin.jpg",
      bio: "Ensures every move is executed flawlessly, bringing 10+ years of logistics and customer service excellence."
    },
    {
      name: "Vaibhav Dadde",
      role: "Logistic Supervisor",
      image: "/Vaibhav.jpg",
      bio: "Has 6 years of experience in the moving industry."
    },
    {
      name: "Rahul Wagmare",
      role: "Packaging incharge",
      image: "https://via.placeholder.com/300x225?text=Rahul+Wagmare",
      bio: "Has 6 years of experience in the moving industry."
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Manager",
      image: "https://images.pexels.com/photos/3796235/pexels-photo-3796235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Emily leads our customer service team, ensuring every client receives personalized attention throughout their move."
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with just two trucks and a dream to provide exceptional moving services."
    },
    {
      year: "2018",
      title: "Expansion Milestone",
      description: "Expanded operations to cover the entire East Coast, adding specialized commercial moving services."
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Received 'Best Moving Company' award and achieved 5,000+ successful moves."
    },
    {
      year: "2025",
      title: "Digital Innovation",
      description: "Launched cutting-edge tracking system and expanded to nationwide services."
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Reliability",
      description: "We build lasting relationships through honest, transparent service."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "Your satisfaction and peace of mind are our top priorities."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our service."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Punctuality",
      description: "We respect your time and stick to agreed schedules."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/90"></div>
        </div>
        
        <div className="container relative mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Rugveda Relocation</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Your trusted moving partner since 2015, committed to providing hassle-free relocation solutions with a personal touch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-yellow-400">★★★★★</span> 4.9/5 (500+ Reviews)
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              10+ Years Experience
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              10,000+ Successful Moves
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Rugveda Relocation, we believe moving should be an exciting new chapter, not a stressful experience. Our mission is to transform the moving industry by providing exceptional service that puts your needs first.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional movers at work" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg relative z-10">
                  {milestone.year}
                </div>
                <div className="ml-8 flex-grow">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                {index !== milestones.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced team is dedicated to making your move smooth and stress-free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={`w-full h-64 ${member.name === 'Bipin Narde' ? 'object-contain bg-white' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some potential reasons why customers might choose Rugveda Relocation:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Experienced Team</h3>
              <p className="text-gray-700">Our team of packers and movers has years of experience in handling relocations, ensuring your belongings are safe and secure.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Clock className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Reliable Services</h3>
              <p className="text-gray-700">We pride ourselves on our reliability and punctuality, ensuring your relocation is completed on time and to your satisfaction.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <CheckCircle className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Customized Solutions</h3>
              <p className="text-gray-700">We offer tailored solutions to meet your specific relocation needs, whether it's a local move or a long-distance relocation.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Shield className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Safety and Security</h3>
              <p className="text-gray-700">We take great care in handling your belongings, using high-quality packing materials and techniques to ensure their safety during transit.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Star className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Transparent Pricing</h3>
              <p className="text-gray-700">We provide clear and transparent pricing, with no hidden costs or surprises.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Award className="h-10 w-10 text-pink-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Excellent Customer Service</h3>
              <p className="text-gray-700">Our customer service team is available to answer your questions and concerns, providing a hassle-free relocation experience.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Building className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Insurance Coverage</h3>
              <p className="text-gray-700">We offer insurance coverage for your belongings during transit, giving you peace of mind.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Truck className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Eco-Friendly Practices</h3>
              <p className="text-gray-700">We strive to minimize our environmental impact, using eco-friendly packing materials and practices whenever possible.</p>
            </div>
          </div>
          <p className="mt-12 text-lg text-gray-800 font-semibold text-center">
            By choosing Rugveda Relocation, customers can trust that their relocation will be handled with care, professionalism, and attention to detail.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Service?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you make your next move the best one yet. Get in touch for a free quote today.
            </p>
            <a 
              href="/quote" 
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;