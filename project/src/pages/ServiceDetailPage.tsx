import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug, Service } from '../data/services';
import { getPrimaryCounties, County } from '../data/counties';
import { Helmet } from 'react-helmet-async';
import ConversionQuoteForm from '../components/ConversionQuoteForm';
import { 
  CheckCircle, 
  Clock, 
  Phone, 
  MapPin,
  ArrowRight,
  Shield,
  Users,
  Award,
  TrendingUp,
  Star,
  ExternalLink,
  Wrench,
  Home,
  Zap
} from 'lucide-react';

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service: Service | undefined = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const primaryCounties: County[] = getPrimaryCounties();

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[#2B4C9B] hover:underline">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  const processSteps = [
    'Free home assessment and expert consultation',
    'Custom design and specification for your property',
    'Professional installation by vetted specialists',
    'Quality checks and comprehensive aftercare support'
  ];

  const faqs = [
    {
      question: `Is my home suitable for ${service.name.toLowerCase()}?`,
      answer: `Most homes across Hampshire, Surrey, Sussex, Dorset, and Wiltshire are suitable for ${service.name.toLowerCase()}. Our experts will assess your property during the free consultation to determine the best approach for your specific situation.`
    },
    {
      question: 'How long does the installation take?',
      answer: `${service.installTime || 'Installation time varies'}. We'll provide an accurate timeline during your consultation based on your specific requirements and property.`
    },
    {
      question: 'What warranties are included?',
      answer: `All installations come with manufacturer warranties ${service.warranty ? `(${service.warranty})` : ''} plus our workmanship guarantee. We provide comprehensive aftercare support throughout the warranty period.`
    },
    {
      question: 'Do you handle planning permissions?',
      answer: 'We guide you through any planning requirements and can assist with applications where needed. Most of our services fall under permitted development rights.'
    },
    {
      question: 'What makes EvoHome different?',
      answer: 'We provide complete project oversight, vetted specialists, impartial advice, and ongoing support. You get peace of mind from start to finish with real people, not just a platform.'
    }
  ];

  // Use service-specific FAQs if available, otherwise use default ones
  const displayFaqs = service.faqs && service.faqs.length > 0 ? service.faqs : faqs;
  return (
    <>
      <Helmet>
        <title>{service.name} Installation Hampshire, Surrey, Sussex | EvoHome Improvements</title>
        <meta name="description" content={`Professional ${service.name.toLowerCase()} installation across Hampshire, Surrey, Sussex, Dorset & Wiltshire. Get free quotes from vetted specialists. ${service.description}`} />
        <meta name="keywords" content={`${service.name.toLowerCase()}, installation, Hampshire, Surrey, Sussex, Dorset, Wiltshire, free quotes, vetted specialists`} />
        <link rel="canonical" href={`https://evohomeimprovements.co.uk/services/${service.slug}`} />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${service.name} Installation`,
            "description": service.longDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "EvoHome Improvements Ltd",
              "telephone": "0333 004 0195",
              "areaServed": ["Hampshire", "Surrey", "Sussex", "Dorset", "Wiltshire"]
            },
            "offers": {
              "@type": "Offer",
              "description": "Free consultation and competitive quotes",
              "price": "0",
              "priceCurrency": "GBP"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {service.name}
              </h1>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                {service.longDescription}
              </p>
              
              {service.averageSavings && (
                <div className="bg-teal-500/20 border border-teal-400 rounded-xl p-4 mb-8">
                  <p className="text-teal-100 font-bold text-lg text-center">
                    💰 Average Customer Savings: {service.averageSavings}
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href="tel:03330040195"
                  className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-[#2B4C9B] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>0333 004 0195</span>
                </a>
              </div>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Benefits of {service.name}
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-6">
                {service.installTime && (
                  <div className="flex items-center space-x-4">
                    <Clock className="h-8 w-8 text-[#2B4C9B]" />
                    <div>
                      <p className="font-bold text-gray-900">Installation Time</p>
                      <p className="text-gray-600">{service.installTime}</p>
                    </div>
                  </div>
                )}
                {service.warranty && (
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-[#2B4C9B]" />
                    <div>
                      <p className="font-bold text-gray-900">Warranty</p>
                      <p className="text-gray-600">{service.warranty}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center space-x-4">
                  <Shield className="h-8 w-8 text-[#2B4C9B]" />
                  <div>
                    <p className="font-bold text-gray-900">Protection</p>
                    <p className="text-gray-600">100% homeowner protection included</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-[#2B4C9B]" />
                  <div>
                    <p className="font-bold text-gray-900">Specialists</p>
                    <p className="text-gray-600">Vetted professionals with proven track records</p>
                  </div>
                </div>
              </div>
              
              {service.averageSavings && (
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-teal-600" />
                      <span className="font-bold text-teal-800">Average Savings: {service.averageSavings}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      {service.whatIsIt && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-8">
              What is a {service.name}?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed">{service.whatIsIt}</p>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {service.howItWorksSteps && (
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
                How does a {service.name} work?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {service.name}s operate using a combination of solar energy and heat pump technology:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.howItWorksSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table Section */}
      {service.comparisonTable && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
                SAHP vs. Traditional Water Heating Systems
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Feature</th>
                      <th className="px-6 py-4 text-center font-bold">Solar Assisted Heat Pump</th>
                      <th className="px-6 py-4 text-center font-bold">Standard Electric Water Heater</th>
                      <th className="px-6 py-4 text-center font-bold">Solar Thermal System</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.comparisonTable.map((row, index) => (
                      <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.sahp}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.electric}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{row.solar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      {service.whyChooseContent && (
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-8">
              Why Choose a {service.name}?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed">{service.whyChooseContent}</p>
            </div>
          </div>
        </section>
      )}

      {/* How EvoHome Helps Section */}
      {service.howEvoHomeHelpsContent && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-8">
              How does EvoHome Improvements help?
            </h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{service.howEvoHomeHelpsContent}</p>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Want to find out more? Contact us today for a free consultation
                </p>
                <a
                  href="tel:03330040195"
                  className="text-3xl font-bold text-[#2B4C9B] hover:text-[#1e3a7a] transition-colors"
                >
                  0333 004 0195
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Articles Section */}
      {service.relatedArticles && service.relatedArticles.length > 0 && (
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
                Related Articles (EvoHome)
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.relatedArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-[#2B4C9B] text-white text-xs font-semibold rounded-full mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-[#2B4C9B] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.description}</p>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="inline-flex items-center space-x-2 text-[#2B4C9B] hover:text-[#1e3a7a] font-bold text-sm"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* External Resources Section */}
      {service.externalResources && service.externalResources.length > 0 && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-8">
              Resources (External Links)
            </h2>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="space-y-4">
                {service.externalResources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#2B4C9B] hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <ExternalLink className="h-5 w-5 text-[#2B4C9B] group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-gray-900 group-hover:text-[#2B4C9B] transition-colors">
                      {resource.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures your {service.name.toLowerCase()} installation is smooth, professional, and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] transform -translate-x-8"></div>
                  )}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {service.serviceTypes && service.serviceTypes.length > 0 && (
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
                Types of {service.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect solution for your home and requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.serviceTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white rounded-2xl flex items-center justify-center mb-6">
                    <Wrench className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Materials Section */}
      {service.materials && service.materials.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B4C9B] mb-6">
                Materials Available
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from premium materials designed for UK homes and weather conditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {service.materials.map((material, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white rounded-xl flex items-center justify-center">
                        <Home className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{material.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{material.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-green-700 mb-3">Advantages:</h4>
                        <div className="space-y-2">
                          {material.pros.map((pro, proIndex) => (
                            <div key={proIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-sm text-gray-700">{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-orange-700 mb-3">Considerations:</h4>
                        <div className="space-y-2">
                          {material.cons.map((con, conIndex) => (
                            <div key={conIndex} className="flex items-start space-x-2">
                              <div className="w-4 h-4 bg-orange-200 rounded-full flex-shrink-0 mt-1"></div>
                              <span className="text-sm text-gray-700">{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 font-semibold text-sm">
                        <strong>Best For:</strong> {material.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {displayFaqs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <summary className="w-full px-6 py-4 text-left font-semibold text-[#2B4C9B] hover:bg-gray-50 transition-colors flex items-center justify-between cursor-pointer">
                  <span>{faq.question}</span>
                  <ArrowRight className="h-5 w-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 py-4 text-gray-700 border-t border-gray-200 bg-gray-50">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {service.name} Services Across Southern England
            </h2>
            <p className="text-xl text-gray-600">
              We connect you with trusted {service.name.toLowerCase()} specialists in your local area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {primaryCounties.map((county) => (
              <Link
                key={county.slug}
                to={`/${service.slug}/${county.slug}`}
                className="flex items-center space-x-2 p-4 bg-white rounded-lg hover:bg-[#2B4C9B] hover:text-white transition-all duration-300 group shadow-md hover:shadow-lg border border-gray-200"
              >
                <MapPin className="h-4 w-4 text-[#2B4C9B] group-hover:text-white" />
                <span className="font-medium">{county.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              We also provide remote consultations nationwide.
            </p>
            <a
              href="tel:03330040195"
              className="inline-flex items-center space-x-2 text-[#2B4C9B] hover:text-[#1e3a7a] font-bold"
            >
              <Phone className="h-4 w-4" />
              <span>Call 0333 004 0195 for other areas</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for {service.name}?
              </h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Get your free consultation and competitive quotes from vetted {service.name.toLowerCase()} specialists in your area.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-teal-200" />
                  <span className="text-lg">Vetted, qualified specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-teal-200" />
                  <span className="text-lg">100% homeowner protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-teal-200" />
                  <span className="text-lg">Quality guaranteed installations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-teal-200" />
                  <span className="text-lg">24-hour response guarantee</span>
                </div>
              </div>
            </div>
            
            <div>
              <ConversionQuoteForm
                title={`Get Your Free ${service.name} Quote`}
                subtitle="Connect with vetted specialists in your area"
                servicePreselect={service.name}
                variant="sidebar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;