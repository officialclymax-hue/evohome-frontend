import { useState, useEffect } from 'react';
import { fetchGallery } from '../lib/api';

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

export const galleryImages: GalleryItem[] = [
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

export const useGallery = () => {
  const [data, setData] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getGalleryData = async () => {
      try {
        const fetchedGallery = await fetchGallery();
        setData(fetchedGallery);
      } catch (err) {
        setError('Failed to load gallery images. Please try again later.');
        console.error('Error fetching gallery:', err);
      } finally {
        setLoading(false);
      }
    };
    getGalleryData();
  }, []);

  return { galleryImages: data, loading, error };
};
