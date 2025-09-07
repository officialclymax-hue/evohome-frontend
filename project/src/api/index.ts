const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Helper function to fetch data from the API
async function fetchData(endpoint: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      // If the response is not good (like a 404 or 500 error)
      const errorData = await response.json();
      throw new Error(errorData.detail || `API call failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error; // Re-throw the error so the component can handle it
  }
}

// --- Functions to get specific data from the backend ---

export async function fetchServices() {
  return fetchData('/services');
}

export async function fetchServiceBySlug(slug: string) {
  return fetchData(`/services/${slug}`);
}

export async function fetchCounties() {
  return fetchData('/counties');
}

export async function fetchBlogPosts() {
  return fetchData('/blogs');
}

export async function fetchBlogPostBySlug(slug: string) {
  return fetchData(`/blogs/${slug}`);
}

export async function fetchGalleryItems() {
  return fetchData('/gallery');
}

// For homepage and about page data, which are single "content" items
export async function fetchHomepageData() {
  return fetchData('/content/homepage_data');
}

export async function fetchAboutPageData() {
  return fetchData('/content/about_page_data');
}

// You can add more functions here as needed for other content types
