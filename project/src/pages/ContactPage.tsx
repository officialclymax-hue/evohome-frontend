import React, { useState } from 'react';
import { services } from '../data/services'; // Directly import services array
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Message Sent - EvoHome Improvements</title>
        </Helmet>

        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-teal-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <a
              href="tel:03330040195"
              className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-[#2B4C9B] text-white font-semibold rounded-lg hover:bg-[#1e3a7a] transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call: 0333 004 0195</span>
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact EvoHome Improvements - Hampshire, Surrey, Sussex Home Improvement Specialists</title>
        <meta name="description" content="Contact EvoHome Improvements for free home improvement advice. Call 0333 004 0195, email office@evohomeimprovements.co.uk or use our contact form for free quotes across Hampshire, Surrey, Sussex." />
        <meta name="keywords" content="contact evohome, home improvement quotes, Hampshire, Surrey, Sussex, Dorset, Wiltshire, free consultation, 0333 004 0195" />
        <link rel="canonical" href="https://evohomeimprovements.co.uk/contact" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact EvoHome Improvements",
            "description": "Contact EvoHome Improvements for free home improvement advice and quotes",
            "provider": {
              "@type": "LocalBusiness",
              "name": "EvoHome Improvements Ltd",
              "telephone": "0333 004 0195",
              "email": "office@evohomeimprovements.co.uk",
              "areaServed": ["Hampshire", "Surrey", "Sussex", "Dorset", "Wiltshire"]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get in touch with our home improvement experts. We're here to help with your project from start to finish.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#2B4C9B] text-white rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:03330040195" className="text-[#2B4C9B] hover:text-[#1e3a7a] font-medium">
                      0333 004 0195
                    </a>
                    <p className="text-gray-600 text-sm">Free consultation and quotes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#2B4C9B] text-white rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:office@evohomeimprovements.co.uk" className="text-[#2B4C9B] hover:text-[#1e3a7a] font-medium">
                      office@evohomeimprovements.co.uk
                    </a>
                    <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#2B4C9B] text-white rounded-lg flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/447895545248"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2B4C9B] hover:text-[#1e3a7a] font-medium"
                    >
                      07895 545 248
                    </a>
                    <p className="text-gray-600 text-sm">Quick questions and updates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#2B4C9B] text-white rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Coverage Area</h3>
                    <p className="text-gray-700 font-medium">Hampshire, Surrey, Sussex, Dorset, Wiltshire</p>
                    <p className="text-gray-600 text-sm">Plus remote consultations nationwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#2B4C9B] text-white rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Information</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Company Name:</strong> EvoHome Improvements Ltd</p>
                  <p><strong>Company Number:</strong> 14881322</p>
                  <p><strong>Registered:</strong> England & Wales</p>
                  <p><strong>Industry:</strong> Home Improvements & Renewable Energy</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                <form
                  action="https://formsubmit.co/office@evohomeimprovements.co.uk"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Hidden FormSubmit fields */}
                  <input type="hidden" name="_subject" value="New Contact from EvoHome Website" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B4C9B] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B4C9B] focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B4C9B] focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        required
                        value={formData.postcode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B4C9B] focus:border-transparent"
                        placeholder="Enter your postcode"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B4C9B] focus:border-transparent"
                    >
                      <option value="">Select a service (optional)</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2B4C9B] focus:border-transparent"
                      placeholder="Tell us about your project or ask any questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#2B4C9B] text-white font-bold text-lg rounded-lg hover:bg-[#1e3a7a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by EvoHome Improvements.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
