import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CountyServicePage from './pages/CountyServicePage';
import RequestQuotePage from './pages/RequestQuotePage';
import JoinEvoHomePage from './pages/JoinEvoHomePage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ThankYouPage from './pages/ThankYouPage';
import SmartChatbot from './components/SmartChatbot';
import { Helmet } from 'react-helmet-async';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>EvoHome Improvements - The Smarter Way to Improve Your Home</title>
          <meta name="description" content="Professional home improvements across Hampshire, Surrey, Sussex, Dorset & Wiltshire. Solar power, heat pumps, windows, roofing & more. 30+ years experience." />
          <meta name="keywords" content="home improvements, solar power, heat pumps, windows, roofing, Hampshire, Surrey, Sussex, Dorset, Wiltshire" />
          
          {/* JSON-LD Organization Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "EvoHome Improvements Ltd",
              "description": "The Smarter Way to Improve Your Home - Professional home improvements across Southern England",
              "url": "https://evohomeimprovements.co.uk",
              "telephone": "0333 004 0195",
              "email": "office@evohomeimprovements.co.uk",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB",
                "addressRegion": "Hampshire"
              },
              "areaServed": ["Hampshire", "Surrey", "Sussex", "Dorset", "Wiltshire"],
              "serviceType": ["Solar Power Installation", "Heat Pump Installation", "Window Installation", "Roofing Services", "Home Improvements"],
              "foundingDate": "1990",
              "legalName": "EvoHome Improvements Ltd",
              "taxID": "14881322",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "200",
                "bestRating": "5"
              },
              "founder": {
                "@type": "Person",
                "name": "William Bowry"
              }
            })}
          </script>
        </Helmet>
        
        <ScrollToTop />
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
            <Route path="/:serviceSlug/:countySlug" element={<CountyServicePage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/join-evohome" element={<JoinEvoHomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
        
        <Footer />
        <FloatingButtons />
        <SmartChatbot />
      </div>
    </Router>
  );
}

export default App;