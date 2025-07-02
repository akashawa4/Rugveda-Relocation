import React, { useState } from 'react';
import { Calendar, MapPin, Send } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fromLocation: '',
    toLocation: '',
    moveDate: '',
    name: '',
    email: '',
    phone: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fromLocation) newErrors.fromLocation = 'Required';
    if (!formData.toLocation) newErrors.toLocation = 'Required';
    if (!formData.moveDate) newErrors.moveDate = 'Required';
    if (!formData.name) newErrors.name = 'Required';
    
    if (!formData.email) {
      newErrors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after a delay
        setTimeout(() => {
          setFormData({
            fromLocation: '',
            toLocation: '',
            moveDate: '',
            name: '',
            email: '',
            phone: '',
          });
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="p-6 md:p-8">
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Quote Request Received!</h3>
          <p className="text-gray-600">We'll be in touch with you shortly with your detailed quote.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fromLocation" className="block text-sm font-medium text-gray-700 mb-1">Moving From</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="fromLocation"
                  name="fromLocation"
                  value={formData.fromLocation}
                  onChange={handleChange}
                  placeholder="City, State, or Zip"
                  className={`pl-10 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${errors.fromLocation ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.fromLocation && <p className="mt-1 text-sm text-red-600">{errors.fromLocation}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="toLocation" className="block text-sm font-medium text-gray-700 mb-1">Moving To</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="toLocation"
                  name="toLocation"
                  value={formData.toLocation}
                  onChange={handleChange}
                  placeholder="City, State, or Zip"
                  className={`pl-10 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${errors.toLocation ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.toLocation && <p className="mt-1 text-sm text-red-600">{errors.toLocation}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700 mb-1">Moving Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  id="moveDate"
                  name="moveDate"
                  value={formData.moveDate}
                  onChange={handleChange}
                  className={`pl-10 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${errors.moveDate ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.moveDate && <p className="mt-1 text-sm text-red-600">{errors.moveDate}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className={`block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Get My Estimate
                </>
              )}
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            By submitting, you agree to our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to receive moving information via phone, email, or text message.
          </p>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;