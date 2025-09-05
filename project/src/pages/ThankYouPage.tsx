import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CheckCircle, Phone, MessageCircle, Home, Clock, Users, Award, Star } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Thank You - Your Quote Request Received | EvoHome Improvements</title>
        <meta name="description" content="Thank you for your enquiry. We'll be in touch within 24 hours with expert advice and competitive quotes from vetted specialists." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-8">
            <CheckCircle className="h-14 w-14 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your quote request has been submitted successfully. We'll be in touch within <strong>24 hours</strong> with expert advice and competitive quotes from vetted specialists in your area.
          </p>
          
          {/* What Happens Next */}
          <div className="bg-[#f8fafc] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#2B4C9B] text-white rounded-full flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Review (Within 2 hours)</p>
                  <p className="text-sm text-gray-600">We'll review your requirements and match you with suitable specialists in your area</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#2B4C9B] text-white rounded-full flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Personal Consultation (24 hours)</p>
                  <p className="text-sm text-gray-600">One of our experts will call to discuss your project and provide impartial advice</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#2B4C9B] text-white rounded-full flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Receive Competitive Quotes (48 hours)</p>
                  <p className="text-sm text-gray-600">Get detailed quotes from vetted professionals with transparent pricing</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#2B4C9B] text-white rounded-full flex-shrink-0 font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Protected Installation</p>
                  <p className="text-sm text-gray-600">Professional installation with full project oversight and homeowner protection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Immediate Contact Options */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need to Speak to Someone Now?</h3>
            <p className="text-gray-600 mb-6">Our experts are available to discuss your project and answer any questions.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:03330040195"
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                <span>Call: 0333 004 0195</span>
              </a>
              
              <a
                href="mailto:office@evohomeimprovements.co.uk"
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-[#2B4C9B] mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">Vetted Specialists</p>
              <p className="text-xs text-gray-600">Fully Qualified</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">100% Protected</p>
              <p className="text-xs text-gray-600">Full Coverage</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">4.9★ Rating</p>
              <p className="text-xs text-gray-600">Google Reviews</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Clock className="h-5 w-5 text-[#2B4C9B]" />
              <h4 className="font-bold text-gray-900">Business Hours</h4>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="pt-6 border-t border-gray-200">
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 text-[#2B4C9B] hover:text-[#1e3a7a] font-semibold transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Return to Homepage</span>
            </Link>
          </div>
          
          {/* Company Info */}
          <div className="mt-6 text-xs text-gray-500">
            <p><strong>EvoHome Improvements Ltd</strong> • Company No. 14881322 • Registered in England & Wales</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;