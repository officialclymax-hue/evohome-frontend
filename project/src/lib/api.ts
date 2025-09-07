import { services } from '../data/services';
import { counties } from '../data/counties';
import { galleryImages } from '../data/gallery'; // Import galleryImages

// Simulate fetching services from an API
export const fetchServices = async () => {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return services;
};

// Simulate fetching counties from an API
export const fetchCounties = async () => {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return counties;
};

// Simulate fetching gallery from an API
export const fetchGallery = async () => {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return galleryImages;
};
