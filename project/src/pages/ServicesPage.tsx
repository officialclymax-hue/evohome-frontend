import React from 'react';
import { Link } from 'react-router-dom';
import { services, getServicesByCategory } from '../data/services';
import { Helmet } from 'react-helmet-async';
import { 
  Sun, 
  Zap, 
  Home, 
  Trees, 
  Wrench,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Phone
} from 'lucide-react';

const ServicesPage = () => {
  const categoryIcons = {
    renewable: Sun,
    improvements: Home,
    garden: Trees,
    maintenance: Wrench
  };

  const categoryNames = {
    renewable: 'Renewable Energy Services',
    improvements: 'Home Improvement Services', 
    garden: 'Garden & Outdoor Services',
    maintenance: 'Property Maintenance Services'
  };

  const categoryDescriptions = {
    renewable: 'Future-proof your home with clean energy solutions that save money and reduce your carbon footprint.',
    improvements: 'Transform your home with quality improvements that enhance comfort, efficiency, and value.',
    garden: 'Create beautiful outdoor spaces that extend your living area and boost property appeal.',
    maintenance: 'Keep your property in perfect condition with reliable maintenance and repair services.'
  };

  const categories = ['renewable', 'improvements', 'garden', 'maintenance'] as const;

  return (
    <>
      <Helmet>
        <title>Home Improvement Services Hampshire, Surrey, Sussex | EvoHome Improvements</title>
        <meta name="description" content="Professional home improvement services across Hampshire, Surrey, Sussex, Dorset & Wiltshire. Solar power, heat pumps, windows, roofing, kitchens, bathrooms & more. Free quotes from vetted specialists." />
        <meta name="keywords" content="home improvement services, Hampshire, Surrey, Sussex, Dorset, Wiltshire, solar power, heat pumps, windows, roofing, kitchens, bathrooms, driveways, insulation" />
        <link rel="canonical" href="https://evohomeimprovements.co.uk/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Home Improvement Services Hampshire, Surrey, Sussex | EvoHome Improvements" />
        <meta property="og:description" content="Professional home improvement services with 100% homeowner protection. Free quotes from vetted specialists across Southern England." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evohomeimprovements.co.uk/services" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Home Improvement Services",
            "description": "Professional home improvement services across Hampshire, Surrey, Sussex, Dorset & Wiltshire",
            "provider": {
              "@type": "LocalBusiness",
              "name": "EvoHome Improvements Ltd",
              "telephone": "0333 004 0195",
              "email": "office@evohomeimprovements.co.uk",
              "areaServed": ["Hampshire", "Surrey", "Sussex", "Dorset", "Wiltshire"]
            },
            "serviceType": [
              "Solar Power Installation",
              "Heat Pump Installation", 
              "Window Installation",
              "Roofing Services",
              "Kitchen Installation",
              "Bathroom Installation",
              "Driveway Installation",
              "Insulation Services"
            ],
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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Home Improvement Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              At <strong>EvoHome Improvements</strong>, we take the stress out of home improvement. Whether you're investing in renewable energy, upgrading your interior, or giving your garden a makeover, we make the process simple, smooth, and tailored to you.
            </p>
            <div className="bg-white/10 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold">
                We're not a directory—you don't just get a list of names. We work closely with you to understand your goals, match you with trusted professionals, and stay involved every step of the way to ensure high standards and fair pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-8">
                What You Can Expect:
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700"><strong>Free, impartial advice</strong> to help you explore your options</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700"><strong>Vetted and trusted professionals</strong> with proven craftsmanship</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700"><strong>Fair, competitive pricing</strong> with no hidden costs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700"><strong>Full project management</strong> from start to finish</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700"><strong>Protection against poor service,</strong> overcharging, and unnecessary upselling</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700"><strong>A relaxed, no-pressure approach</strong>—you're always in control</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                alt="Professional home improvement consultation"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const categoryServices = getServicesByCategory(category);
            const IconComponent = categoryIcons[category];
            
            return (
              <div key={category} className="mb-20">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#2B4C9B] text-white rounded-2xl">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {categoryNames[category]}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {categoryDescriptions[category]}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryServices.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2B4C9B] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                        
                        {service.averageSavings && (
                          <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 mb-4">
                            <p className="text-teal-800 font-semibold text-center text-sm">
                              Average Savings: {service.averageSavings}
                            </p>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <Link
                            to={`/services/${service.slug}`}
                            className="inline-flex items-center space-x-2 text-[#2B4C9B] hover:text-[#1e3a7a] font-bold group"
                          >
                            <span>Learn More & Get Quote</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          {service.installTime && (
                            <span className="text-sm text-gray-500 font-medium">{service.installTime}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Get free expert advice and competitive quotes from vetted specialists across Hampshire, Surrey, Sussex, Dorset, and Wiltshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/request-quote"
              className="px-12 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-xl rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Request Free Quote
            </Link>
            <a
              href="tel:03330040195"
              className="px-12 py-5 border-2 border-white text-white font-bold text-xl rounded-xl hover:bg-white hover:text-[#2B4C9B] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: 0333 004 0195</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;