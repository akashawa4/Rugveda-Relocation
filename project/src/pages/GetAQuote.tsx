import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, ChevronDown, ChevronUp, Truck, Building2, Package, Home, Phone, Mail } from 'lucide-react';
import { Transition } from '@headlessui/react';

interface FormData {
  moveType: string;
  fromLocation: string;
  toLocation: string;
  moveDate: string;
  moveSize: string;
  services: string[];
  name: string;
  email: string;
  phone: string;
}

const initialFormData: FormData = {
  moveType: '',
  fromLocation: '',
  toLocation: '',
  moveDate: '',
  moveSize: '',
  services: [],
  name: '',
  email: '',
  phone: '',
};

const GetAQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/90"></div>
        </div>
        
        <div className="relative pt-32 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
                <p className="text-xl text-gray-600 mb-8">
                  We've received your quote request and will get back to you shortly with a detailed estimate.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Next Steps:</h2>
                  <ul className="text-left space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Check your email for a confirmation of your quote request</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Our team will review your requirements and prepare a detailed quote</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>We'll contact you within 24 hours to discuss your move in detail</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="/"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Return to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/90"></div>
        </div>
        
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Get Your Free Moving Quote
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in-up animation-delay-150">
              Get an accurate quote for your move in just a few simple steps.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-300">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-yellow-400">★★★★★</span> 4.9/5 (500+ Reviews)
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                Licensed & Insured
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                Free Estimates
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex justify-between relative">
                {[
                  { icon: <Home className="w-6 h-6" />, label: 'Move Details' },
                  { icon: <Truck className="w-6 h-6" />, label: 'Location' },
                  { icon: <Package className="w-6 h-6" />, label: 'Services' },
                  { icon: <Building2 className="w-6 h-6" />, label: 'Contact' },
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index + 1 <= currentStep
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span className="mt-2 text-sm font-medium text-gray-600">{step.label}</span>
                  </div>
                ))}
                <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-200">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <Transition
                    show={currentStep === 1}
                    enter="transition-all duration-300"
                    enterFrom="opacity-0 translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition-all duration-300"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-4"
                  >
                    <div className={currentStep === 1 ? 'block' : 'hidden'}>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">What type of move do you need?</h2>
                      <div className="grid md:grid-cols-3 gap-6">
                        {[
                          {
                            type: 'Residential Move',
                            icon: <Home className="w-8 h-8" />,
                            description: 'Moving from one home to another'
                          },
                          {
                            type: 'Commercial Move',
                            icon: <Building2 className="w-8 h-8" />,
                            description: 'Office or business relocation'
                          },
                          {
                            type: 'Storage Solutions',
                            icon: <Package className="w-8 h-8" />,
                            description: 'Secure storage services'
                          }
                        ].map((option) => (
                          <label
                            key={option.type}
                            className={`relative flex flex-col items-center p-6 rounded-xl cursor-pointer transition-all ${
                              formData.moveType === option.type
                                ? 'bg-blue-50 border-2 border-blue-500 shadow-md'
                                : 'bg-gray-50 border-2 border-gray-100 hover:border-blue-200'
                            }`}
                          >
                            <input
                              type="radio"
                              name="moveType"
                              value={option.type}
                              checked={formData.moveType === option.type}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                              formData.moveType === option.type
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-gray-400'
                            }`}>
                              {option.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.type}</h3>
                            <p className="text-sm text-gray-500 text-center">{option.description}</p>
                          </label>
                        ))}
                      </div>
                    </div>
                  </Transition>

                  <Transition
                    show={currentStep === 2}
                    enter="transition-all duration-300"
                    enterFrom="opacity-0 translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition-all duration-300"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-4"
                  >
                    <div className={currentStep === 2 ? 'block' : 'hidden'}>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">Where are you moving?</h2>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Moving From</label>
                            <input
                              type="text"
                              name="fromLocation"
                              value={formData.fromLocation}
                              onChange={handleInputChange}
                              placeholder="Enter address or zip code"
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Moving To</label>
                            <input
                              type="text"
                              name="toLocation"
                              value={formData.toLocation}
                              onChange={handleInputChange}
                              placeholder="Enter address or zip code"
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Move Date</label>
                          <input
                            type="date"
                            name="moveDate"
                            value={formData.moveDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  </Transition>

                  <Transition
                    show={currentStep === 3}
                    enter="transition-all duration-300"
                    enterFrom="opacity-0 translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition-all duration-300"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-4"
                  >
                    <div className={currentStep === 3 ? 'block' : 'hidden'}>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">What services do you need?</h2>
                      <div className="space-y-8">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Move Size</label>
                          <select
                            name="moveSize"
                            value={formData.moveSize}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                          >
                            <option value="">Select size...</option>
                            <option value="Studio">Studio</option>
                            <option value="1 Bedroom">1 Bedroom</option>
                            <option value="2 Bedrooms">2 Bedrooms</option>
                            <option value="3 Bedrooms">3 Bedrooms</option>
                            <option value="4+ Bedrooms">4+ Bedrooms</option>
                            <option value="Office">Office</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Additional Services
                          </label>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              'Packing Services',
                              'Unpacking Services',
                              'Storage Services',
                              'Furniture Assembly',
                              'Piano Moving',
                              'Art & Antiques'
                            ].map((service) => (
                              <label
                                key={service}
                                className={`relative flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                                  formData.services.includes(service)
                                    ? 'bg-blue-50 border-2 border-blue-500'
                                    : 'bg-gray-50 border-2 border-gray-100 hover:border-blue-200'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.services.includes(service)}
                                  onChange={() => handleServiceToggle(service)}
                                  className="sr-only"
                                />
                                <div className={`w-5 h-5 rounded flex items-center justify-center mr-3 ${
                                  formData.services.includes(service)
                                    ? 'bg-blue-500 text-white'
                                    : 'border-2 border-gray-300'
                                }`}>
                                  {formData.services.includes(service) && (
                                    <CheckCircle className="w-4 h-4" />
                                  )}
                                </div>
                                <span className="font-medium text-gray-900">{service}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Transition>

                  <Transition
                    show={currentStep === 4}
                    enter="transition-all duration-300"
                    enterFrom="opacity-0 translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition-all duration-300"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-4"
                  >
                    <div className={currentStep === 4 ? 'block' : 'hidden'}>
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Contact Information</h2>
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="(123) 456-7890"
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  </Transition>

                  <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center px-6 py-3 text-gray-700 font-medium hover:text-gray-900 transition-colors"
                      >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back
                      </button>
                    )}
                    <button
                      type={currentStep === totalSteps ? 'submit' : 'button'}
                      onClick={currentStep === totalSteps ? undefined : handleNext}
                      className={`flex items-center px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                        currentStep === totalSteps
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      } ${!currentStep > 1 ? 'ml-auto' : ''}`}
                    >
                      {currentStep === totalSteps ? (
                        'Get My Free Quote'
                      ) : (
                        <>
                          Continue
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetAQuote;