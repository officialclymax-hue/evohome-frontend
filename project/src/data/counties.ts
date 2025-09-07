import { useState, useEffect } from 'react';
import { fetchCounties } from '../lib/api'; // Import the new fetch function

export interface County {
  name: string;
  slug: string;
  description: string;
  isPrimary?: boolean;
}

// This is your local data, now acting as the "mock backend" source
export const counties: County[] = [
  { name: 'Hampshire', slug: 'hampshire', description: 'Professional home improvements across Hampshire', isPrimary: true },
  { name: 'Surrey', slug: 'surrey', description: 'Trusted specialists serving Surrey', isPrimary: true },
  { name: 'Sussex', slug: 'sussex', description: 'Quality home improvements in Sussex', isPrimary: true },
  { name: 'Dorset', slug: 'dorset', description: 'Expert services throughout Dorset', isPrimary: true },
  { name: 'Wiltshire', slug: 'wiltshire', description: 'Professional installations in Wiltshire', isPrimary: true },

  // Extended coverage
  { name: 'Berkshire', slug: 'berkshire', description: 'Quality services in Berkshire' },
  { name: 'Kent', slug: 'kent', description: 'Trusted professionals in Kent' },
  { name: 'Essex', slug: 'essex', description: 'Expert installations across Essex' },
  { name: 'Hertfordshire', slug: 'hertfordshire', description: 'Professional services in Hertfordshire' },
  { name: 'Buckinghamshire', slug: 'buckinghamshire', description: 'Quality workmanship in Buckinghamshire' },
  { name: 'Oxfordshire', slug: 'oxfordshire', description: 'Trusted specialists in Oxfordshire' },
  { name: 'Greater London', slug: 'greater-london', description: 'Professional services across Greater London' }
];

// Hook for fetching counties
export const useCounties = () => {
  const [data, setData] = useState<County[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCounties = async () => {
      try {
        const fetchedCounties = await fetchCounties();
        setData(fetchedCounties);
      } catch (err) {
        setError('Failed to load counties. Please try again later.');
        console.error('Error fetching counties:', err);
      } finally {
        setLoading(false);
      }
    };
    getCounties();
  }, []);

  return { counties: data, loading, error };
};

export const getCountyBySlug = (counties: County[], slug: string): County | undefined => {
  return counties.find(county => county.slug === slug);
};

export const getPrimaryCounties = (counties: County[]): County[] => {
  return counties.filter(county => county.isPrimary);
};
