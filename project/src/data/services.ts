import { useState, useEffect } from 'react';
import { fetchServices as apiFetchServices } from '../api'; // Renamed to avoid conflict

// This is the shape of a Service item, it should match your backend's Service model
export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'renewable' | 'improvements' | 'maintenance' | 'garden' | 'health';
  description: string;
  longDescription: string;
  benefits: string[];
  image: string;
  featured?: boolean;
  averageSavings?: string;
  installTime?: string;
  warranty?: string;
  whatIsIt?: string;
  howItWorksSteps?: {
    title: string;
    description: string;
  }[];
  comparisonTable?: {
    feature: string;
    sahp?: string;
    electric?: string;
    solar?: string;
    traditional?: string;
    modern?: string;
  }[];
  whyChooseContent?: string;
  howEvoHomeHelpsContent?: string;
  relatedArticles?: {
    title: string;
    slug: string;
    category: string;
    description: string;
    image: string;
  }[];
  externalResources?: {
    title: string;
    url: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  serviceTypes?: {
    name: string;
    description: string;
    features: string[];
    image?: string;
  }[];
  materials?: {
    name: string;
    description: string;
    pros: string[];
    cons: string[];
    bestFor: string;
    image?: string;
  }[];
}

// We'll use a React Hook to manage fetching and storing the services data
// This hook can be used by any component that needs the list of services
export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        const data = await apiFetchServices();
        setServices(data);
      } catch (err) {
        setError('Failed to load services. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []); // The empty array means this effect runs only once when the component mounts

  return { services, loading, error };
};

// Helper functions to get specific services from the fetched list
// These functions now rely on the 'services' array provided by the hook
export const getServiceBySlug = (allServices: Service[], slug: string): Service | undefined => {
  return allServices.find(service => service.slug === slug);
};

export const getServicesByCategory = (allServices: Service[], category: string): Service[] => {
  return allServices.filter(service => service.category === category);
};

export const getFeaturedServices = (allServices: Service[]): Service[] => {
  return allServices.filter(service => service.featured);
};
