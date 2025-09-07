import { services } from '../data/services';
import { counties } from '../data/counties';

// Simulate fetching services from an API
export const fetchServices = async () => {
  // In a real application, you would make an actual HTTP request here:
  // const response = await fetch('/api/services');
  // if (!response.ok) throw new Error('Failed to fetch services');
  // return response.json();

  // For now, we return the local data to simulate a backend
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return services;
};

// Simulate fetching counties from an API
export const fetchCounties = async () => {
  // In a real application, you would make an actual HTTP request here:
  // const response = await fetch('/api/counties');
  // if (!response.ok) throw new Error('Failed to fetch counties');
  // return response.json();

  // For now, we return the local data to simulate a backend
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return counties;
};
