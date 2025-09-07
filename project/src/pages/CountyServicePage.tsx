import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useServices, getServiceBySlug } from '../data/services'; // Import useServices and getServiceBySlug
import { useCounties, getCountyBySlug } from '../data/counties'; // Import useCounties and getCountyBySlug
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Phone,
  MapPin,
  Star,
  Shield,
  Users,
  Award
} from 'lucide-react';

const CountyServicePage = () => {
  const { serviceSlug, countySlug } = useParams<{ serviceSlug: string; countySlug: string }>();

  // Use the hooks to fetch all services and counties
  const { services, loading: servicesLoading, error: servicesError } = useServices();
  const { counties, loading: countiesLoading, error: countiesError } = useCounties();

  // Find the specific service and county from the fetched data
  const service = servicesLoading || servicesError ? undefined : getServiceBySlug(services, serviceSlug || '');
  const county = countiesLoading || countiesError ? undefined : getCountyBySlug(counties, countySlug || '');

  // Handle loading states
  if (servicesLoading || countiesLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-20">
        <p className="text-xl text-gray-700">Loading service and county details...</p>
      </div>
    );
  }

  // Handle error states
  if (servicesError || countiesError) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-20">
        <p className="text-xl text-red-600">Error loading data: {servicesError || countiesError}</p>
      </div>
    );
  }

  // Handle service or county not found after loading
  if (!service || !county) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <Link to="/services" className="text-[#2B4C9B] hover:underline">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  // Generate unique content based on service and county
  const generateLocalContent = () => {
    const localBenefits = [
      `Expert ${service.name.toLowerCase()} installation throughout ${county.name}`,
      `Local ${county.name} tradespeople with proven track records`,
      `Fast response times across all ${county.name} areas`,
      `Comprehensive aftercare support in ${county.name}`,
      `Competitive pricing for ${county.name} residents`
    ];

    const localDescription = `Looking for professional ${service.name.toLowerCase()} services in ${county.name}? EvoHome Improvements connects homeowners across ${county.name} with vetted, trusted specialists who deliver exceptional results. Our ${service.name.toLowerCase()} experts understand the unique requirements of ${county.name} properties and provide tailored solutions that meet local building regulations and weather conditions.`;

    return { localBenefits, localDescription };
  };

  const { localBenefits, localDescription } = generateLocalContent();

  return (
    <>
      <Helmet>
        <title>{service.name} {county.name} - Professional Installation | EvoHome Improvements</title>
        <meta name="description" content={`Professional ${service.name.toLowerCase()} services in ${county.name}. Get free quotes from vetted specialists. 100% homeowner protection. Call 0333 004 0195.`} />
        <meta name="keywords" content={`${service.name.toLowerCase()}, ${county.name}, installation, free quotes, vetted specialists, home improvements`} />
        <link rel="canonical" href={`https://evohomeimprovements.co.uk/${service.slug}/${county.slug}`} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${service.name} in ${county.name}`,
            "description": localDescription,
            "provider": {
              "@type": "LocalBusiness",
              "name": "EvoHome Improvements Ltd",
              "telephone": "0333 004 0195",
              "areaServed": county.name
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
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-teal-200" />
              <span className="text-teal-200 font-semibold">{county.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.name} in {county.name}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {localDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Quote for {service.name} in {county.name}
              </Link>
              <a
                href="tel:03330040195"
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-[#2B4C9B] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>0333 004 0195</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose EvoHome for {service.name} in {county.name}?
              </h2>
              <div className="space-y-4">
                {localBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={service.image}
                alt={`${service.name} in ${county.name}`}
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by {county.name} Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2B4C9B] text-white rounded-full mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Protected</h3>
              <p className="text-gray-600">Full homeowner protection on every {county.name} project</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2B4C9B] text-white rounded-full mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Experts</h3>
              <p className="text-gray-600">Vetted {service.name.toLowerCase()} specialists serving {county.name}</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2B4C9B] text-white rounded-full mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Rigorous quality control on all {county.name} installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {service.name} Services in {county.name}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our {service.name.toLowerCase()} specialists in {county.name} are carefully vetted to ensure they meet our high standards for quality, reliability, and customer service. Whether you're in a rural area or town center of {county.name}, we connect you with local experts who understand your specific needs.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What's Included:
              </h3>
              <div className="space-y-3">
                {service.benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Free {service.name} Quote
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to start your {service.name.toLowerCase()} project in {county.name}? Get up to 5 free quotes from vetted local specialists.
              </p>

              <div className="space-y-4">
                <Link
                  to="/request-quote"
                  className="block w-full px-6 py-4 bg-[#2B4C9B] text-white font-bold text-center rounded-lg hover:bg-[#1e3a7a] transition-colors"
                >
                  Request Free Quote
                </Link>

                <a
                  href="tel:03330040195"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-4 border-2 border-[#2B4C9B] text-[#2B4C9B] font-bold rounded-lg hover:bg-[#2B4C9B] hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call: 0333 004 0195</span>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Star className="h-4 w-4 text-teal-400 fill-current" />
                  <span>Rated 4.9/5 by {county.name} customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2B4C9B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for {service.name} in {county.name}?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied {county.name} homeowners who've trusted EvoHome with their {service.name.toLowerCase()} projects.
          </p>
          <Link
            to="/request-quote"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default CountyServicePage;
