import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      <a
        href="https://wa.me/447895545248?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20home%20improvement%20services.%20Can%20you%20help%20me%20get%20started%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        title="WhatsApp: 07895 545248"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      
      <a
        href="tel:03330040195"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#2B4C9B] hover:bg-[#1e3a7a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Call EvoHome"
        title="Call: 0333 004 0195"
      >
        <Phone className="h-7 w-7" />
      </a>
    </>
  );
};

export default FloatingButtons;