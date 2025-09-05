import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Request Quote', href: '/request-quote', isPrimary: true },
    { name: 'Join EvoHome', href: '/join-evohome' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-xl shadow-2xl' : 'bg-white/95 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/8350661c-0317-4d61-939e-72d9dba47c95.JPG" 
              alt="EvoHome Improvements"
              className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 text-sm font-bold transition-all duration-200 rounded-xl ${
                  item.isPrimary
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:scale-105'
                    : isActive(item.href) 
                    ? 'text-[#2B4C9B] bg-[#f8fafc]'
                    : 'text-gray-700 hover:text-[#2B4C9B] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:03330040195"
              className="flex items-center space-x-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] rounded-xl hover:from-[#1e3a7a] hover:to-[#2B4C9B] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span>0333 004 0195</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-[#2B4C9B] hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/98 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl shadow-2xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                    item.isPrimary
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                      : isActive(item.href)
                      ? 'text-[#2B4C9B] bg-[#f8fafc]'
                      : 'text-gray-700 hover:text-[#2B4C9B] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:03330040195"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#2B4C9B] to-[#1e3a7a] rounded-xl"
                >
                  <Phone className="h-4 w-4" />
                  <span>0333 004 0195</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;