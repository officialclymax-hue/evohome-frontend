import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PremiumHero from '../components/PremiumHero';
import MultiStepQuoteForm from '../components/MultiStepQuoteForm';
import { useServices, getFeaturedServices } from '../data/services'; // Import useServices and getFeaturedServices
import { useCounties } from '../data/counties'; // Import useCounties
import {
  Shield,
  Users,
  CheckCircle,
  Star,
  Award,
  ArrowRight,
  Phone,
  Clock,
  TrendingUp,
  Target,
  Eye,
  UserCheck,
  HeartHandshake,
  ShoppingCart,
  Home,
  Wrench,
  Trees,
  Sun,
  Building,
  Zap,
  ThumbsUp,
  Calendar,
  FileText,
  MessageCircle,
  Sparkles,
  Gift,
  Timer
} from 'lucide-react';

const HomePage = () => {
  // Fetch services and counties using the new hooks
  const { services, loading: servicesLoading, error: servicesError } = useServices();
  const { counties, loading: countiesLoading, error: countiesError } = useCounties();

  // Get featured services from the fetched data
  const featuredServices = servicesLoading || servicesError ? [] : getFeaturedServices(services);

  // Hardcoded testimonials (these are not dynamic from backend yet)
  const realTestimonials = [
    {
      name: 'Dean Butler',
      date: '2025-04-09',
      rating: 5,
      text: 'Excellent service very professional. So impressed I recommend EvoHome to my cousin, he was happy with the job they done. Great communication throughout the process.',
      service: 'Solar Installation',
      verified: true,
      location: 'Hampshire'
    },
    {
      name: 'Michelle Comrie (MJ)',
      date: '2025-01-16',
      rating: 5,
      text: 'I was unfortunate to have a wall vent incorrectly fitted causing a leak. EvoHome sorted it quickly and professionally with no fuss. Excellent customer service.',
      service: 'Roofing Repair',
      verified: true,
      location: 'Surrey'
    },
    {
      name: 'Jamie Walsh',
      date: '2024-10-08',
      rating: 5,
      text: 'I\'m a retrofit assessor and recommend EvoHome Improvements highly. This type of service is much needed in the UK home improvement industry.',
      service: 'Heat Pump Assessment',
      verified: true,
      location: 'Sussex'
    },
    {
      name: 'Tyler Heath',
      date: '2024-10-03',
      rating: 5,
      text: 'This is excellent, all I have to do is focus on the standard of work, all of the marketing, sales, customer service and payments EvoHome handles.',
      service: 'Trade Partner',
      verified: true,
      location: 'Dorset'
    }
  ];

  const whyChooseEvoHome = [
    {
      icon: Eye,
      title: 'Vetted & Verified Professionals',
      description: 'Every installer is fully vetted through insurance checks, qualification reviews, reference calls, and real-life project inspections.',
      highlight: 'Beyond online reviews'
    },
    {
      icon: Target,
      title: 'Complete Project Oversight',
      description: 'We stay involved throughout your project. From quote to final walkthrough, our team provides guidance and tracks progress.',
      highlight: 'Not just matchmaking'
    },
    {
      icon: HeartHandshake,
      title: 'Impartial Expert Advice',
      description: 'Get honest, expert guidance without pressure or bias. We help you make informed decisions that are right for your home and budget.',
      highlight: 'No sales pressure'
    },
    {
      icon: UserCheck,
      title: 'Real Support, Not Just a Platform',
      description: 'Our real team supports you with personal help before, during, and after your project. You\'re never left unsupported.',
      highlight: 'Human support'
    },
    {
      icon: Shield,
      title: '100% Homeowner Protection',
      description: 'Complete protection throughout with comprehensive guarantees, secure payments, and dispute resolution support.',
      highlight: 'Total peace of mind'
    },
    {
      icon: ShoppingCart,
      title: 'Trusted Products & Solutions',
      description: 'We work with proven product providers who meet strict standards for quality and performance. Only reliable, long-lasting solutions.',
      highlight: 'Quality guaranteed'
    }
  ];

  const evoHomeServices = [
    {
      title: 'EvoHome Improvements',
      description: 'From initial planning and design through to sourcing multiple competitive quotes and coordinating vetted local trades, we provide a single, trusted point of contact—delivering quality craftsmanship on projects of any size.',
      cta: 'EXPLORE OUR SERVICES',
      link: '/services',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      icon: Building
    },
    {
      title: 'EvoHome Maintenance',
      description: 'From routine upkeep to urgent repairs, we handle all your property maintenance needs with a single, trusted point of contact—delivering reliable, high-quality service.',
      cta: 'MAINTENANCE SERVICES',
      link: '/services/property-maintenance',
      image: 'https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg',
      icon: Wrench
    },
    {
      title: 'EvoHome & Garden',
      description: 'From essential home items to garden must-haves, we offer a carefully curated range of quality products—all in one place—to help you create and maintain your perfect living space.',
      cta: 'GARDEN SERVICES',
      link: '/services',
      image: 'https://images.pexels.com/photos/1396131/pexels-photo-1396131.jpeg',
      icon: Trees
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'Free remote or in-home consultation to understand your goals, budget, and requirements. Expert advisors provide honest, impartial guidance.',
      icon: Target,
      time: 'Within 24 hours'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Working with you to design and plan every detail. From measurements to materials and layout, everything is tailored for perfect results.',
      icon: FileText,
      time: '24-48 hours'
    },
    {
      step: '03',
      title: 'Quote Comparison',
      description: 'Source and compare up to 5 competitive quotes from vetted professionals. Exclusive deals and better pricing through our partnerships.',
      icon: TrendingUp,
      time: '48-72 hours'
    },
    {
      step: '04',
      title: 'Protected Installation',
      description: 'Professional installation with full project oversight, quality checks, and 100% homeowner protection throughout.',
      icon: Shield,
      time: 'As scheduled'
    }
  ];

  const interactiveFeatures = [
    {
      icon: Gift,
      title: 'Instant Quote Calculator',
      description: 'Get rough estimates instantly',
      action: () => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: Timer,
      title: '24-Hour Response',
      description: 'Guaranteed expert callback',
      action: () => window.open('tel:03330040195')
    },
    {
      icon: Sparkles,
      title: 'Smart Matching',
      description: 'AI-powered installer matching',
      action: () => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  // Handle loading and error states for services and counties
  if (servicesLoading || countiesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-20">
        <p className="text-xl text-gray-700">Loading homepage content...</p>
      </div>
    );
  }

  if (servicesError || countiesError) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-20">
        <p className="text-xl text-red-600">Error loading content: {servicesError || countiesError}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>EvoHome Improvements - The Smarter Way to Improve Your Home</title>
        <meta name="description" content="Home Improvement in Hampshire and Surrounding Area. Professional home improvements with 100% homeowner protection. Free quotes from vetted specialists." />
        <meta name="keywords" content="home improvements, Hampshire, Surrey, Sussex, Dorset, Wiltshire, solar power, heat pumps, windows, roofing" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EvoHome Improvements Ltd",
            "alternateName": "EvoHome",
            "description": "The Smarter Way to Improve Your Home - Home Improvement in Hampshire and Surrounding Area",
            "url": "https://evohomeimprovements.co.uk",
            "logo": "https://evohomeimprovements.co.uk/8350661c-0317-4d61-939e-72d9dba47c95.JPG",
            "image": "https://evohomeimprovements.co.uk/8350661c-0317-4d61-939e-72d9dba47c95.JPG",
            "telephone": "0333 004 0195",
            "email": "office@evohomeimprovements.co.uk",
            "priceRange": "££",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "GBP",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB",
              "addressRegion": "Hampshire",
              "addressLocality": "Southampton"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.9097",
              "longitude": "-1.4044"
            },
            "areaServed": ["Hampshire", "Surrey", "Sussex", "Dorset", "Wiltshire"],
            "serviceType": [
              "Solar Power Installation",
              "Air Source Heat Pump Installation",
              "Ground Source Heat Pump Installation",
              "Window Installation",
              "Door Installation",
              "Roofing Services",
              "Insulation Services",
              "Kitchen Installation",
              "Bathroom Installation",
              "Driveway Installation",
              "Property Maintenance"
            ],
            "foundingDate": "1990",
            "legalName": "EvoHome Improvements Ltd",
            "taxID": "14881322",
            "vatID": "GB123456789",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home Improvement Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Solar Power Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Heat Pump Installation"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "200",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Dean Butler"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Excellent service very professional. So impressed I recommend EvoHome to my cousin, he was happy with the job they done."
              }
            ],
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 09:00-16:00"
            ],
            "sameAs": [
              "https://www.facebook.com/evohomeimprovements",
              "https://www.instagram.com/evohomeimprovements"
            ]
          })}
        </script>
      </Helmet>

      {/* Premium Hero */}
      <PremiumHero />

      {/* Quote Form Section - Moved Up */}
      <section className="py-20 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MultiStepQuoteForm />
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
              Smart Features for Smart Homeowners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of home improvements with our intelligent tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {interactiveFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  onClick={feature.action}
                  className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-teal-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Core Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="bg-[#f8fafc] rounded-xl p-4 text-center border border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg">
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">FREE Expert Advice</p>
            </div>
            <div className="bg-[#f8fafc] rounded-xl p-4 text-center border border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg">
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">FREE Quote Comparison</p>
            </div>
            <div className="bg-[#f8fafc] rounded-xl p-4 text-center border border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg">
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">Vetted Specialists</p>
            </div>
            <div className="bg-[#f8fafc] rounded-xl p-4 text-center border border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg">
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">100% Protection</p>
            </div>
            <div className="bg-[#f8fafc] rounded-xl p-4 text-center border border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg">
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">Quality Control</p>
            </div>
            <div className="bg-[#f8fafc] rounded-xl p-4 text-center border border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg">
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">24hr Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C9B] mb-6">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From renewable energy to home improvements across Hampshire & surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {service.averageSavings && (
                    <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Saves {service.averageSavings}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#2B4C9B] mb-3 group-hover:text-[#1e3a7a] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 text-[#2B4C9B] hover:text-[#1e3a7a] font-bold text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>LEARN MORE & GET QUOTE</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white font-bold text-lg rounded-xl hover:from-[#1e3a7a] hover:to-[#2B4C9B] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              VIEW ALL OF OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* How EvoHome Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C9B] mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Simple process. Expert guidance. Complete protection.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1396118/pexels-photo-1396118.jpeg"
                alt="Home improvement consultation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-bold text-[#2B4C9B]">{step.step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2B4C9B] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">{step.description}</p>
                  <div className="text-sm font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block">
                    {step.time}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose EvoHome - Detailed */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C9B] mb-6">
              Why Choose EvoHome?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              No directories. No spam. Just reliable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseEvoHome.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">
                        {benefit.highlight}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2B4C9B] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EvoHome Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C9B] mb-6">
              EvoHome Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Trusted solutions for every part of home ownership.
            </p>
            <p className="text-lg text-gray-700 max-w-5xl mx-auto">
              At EvoHome, we help homeowners across Hampshire and surrounding areas take care of their homes with confidence. Whether you're upgrading, maintaining, or enhancing your living space, EvoHome offers trusted services and carefully selected products you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {evoHomeServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#2B4C9B] text-white p-3 rounded-xl">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2B4C9B] mb-4 group-hover:text-[#1e3a7a] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white font-bold rounded-xl hover:from-[#1e3a7a] hover:to-[#2B4C9B] transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:translate-x-1"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C9B] mb-6">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real reviews from real customers across Hampshire & surrounding areas.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-teal-500 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">from Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {realTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-teal-500 fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-xs text-blue-600 font-bold">Verified</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.service} • {testimonial.location}</p>
                  <p className="text-xs text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonial Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#2B4C9B] mb-6">Video Testimonial</h3>
              <p className="text-lg text-gray-600 mb-6">
                Hear directly from our customers about their experience with EvoHome Improvements.
              </p>
              <div className="flex items-center space-x-4">
                <ThumbsUp className="h-6 w-6 text-green-500" />
                <span className="font-bold text-gray-900">100% Customer Satisfaction</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg font-bold">Customer Success Story</p>
                  <p className="text-sm opacity-75">Real homeowner experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C9B] mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality workmanship from our vetted specialist network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg', title: 'Solar Installation', location: 'Hampshire', type: 'Renewable Energy' },
              { image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', title: 'Window Replacement', location: 'Surrey', type: 'Energy Efficiency' },
              { image: 'https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg', title: 'Block Paving Driveway', location: 'Sussex', type: 'Outdoor Improvement' },
              { image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg', title: 'Kitchen Renovation', location: 'Dorset', type: 'Interior Design' }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-blue-200">{project.location}</p>
                    <p className="text-xs text-gray-300">{project.type}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    Completed
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="px-8 py-4 bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white font-bold text-lg rounded-xl hover:from-[#1e3a7a] hover:to-[#2B4C9B] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B4C9B] mb-6">
              Expert Advice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert guides, tips, and insights for your home improvement projects.
            </p>
            <Link
              to="/blog"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white font-bold text-lg rounded-xl hover:from-[#1e3a7a] hover:to-[#2B4C9B] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Visit the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Phone className="h-12 w-12" />
              </div>
              <h3 className="text-3xl font-bold text-[#2B4C9B] mb-4">Make a Call</h3>
              <p className="text-lg text-gray-600 mb-6">
                Prefer to speak to someone? Give us a call — we're here to help with expert advice.
              </p>
              <a
                href="tel:03330040195"
                className="text-4xl font-bold text-[#2B4C9B] hover:text-[#1e3a7a] transition-colors"
              >
                0333 004 0195
              </a>
              <div className="mt-4 text-sm text-gray-500">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Fri 8AM-6PM, Sat 9AM-4PM</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <MessageCircle className="h-12 w-12" />
              </div>
              <h3 className="text-3xl font-bold text-[#2B4C9B] mb-4">Send a Message</h3>
              <p className="text-lg text-gray-600 mb-6">
                Email us your questions or project details for expert advice.
              </p>
              <a
                href="mailto:office@evohomeimprovements.co.uk"
                className="text-2xl font-bold text-[#2B4C9B] hover:text-[#1e3a7a] transition-colors break-all"
              >
                OFFICE@EVOHOMEIMPROVEMENTS.CO.UK
              </a>
              <div className="mt-4 text-sm text-gray-500">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>24-hour response guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
