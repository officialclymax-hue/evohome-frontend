import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useGallery, GalleryItem } from '../data/gallery'; // Import useGallery and GalleryItem

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { galleryImages, loading, error } = useGallery(); // Use the hook to fetch gallery images

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-20">
        <p className="text-xl text-gray-700">Loading gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-20">
        <p className="text-xl text-red-600">Error loading gallery: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Project Gallery - EvoHome Improvements</title>
        <meta name="description" content="View our portfolio of completed home improvement projects across England. Solar installations, windows, roofing, kitchens, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#10207d] to-[#004aad] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Project Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our portfolio of completed home improvement projects across England. From solar installations to complete renovations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#10207d] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{filteredImages[selectedImage].title}</h3>
              <p className="text-gray-300">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied homeowners who've trusted EvoHome with their home improvement projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/request-quote"
              className="px-8 py-4 bg-[#10207d] text-white font-bold text-lg rounded-lg hover:bg-[#004aad] transition-colors"
            >
              Request Free Quote
            </a>
            <a
              href="tel:03330040195"
              className="px-8 py-4 border-2 border-[#10207d] text-[#10207d] font-bold text-lg rounded-lg hover:bg-[#10207d] hover:text-white transition-colors"
            >
              Call: 0333 004 0195
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
