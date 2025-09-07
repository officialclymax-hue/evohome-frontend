import { useState, useEffect } from 'react';
import { fetchCounties as apiFetchCounties } from '../api'; // Renamed to avoid conflict

// This is the shape of a County item, it should match your backend's County model
export interface County {
  name: string;
  slug: string;
  description: string;
  isPrimary?: boolean;
}

// We'll use a React Hook to manage fetching and storing the counties data
export const useCounties = () => {
  const [counties, setCounties] = useState<County[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCounties = async () => {
      try {
        setLoading(true);
        const data = await apiFetchCounties();
        setCounties(data);
      } catch (err) {
        setError('Failed to load counties. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadCounties();
  }, []); // The empty array means this effect runs only once when the component mounts

  return { counties, loading, error };
};

// Helper functions to get specific counties from the fetched list
export const getCountyBySlug = (allCounties: County[], slug: string): County | undefined => {
  return allCounties.find(county => county.slug === slug);
};

export const getPrimaryCounties = (allCounties: County[]): County[] => {
  return allCounties.filter(county => county.isPrimary);
};
