import React, { useState } from 'react';
import { CheckCircle, Phone, Shield, Users, Award, Clock, ArrowRight, ArrowLeft, Home, MapPin, User, Mail, Wrench } from 'lucide-react';

interface MultiStepQuoteFormProps {
  title?: string;
  subtitle?: string;
  servicePreselect?: string;
  variant?: 'default' | 'sidebar' | 'popup';
}

const MultiStepQuoteForm: React.FC<MultiStepQuoteFormProps> = ({
  title = "Request a Home Improvement Quote?",
  subtitle = "Looking for home improvement quote, ideas or information?",
  servicePreselect = "",
  variant = 'default'
}) => {
  const [currentStep, setCurrentStep] = useState(1);
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

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {};

    if (step === 1) {
      if (!formData.service) newErrors.service = 'Please select a service';
      if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required';
    } else if (step === 2) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    } else if (step === 3) {
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
      if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
      if (!formData.dataConsent) newErrors.dataConsent = 'You must agree to data processing';
    }

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

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
  // Do NOT call e.preventDefault() here if you want the native form submission to FormSubmit.co
  // The form's 'action' attribute will handle the submission.

  if (!validateStep(3)) {
    e.preventDefault(); // Prevent submission if validation fails
    return;
  }

  setIsSubmitting(true);
  // Let the form submit naturally. FormSubmit's _next field will handle redirection.
  // The window.scrollTo will happen on the thank-you page if needed.
};

  const formClasses = variant === 'sidebar'
    ? 'bg-white rounded-xl shadow-lg p-6 border border-gray-200'
    : 'bg-white rounded-2xl shadow-2xl p-8 border border-gray-100';

  const stepTitles = {
    1: "What service do you need?",
    2: "Your contact details",
    3: "Final details"
  };

  const stepIcons = {
    1: Wrench,
    2: User,
    3: Mail
  };

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

      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((step) => {
          const IconComponent = stepIcons[step as keyof typeof stepIcons];
          return (
            <div key={step} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                step <= currentStep
                  ? 'bg-[#2B4C9B] border-[#2B4C9B] text-white'
                  : 'border-gray-300 text-gray-400'
              }`}>
                <IconComponent className="h-5 w-5" />
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                  step < currentStep ? 'bg-[#2B4C9B]' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">{stepTitles[currentStep as keyof typeof stepTitles]}</h3>
        <p className="text-sm text-gray-500">Step {currentStep} of 3</p>
      </div>

      <form
        action="https://formsubmit.co/office@evohomeimprovements.co.uk"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Hidden FormSubmit fields */}
        <input type="hidden" name="_subject" value="New Lead from EvoHome Website" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />

        {/* Step 1: Service & Location */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <label htmlFor="service" className="block text-sm font-bold text-gray-800 mb-3">
                What service do you need? *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-200 text-lg font-medium ${
                  errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
                }`}
              >
                <option value="">Select your service...</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-red-600 text-sm mt-2 font-medium">{errors.service}</p>}
            </div>

            <div>
              <label htmlFor="postcode" className="block text-sm font-bold text-gray-800 mb-3">
                Your postcode *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  required
                  value={formData.postcode}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-200 text-lg font-medium ${
                    errors.postcode ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
                  }`}
                  placeholder="e.g. SO16 7NP"
                />
              </div>
              {errors.postcode && <p className="text-red-600 text-sm mt-2 font-medium">{errors.postcode}</p>}
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white font-bold text-lg rounded-xl hover:from-[#1e3a7a] hover:to-[#2B4C9B] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Continue</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-gray-800 mb-3">
                  First name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-200 text-lg font-medium ${
                    errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
                  }`}
                  placeholder="First name"
                />
                {errors.firstName && <p className="text-red-600 text-sm mt-2 font-medium">{errors.firstName}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-gray-800 mb-3">
                  Last name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-200 text-lg font-medium ${
                    errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
                  }`}
                  placeholder="Last name"
                />
                {errors.lastName && <p className="text-red-600 text-sm mt-2 font-medium">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-3">
                Best contact telephone *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-200 text-lg font-medium ${
                    errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
                  }`}
                  placeholder="Your phone number"
                />
              </div>
              {errors.phone && <p className="text-red-600 text-sm mt-2 font-medium">{errors.phone}</p>}
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white font-bold text-lg rounded-xl hover:from-[#1e3a7a] hover:to-[#2B4C9B] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Continue</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Final Details & Consent */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
                Email address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-200 text-lg font-medium ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && <p className="text-red-600 text-sm mt-2 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="streetAddress" className="block text-sm font-bold text-gray-800 mb-3">
                Street address *
              </label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  required
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-200 text-lg font-medium ${
                    errors.streetAddress ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20'
                  }`}
                  placeholder="Your street address"
                />
              </div>
              {errors.streetAddress && <p className="text-red-600 text-sm mt-2 font-medium">{errors.streetAddress}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3">
                Additional information
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-[#2B4C9B] focus:ring-2 focus:ring-[#2B4C9B]/20 transition-all duration-200 text-lg"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            {/* GDPR Compliance */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-xs text-gray-600">
              <p className="font-medium text-gray-800">Data Protection & Privacy</p>
              <p>
                EvoHome Improvements Ltd is committed to protecting your privacy. We'll only use your information to provide the services you requested and may occasionally contact you about relevant products and services.
              </p>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="mt-1 rounded border-gray-300 text-[#2B4C9B] focus:ring-[#2B4C9B]"
                />
                <label htmlFor="marketingConsent" className="text-xs leading-relaxed">
                  I agree to receive marketing communications from EvoHome Improvements Ltd.
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="dataConsent"
                  name="dataConsent"
                  required
                  checked={formData.dataConsent}
                  onChange={handleChange}
                  className="mt-1 rounded border-gray-300 text-[#2B4C9B] focus:ring-[#2B4C9B]"
                />
                <label htmlFor="dataConsent" className="text-xs leading-relaxed">
                  I agree to allow EvoHome Improvements Ltd to store and process my personal data for this enquiry. *
                </label>
              </div>
              {errors.dataConsent && <p className="text-red-600 text-xs mt-1 font-medium">{errors.dataConsent}</p>}

              <p className="text-xs">
                You can unsubscribe at any time. For more information, please review our Privacy Policy.
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Quotes'}
              </button>
            </div>
          </div>
        )}
      </form>

      {/* What You Receive - Only show on step 1 */}
      {currentStep === 1 && (
        <div className="mt-8 bg-[#f8fafc] rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#2B4C9B] mb-4">What you receive with us:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span><strong>FREE</strong> Expert Advice</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span><strong>FREE</strong> Quote Comparison</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Vetted Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span><strong>100%</strong> Protection</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>24hr Response</span>
            </div>
          </div>
        </div>
      )}

      {/* Trust Signals - Show on final step */}
      {currentStep === 3 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-6 w-6 text-green-500 mb-1" />
              <p className="text-xs font-bold text-gray-700">100% Protected</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-6 w-6 text-[#2B4C9B] mb-1" />
              <p className="text-xs font-bold text-gray-700">Vetted Specialists</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-6 w-6 text-orange-500 mb-1" />
              <p className="text-xs font-bold text-gray-700">24hr Response</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-6 w-6 text-purple-500 mb-1" />
              <p className="text-xs font-bold text-gray-700">Quality Guaranteed</p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              <strong>Company No. 14881322</strong> • Registered in England & Wales
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepQuoteForm;
