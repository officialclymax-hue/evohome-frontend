import React, { useState, useEffect } from 'react';
import { ChevronRight, Phone, CheckCircle, Star, Shield, Users, ArrowDown } from 'lucide-react';

const PremiumHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
      title: 'Solar Power Solutions',
      subtitle: 'Generate clean energy and slash your bills'
    },
    {
      image: 'https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg',
      title: 'Heat Pump Technology',
      subtitle: 'Up to £7,500 government grant available'
    },
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Energy-Efficient Windows',
      subtitle: 'Transform comfort and reduce energy loss'
    },
    {
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      title: 'Kitchen Transformations',
      subtitle: 'Create the heart of your dream home'
    },
    {
      image: 'https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg',
      title: 'Premium Driveways',
      subtitle: 'Enhance kerb appeal and property value'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToQuoteForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B4C9B]/90 via-[#2B4C9B]/70 to-[#2B4C9B]/50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">THE SMARTER WAY</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  TO IMPROVE YOUR HOME
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl font-bold mb-4 text-blue-200">
                Welcome to EvoHome Improvements
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95 leading-relaxed">
                <strong>Hampshire & Surrounding Areas</strong>
              </p>
              
              <p className="text-base md:text-lg mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
                Vetted specialists. Expert advice. Complete protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <button
                  onClick={scrollToQuoteForm}
                  className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold text-lg sm:text-xl rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
                >
                  <span>Request Free Quote</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
                <a
                  href="tel:03330040195"
                  className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-white text-white font-bold text-lg sm:text-xl rounded-xl hover:bg-white hover:text-[#2B4C9B] transition-all duration-300 flex items-center space-x-2"
                >
                  <Phone className="h-5 sm:h-6 w-5 sm:w-6" />
                  <span>0333 004 0195</span>
                </a>
              </div>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white/90">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-teal-300" />
                  <span className="font-semibold text-sm sm:text-base">30+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 sm:h-5 w-4 sm:w-5 text-teal-300" />
                  <span className="font-semibold text-sm sm:text-base">4.9/5 Google Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 sm:h-5 w-4 sm:w-5 text-teal-300" />
                  <span className="font-semibold text-sm sm:text-base">100% Protected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 sm:h-5 w-4 sm:w-5 text-teal-300" />
                  <span className="font-semibold text-sm sm:text-base">Vetted Specialists</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PremiumHero;