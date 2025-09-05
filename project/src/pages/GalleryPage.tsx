import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
      alt: 'Solar panel installation on residential roof',
      category: 'Solar Power',
      title: 'Residential Solar Installation'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      alt: 'Modern energy-efficient windows',
      category: 'Windows',
      title: 'Double Glazed Windows'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg',
      alt: 'Professional roofing installation',
      category: 'Roofing',
      title: 'Tile Roof Replacement'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg',
      alt: 'Block paving driveway',
      category: 'Driveways',
      title: 'Block Paving Driveway'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      alt: 'Modern kitchen renovation',
      category: 'Kitchens',
      title: 'Contemporary Kitchen Design'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg',
      alt: 'Air source heat pump installation',
      category: 'Heat Pumps',
      title: 'Air Source Heat Pump'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
      alt: 'Luxury bathroom renovation',
      category: 'Bathrooms',
      title: 'Luxury Bathroom Suite'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',
      alt: 'Loft insulation installation',
      category: 'Insulation',
      title: 'Loft Insulation Project'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1396133/pexels-photo-1396133.jpeg',
      alt: 'Garden decking installation',
      category: 'Decking',
      title: 'Composite Decking'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      alt: 'External wall cladding',
      category: 'Cladding',
      title: 'Modern External Cladding'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      alt: 'Glass conservatory extension',
      category: 'Conservatories',
      title: 'Victorian Style Conservatory'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
      alt: 'White uPVC roofline',
      category: 'Roofline',
      title: 'uPVC Fascias and Soffits'
    }
  ];

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