import React, { useState } from 'react';
import { CheckCircle, Phone, Shield, Users, Award, Clock } from 'lucide-react';

interface ConversionQuoteFormProps {
  title?: string;
  subtitle?: string;
  servicePreselect?: string;
  variant?: 'default' | 'sidebar' | 'popup';
}

const ConversionQuoteForm: React.FC<ConversionQuoteFormProps> = ({ 
  title = "Request a Home Improvement Quote?",
  subtitle = "Looking for home improvement quote, ideas or information?",
  servicePreselect = "",
  variant = 'default'
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    streetAddress: '',
    service: servicePreselect,
    message: '',
    marketingConsent: false,
    dataConsent: false
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Solar Power',
    'Air Source Heat Pump',
    'Ground Source Heat Pump',
    'Windows & Doors',
    'Insulation',
    'Roofing & Roofline',
    'Driveways',
    'Kitchens',
    'Bathrooms',
    'Cladding',
    'Decking',
    'Landscaping',
    'Property Maintenance',
    'Other - Please specify in message'
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required';
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.dataConsent) newErrors.dataConsent = 'You must agree to data processing';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // FormSubmit will handle the actual submission
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const formClasses = variant === 'sidebar' 
    ? 'bg-white rounded-xl shadow-lg p-6 border border-gray-200'
    : 'bg-white rounded-2xl shadow-2xl p-8 border border-gray-100';

  return (
    <div id="quote-form" className={formClasses}>
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2B4C9B] mb-3">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">
          {subtitle}
        </p>
        <div className="text-sm font-semibold text-[#2B4C9B] mb-4">
          Areas We Cover: Hampshire – Surrey – Sussex – Dorset & Wiltshire
        </div>
      </div>

      {/* What You Receive */}
      <div className="bg-[#f8fafc] rounded-xl p-6 mb-6">
        <h3 className="text-lg font-bold text-[#2B4C9B] mb-4">What you receive with us?</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span><strong>FREE</strong> Impartial & Expert Advice</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span><strong>FREE</strong> Quote Comparison (up to 5 quotes)</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span><strong>FREE</strong> Remote or Home Consultations</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Highly Vetted Trades People & Companies</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Manufacturer & Supplier Partner</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Dedicated Customer Service</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span><strong>100% Homeowner Protection</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>One Point of Contact</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Access to Funding & Grants</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Property Surveys (Level 1, 2, 3, EPC, Retrofit, Drone)</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Quality Control & Aftercare</span>
          </div>
        </div>
      </div>

      <form 
        action="https://formsubmit.co/office@evohomeimprovements.co.uk" 
        method="POST" 
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Hidden FormSubmit fields */}
        <input type="hidden" name="_subject" value="New Lead from EvoHome Website" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
              }`}
              placeholder="First name"
            />
            {errors.firstName && <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
                errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
              }`}
              placeholder="Last name"
            />
            {errors.lastName && <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
              errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
            }`}
            placeholder="Your email address"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Best Contact Telephone*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
              errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
            }`}
            placeholder="Your phone number"
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Street address*
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            required
            value={formData.streetAddress}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
              errors.streetAddress ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
            }`}
            placeholder="Your street address"
          />
          {errors.streetAddress && <p className="text-red-600 text-xs mt-1">{errors.streetAddress}</p>}
        </div>

        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
            Post Code*
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            required
            value={formData.postcode}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
              errors.postcode ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
            }`}
            placeholder="Your postcode"
          />
          {errors.postcode && <p className="text-red-600 text-xs mt-1">{errors.postcode}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Required*
          </label>
          <p className="text-xs text-gray-500 mb-2">How can we help?</p>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
              errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
            }`}
          >
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20 transition-all duration-200"
            placeholder="Tell us about your project requirements..."
          />
        </div>

        {/* GDPR Compliance */}
        <div className="space-y-3 text-xs text-gray-600">
          <p>
            EvoHome Improvements Ltd is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:
          </p>
          
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="marketingConsent"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="marketingConsent" className="text-xs">
              I agree to receive other communications from EvoHome Improvements Ltd.
            </label>
          </div>

          <p>
            In order to provide you the content requested, we need to store and process your personal data. If you consent to us storing your personal data for this purpose, please tick the checkbox below.
          </p>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="dataConsent"
              name="dataConsent"
              required
              checked={formData.dataConsent}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="dataConsent" className="text-xs">
              I agree to allow EvoHome Improvements Ltd to store and process my personal data.*
            </label>
          </div>
          {errors.dataConsent && <p className="text-red-600 text-xs">{errors.dataConsent}</p>}

          <p>
            You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-8 py-4 bg-[#2B4C9B] text-white font-bold text-lg rounded-lg hover:bg-[#1e3a7a] transition-all duration-300 transform hover:scale-105 shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Trust Signals */}
      {variant !== 'sidebar' && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-6 w-6 text-green-500 mb-1" />
              <p className="text-xs font-semibold text-gray-700">100% Protected</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-6 w-6 text-[#2B4C9B] mb-1" />
              <p className="text-xs font-semibold text-gray-700">Vetted Specialists</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-6 w-6 text-orange-500 mb-1" />
              <p className="text-xs font-semibold text-gray-700">24hr Response</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-6 w-6 text-purple-500 mb-1" />
              <p className="text-xs font-semibold text-gray-700">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversionQuoteForm;