import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Phone, 
  Users, 
  Shield, 
  Star,
  Award,
  Handshake,
  Building,
  Mail
} from 'lucide-react';

const JoinEvoHomePage = () => {
  return (
    <>
      <Helmet>
        <title>Join EvoHome Network - Free Membership for Homeowners & Trade Partners | EvoHome Improvements</title>
        <meta name="description" content="Join EvoHome Improvements network for free. Homeowners get 100% protection, vetted specialists & expert advice. Trade partners access quality leads across Hampshire, Surrey, Sussex." />
        <meta name="keywords" content="join evohome, homeowner membership, trade partner, vetted specialists, home improvement network, Hampshire, Surrey, Sussex, Dorset, Wiltshire" />
        <link rel="canonical" href="https://evohomeimprovements.co.uk/join-evohome" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Join EvoHome Network - Free Membership for Homeowners & Trade Partners" />
        <meta property="og:description" content="Join the UK's most trusted home improvement network. Free for homeowners, professional opportunities for trades." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evohomeimprovements.co.uk/join-evohome" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MembershipProgram",
            "name": "EvoHome Improvements Network",
            "description": "Free membership program connecting homeowners with vetted specialists across Southern England",
            "provider": {
              "@type": "LocalBusiness",
              "name": "EvoHome Improvements Ltd",
              "telephone": "0333 004 0195",
              "email": "office@evohomeimprovements.co.uk"
            },
            "membershipType": ["Homeowner", "Trade Partner", "Product Partner"],
            "benefits": [
              "100% homeowner protection",
              "Vetted specialist network",
              "Free expert advice",
              "Competitive quote comparison"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2B4C9B] to-[#1e3a7a] text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join EvoHome Network Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Connect with trusted professionals, access exclusive benefits, and be part of the UK's leading home improvement network.
            </p>
            <p className="text-lg mb-8 text-teal-200 font-semibold">
              It's Free for Homeowners!
            </p>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Homeowner Membership */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-[#2B4C9B] relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2B4C9B] text-white rounded-full mx-auto mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  Homeowner Member
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#2B4C9B]">FREE</span>
                  <p className="text-gray-600">Forever</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Free impartial advice from home improvement experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Up to 5 competitive quotes from vetted professionals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">100% homeowner protection throughout your project</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Rigorous quality control and project management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Comprehensive aftercare and warranty support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Access to exclusive member discounts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Priority customer support</span>
                  </li>
                </ul>
                
                <div className="h-16 flex items-center">
                  <Link
                    to="/request-quote"
                    className="w-full px-8 py-4 bg-[#2B4C9B] text-white font-bold text-lg rounded-xl hover:bg-[#1e3a7a] transition-colors text-center"
                  > 
                    Join Free Today
                  </Link>
                </div>
              </div>
            </div>

            {/* Trade Member */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mx-auto mb-6">
                  <Handshake className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  Trade Member
                </h3>
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-teal-600">From £99</span>
                  <p className="text-gray-600">per month</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Access to vetted, high-quality leads</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Professional profile on our platform</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Marketing support and co-branding opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Training and certification programs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Business development support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Dedicated account management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Payment protection and dispute resolution</span>
                  </li>
                </ul>
                
                <div className="h-16 flex items-center">
                  <a
                    href="tel:03330040195"
                    className="w-full px-6 py-4 bg-teal-600 text-white font-bold text-center rounded-xl hover:bg-teal-700 transition-colors"
                  >
                    Call to Join
                  </a>
                </div>
              </div>
            </div>

            {/* Product Partner */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-600 text-white rounded-full mx-auto mb-6">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                  Product Partner
                </h3>
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-gray-600">Custom</span>
                  <p className="text-gray-600">pricing</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Direct access to homeowners and installers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Co-marketing opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Product showcase on our platform</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Training programs for installers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Market insights and analytics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Dedicated partnership manager</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Custom integration solutions</span>
                  </li>
                </ul>
                
                <div className="h-16 flex items-center">
                  <a
                    href="mailto:office@evohomeimprovements.co.uk"
                    className="w-full px-6 py-4 bg-gray-600 text-white font-bold text-center rounded-xl hover:bg-gray-700 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join EvoHome */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Join the EvoHome Network?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied members who trust EvoHome for their home improvement needs across Hampshire, Surrey, Sussex, Dorset, and Wiltshire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2B4C9B] text-white rounded-full mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Protected</h3>
              <p className="text-gray-600">Full homeowner protection on every project</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2B4C9B] text-white rounded-full mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vetted Network</h3>
              <p className="text-gray-600">All professionals are DBS-checked and insured</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2B4C9B] text-white rounded-full mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Star Service</h3>
              <p className="text-gray-600">Rated excellent by thousands of customers</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2B4C9B] text-white rounded-full mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Rigorous quality control on all projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2B4C9B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join EvoHome?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your journey with the UK's most trusted home improvement network today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-white text-[#2B4C9B] font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors"
            > 
              Join Free as Homeowner
            </Link>
            <a
              href="tel:03330040195"
              className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-[#2B4C9B] transition-colors"
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

export default JoinEvoHomePage;