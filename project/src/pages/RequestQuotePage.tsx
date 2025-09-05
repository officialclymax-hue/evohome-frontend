import React from 'react';
import { Helmet } from 'react-helmet-async';
import MultiStepQuoteForm from '../components/MultiStepQuoteForm';
import { 
  Phone, 
  Shield, 
  Star, 
  CheckCircle,
  MessageCircle,
  Users,
  Award,
  Clock,
  TrendingUp,
  Target,
  Eye,
  UserCheck,
  HeartHandshake
} from 'lucide-react';

const RequestQuotePage = () => {
  const trustPoints = [
    {
      icon: Eye,
      title: 'Vetted & Verified Professionals',
      description: 'Every installer fully vetted through insurance checks, qualification reviews, and real project inspections'
    },
    {
      icon: Target,
      title: 'Project Oversight',
      description: 'We stay involved throughout providing guidance, tracking progress, and resolving issues'
    },
    {
      icon: UserCheck,
      title: 'Real Support, Not Just a Platform',
      description: 'Personal help from our real team before, during, and after your project'
    },
    {
      icon: HeartHandshake,
      title: 'Impartial Expert Advice',
      description: 'Honest guidance without pressure or bias to help you make informed decisions'
    },
    {
      icon: Shield,
      title: '100% Homeowner Protection',
      description: 'Complete protection throughout with comprehensive guarantees and support'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Rigorous quality control and professional warranties on all installations'
    }
  ];

  const realTestimonials = [
    {
      name: 'Dean Butler',
      date: '2025-04-09',
      rating: 5,
      text: 'Excellent service very professional. So impressed I recommend EvoHome to my cousin, he was happy with the job they done. Great communication throughout the process.',
      service: 'Solar Installation',
      savings: '£1,200/year'
    },
    {
      name: 'Michelle Comrie (MJ)', 
      date: '2025-01-16',
      rating: 5,
      text: 'I was unfortunate to have a wall vent incorrectly fitted causing a leak. EvoHome sorted it quickly and professionally with no fuss. Excellent customer service.',
      service: 'Roofing Repair',
      savings: 'Problem solved'
    },
    {
      name: 'Jamie Walsh',
      date: '2024-10-08',
      rating: 5,
      text: 'I\'m a retrofit assessor and recommend EvoHome Improvements highly. This type of service is much needed in the UK home improvement industry.',
      service: 'Heat Pump Assessment',
      savings: 'Professional service'
    }
  ];

  const processSteps = [
    'Submit your project details using our secure form below',
    'Receive expert consultation within 24 hours',
    'Get detailed quotes from vetted local specialists',
    'Choose your preferred installer with our guidance',
    'Enjoy professional installation with full protection'
  ];

  return (
    <>
      <Helmet>
        <title>Request Free Home Improvement Quote Hampshire, Surrey, Sussex | EvoHome Improvements</title>
        <meta name="description" content="Get free home improvement quotes from vetted specialists across Hampshire, Surrey, Sussex, Dorset & Wiltshire. 100% homeowner protection guaranteed. Call 0333 004 0195." />
        <meta name="keywords" content="free home improvement quote, Hampshire, Surrey, Sussex, Dorset, Wiltshire, solar quote, heat pump quote, window quote, vetted specialists" />
        <link rel="canonical" href="https://evohomeimprovements.co.uk/request-quote" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Free Home Improvement Quotes",
            "description": "Get free quotes for home improvements from vetted specialists across Southern England",
            "provider": {
              "@type": "LocalBusiness",
              "name": "EvoHome Improvements Ltd",
              "telephone": "0333 004 0195",
              "email": "office@evohomeimprovements.co.uk",
              "areaServed": ["Hampshire", "Surrey", "Sussex", "Dorset", "Wiltshire"]
            },
            "offers": {
              "@type": "Offer",
              "description": "Free consultation and competitive quotes",
              "price": "0",
              "priceCurrency": "GBP"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "200"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Request a Home Improvement Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Looking for home improvement quotes, ideas or information?
            </p>
            
            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <p className="text-lg font-semibold mb-4">Areas We Cover:</p>
              <p className="text-xl">Hampshire – Surrey – Sussex – Dorset & Wiltshire</p>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-400" />
                <span className="font-semibold">No Obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-400" />
                <span className="font-semibold">24 Hour Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-400" />
                <span className="font-semibold">100% Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <MultiStepQuoteForm />
              
              {/* Process Steps */}
              <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-[#2B4C9B] text-white rounded-full flex-shrink-0 font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Options */}
              <div className="bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Make a Call</h3>
                </div>
                <p className="mb-6 opacity-95 text-sm">
                  Prefer to speak to someone? Give us a call — we're here to help with expert advice.
                </p>
                
                <a
                  href="tel:03330040195"
                  className="block w-full px-6 py-4 bg-white text-[#2B4C9B] font-bold text-center rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-2xl mb-6"
                >
                  0333 004 0195
                </a>
                
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="h-6 w-6" />
                    <h4 className="text-lg font-bold">Send a Message</h4>
                  </div>
                  <a
                    href="mailto:office@evohomeimprovements.co.uk"
                    className="text-teal-200 hover:text-teal-100 font-medium"
                  >
                    office@evohomeimprovements.co.uk
                  </a>
                </div>
              </div>

              {/* Trust Points */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose EvoHome?</h3>
                <div className="space-y-4">
                  {trustPoints.map((point, index) => {
                    const IconComponent = point.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-[#2B4C9B] text-white rounded-lg flex-shrink-0">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{point.title}</p>
                          <p className="text-xs text-gray-600 leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Customer Reviews</h3>
                <div className="space-y-6">
                  {realTestimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-[#2B4C9B] pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-teal-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">{testimonial.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 italic mb-2 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">{testimonial.service}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="h-5 w-5 text-teal-400 fill-current" />
                    <span className="font-bold text-gray-900">4.9/5</span>
                    <span className="text-gray-600">Google Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestQuotePage;