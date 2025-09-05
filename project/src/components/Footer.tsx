import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Shield, Award, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Request Quote', href: '/request-quote' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Join EvoHome', href: '/join-evohome' }
  ];

  const popularServices = [
    { name: 'Solar Power', href: '/services/solar-power' },
    { name: 'Air Source Heat Pump', href: '/services/air-source-heat-pump' },
    { name: 'Ground Source Heat Pump', href: '/services/ground-source-heat-pump' },
    { name: 'Windows & Doors', href: '/services/windows-doors' },
    { name: 'Roofing & Roofline', href: '/services/roofing' },
    { name: 'Insulation', href: '/services/insulation' },
    { name: 'Driveways', href: '/services/driveways' },
    { name: 'Kitchens', href: '/services/kitchens' }
  ];

  const coverageAreas = [
    'Hampshire', 'Surrey', 'Sussex', 'Dorset', 'Wiltshire'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Quick Actions Bar */}
      <div className="bg-[#2B4C9B] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03330040195"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-[#2B4C9B] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                <span>Call: 0333 004 0195</span>
              </a>
              <a
                href="mailto:office@evohomeimprovements.co.uk"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="h-5 w-5" />
                <span>Send a Message</span>
              </a>
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/8350661c-0317-4d61-939e-72d9dba47c95.JPG" 
                alt="EvoHome Improvements"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Smarter Way to Improve Your Home. Professional home improvements across Hampshire, Surrey, Sussex, Dorset, and Wiltshire.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">100% Homeowner Protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Vetted Specialists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-teal-400" />
                <span className="text-sm font-medium">4.9/5 Google Rating</span>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-400">
              <p><strong className="text-white">EvoHome Improvements Ltd</strong></p>
              <p>Company No. <strong className="text-white">14881322</strong></p>
              <p>Registered in England & Wales</p>
              <p>Founded on 30+ years industry expertise</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors hover:underline font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Popular Services</h3>
            <ul className="space-y-3">
              {popularServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-white transition-colors hover:underline font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Coverage */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact & Coverage</h3>
            <div className="space-y-4 mb-6">
              <a 
                href="tel:03330040195" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">0333 004 0195</span>
              </a>
              <a 
                href="mailto:office@evohomeimprovements.co.uk" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">office@evohomeimprovements.co.uk</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Southern England</span>
              </div>
            </div>

            {/* Coverage Areas */}
            <div>
              <h4 className="text-sm font-bold mb-3 text-gray-200">Primary Coverage Areas</h4>
              <div className="text-xs text-gray-400 space-y-1">
                {coverageAreas.map((area, index) => (
                  <span key={area}>
                    {area}{index < coverageAreas.length - 1 ? ' • ' : ''}
                  </span>
                ))}
                <p className="mt-2 font-medium">+ Remote consultations nationwide</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-sm font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} EvoHome Improvements Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;