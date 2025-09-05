export interface RealService {
  id: string;
  name: string;
  slug: string;
  category: 'renewable' | 'improvements' | 'maintenance' | 'garden';
  description: string;
  longDescription: string;
  benefits: string[];
  image: string;
  featured?: boolean;
  averageSavings?: string;
  installTime?: string;
  warranty?: string;
}

export const realServices: RealService[] = [
  // Renewable Energy Services
  {
    id: 'solar-power',
    name: 'Solar Power',
    slug: 'solar-power',
    category: 'renewable',
    description: 'Generate clean electricity and reduce your energy bills with professional solar panel installation.',
    longDescription: 'Solar photovoltaic systems convert sunlight into electricity for your home. Modern panels are more efficient than ever, with most systems paying for themselves within 6-9 years through energy savings and Smart Export Guarantee payments.',
    benefits: [
      'Reduce electricity bills by up to 70%',
      'Earn money through Smart Export Guarantee',
      'Increase property value by £14,000+',
      '25+ year manufacturer warranties',
      'Professional MCS-certified installation'
    ],
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
    featured: true,
    averageSavings: '£1,200/year',
    installTime: '1-2 days',
    warranty: '25 years'
  },
  {
    id: 'air-source-heat-pump',
    name: 'Air Source Heat Pump',
    slug: 'air-source-heat-pump',
    category: 'renewable',
    description: 'Efficient heating using outside air, eligible for government grants up to £7,500.',
    longDescription: 'Air Source Heat Pumps extract heat from outside air to heat your home and hot water. Even in cold weather, these systems are 3-4 times more efficient than gas boilers and eligible for significant government grants.',
    benefits: [
      'Up to £7,500 government grant available',
      '300-400% efficiency compared to gas boilers',
      'Works effectively down to -15°C',
      'Reduces carbon emissions by up to 50%',
      'Low maintenance requirements'
    ],
    image: 'https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg',
    featured: true,
    averageSavings: '£1,500/year',
    installTime: '1-2 days',
    warranty: '7 years'
  },
  {
    id: 'ground-source-heat-pump',
    name: 'Ground Source Heat Pump',
    slug: 'ground-source-heat-pump',
    category: 'renewable',
    description: 'The most efficient heating system available, using stable ground temperatures.',
    longDescription: 'Ground Source Heat Pumps use the stable temperature of the ground to provide highly efficient heating and cooling. These systems offer the highest efficiency of all renewable heating technologies.',
    benefits: [
      'Highest efficiency of all heat pump types',
      'Very low running costs',
      'Can provide cooling in summer',
      '20+ year lifespan',
      'Minimal maintenance required'
    ],
    image: 'https://images.pexels.com/photos/9875398/pexels-photo-9875398.jpeg',
    featured: true,
    averageSavings: '£1,800/year',
    installTime: '3-5 days',
    warranty: '10 years'
  },
  {
    id: 'solar-battery-storage',
    name: 'Solar Battery Storage',
    slug: 'solar-battery-storage',
    category: 'renewable',
    description: 'Store solar energy for use when you need it most, maximizing your savings.',
    longDescription: 'Solar battery storage systems allow you to store excess solar energy generated during the day for use in the evening or during power cuts. This maximizes your energy independence and savings.',
    benefits: [
      'Use solar power 24/7',
      'Backup power during outages',
      'Maximize solar investment',
      'Reduce grid dependency',
      'Smart energy management'
    ],
    image: 'https://images.pexels.com/photos/9875436/pexels-photo-9875436.jpeg',
    averageSavings: '£800/year',
    installTime: '1 day',
    warranty: '10 years'
  },

  // Home Improvements
  {
    id: 'windows-doors',
    name: 'Windows & Doors',
    slug: 'windows-doors',
    category: 'improvements',
    description: 'Energy-efficient windows and doors that enhance security, comfort, and property value.',
    longDescription: 'Modern windows and doors provide superior insulation, security, and style. Our range includes uPVC, aluminium, and timber options with advanced glazing technology.',
    benefits: [
      'Reduce heat loss by up to 50%',
      'Enhanced home security',
      'Noise reduction',
      'Low maintenance',
      'Increase property value'
    ],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    featured: true,
    averageSavings: '£600/year',
    installTime: '1 day per 6-8 windows',
    warranty: '10 years'
  },
  {
    id: 'insulation',
    name: 'Insulation',
    slug: 'insulation',
    category: 'improvements',
    description: 'Professional insulation installation to keep your home warm and reduce energy costs.',
    longDescription: 'Proper insulation is one of the most cost-effective home improvements. From loft insulation to cavity wall and external wall insulation, we ensure your home retains heat efficiently.',
    benefits: [
      'Reduce heating bills by up to 40%',
      'Improve year-round comfort',
      'Quick return on investment',
      'Prevent condensation issues',
      'Increase property value'
    ],
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',
    averageSavings: '£500/year',
    installTime: '1-2 days',
    warranty: '25 years'
  },
  {
    id: 'roofing',
    name: 'Roofing & Roofline',
    slug: 'roofing',
    category: 'improvements',
    description: 'Complete roofing services from repairs to full replacements with quality materials.',
    longDescription: 'Professional roofing services including tile replacement, flat roofing, fascias, soffits, and guttering. We ensure your home is protected with quality materials and expert workmanship.',
    benefits: [
      'Complete weather protection',
      'Increase property value',
      'Professional warranties',
      'Quality materials',
      'Expert installation'
    ],
    image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg',
    installTime: '3-7 days',
    warranty: '15 years'
  },
  {
    id: 'kitchens',
    name: 'Kitchens',
    slug: 'kitchens',
    category: 'improvements',
    description: 'Transform your kitchen with bespoke design and professional installation.',
    longDescription: 'Complete kitchen design and installation service from initial consultation to final fitting. We work with trusted kitchen specialists to create beautiful, functional spaces.',
    benefits: [
      'Bespoke design service',
      'Quality appliances included',
      'Professional project management',
      'Increase property value significantly',
      'Full installation service'
    ],
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    installTime: '7-14 days',
    warranty: '10 years'
  },
  {
    id: 'bathrooms',
    name: 'Bathrooms',
    slug: 'bathrooms',
    category: 'improvements',
    description: 'Create a luxury bathroom with modern fixtures and professional installation.',
    longDescription: 'Complete bathroom renovation service including design, supply, and installation. From contemporary to traditional styles, we create bathrooms that add value and comfort.',
    benefits: [
      'Complete design service',
      'Quality fixtures and fittings',
      'Professional installation',
      'Increase property value',
      'Full project management'
    ],
    image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
    installTime: '5-10 days',
    warranty: '10 years'
  },

  // Garden & Outdoor
  {
    id: 'driveways',
    name: 'Driveways',
    slug: 'driveways',
    category: 'garden',
    description: 'Transform your property\'s kerb appeal with block paving, resin, or tarmac driveways.',
    longDescription: 'Professional driveway installation using quality materials. Choose from block paving, resin bound, or tarmac options to enhance your property\'s appearance and value.',
    benefits: [
      'Enhanced kerb appeal',
      'Increase property value',
      'Durable materials',
      'Professional installation',
      'Comprehensive warranties'
    ],
    image: 'https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg',
    featured: true,
    installTime: '3-7 days',
    warranty: '10 years'
  },
  {
    id: 'garden-rooms',
    name: 'Garden Rooms',
    slug: 'garden-rooms',
    category: 'garden',
    description: 'Versatile garden buildings for home offices, gyms, or relaxation spaces.',
    longDescription: 'Insulated garden rooms provide year-round comfort for home offices, gyms, studios, or relaxation areas. Quick installation with no planning permission usually required.',
    benefits: [
      'Flexible usage options',
      'Year-round comfort',
      'Quick installation',
      'No planning permission usually required',
      'Increase property value'
    ],
    image: 'https://images.pexels.com/photos/1396130/pexels-photo-1396130.jpeg',
    installTime: '3-7 days',
    warranty: '10 years'
  },
  {
    id: 'conservatories',
    name: 'Conservatories',
    slug: 'conservatories',
    category: 'garden',
    description: 'Extend your living space with a beautiful conservatory filled with natural light.',
    longDescription: 'Modern conservatories provide additional living space with advanced glazing and climate control for year-round comfort. Perfect for dining, relaxing, or entertaining.',
    benefits: [
      'Additional living space',
      'Natural light throughout',
      'Year-round usability',
      'Increase property value',
      'Connect with your garden'
    ],
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    installTime: '5-10 days',
    warranty: '10 years'
  },

  // Maintenance Services
  {
    id: 'property-maintenance',
    name: 'Property Maintenance',
    slug: 'property-maintenance',
    category: 'maintenance',
    description: 'Comprehensive property maintenance services to keep your home in perfect condition.',
    longDescription: 'From routine maintenance to urgent repairs, our trusted maintenance professionals handle all your property needs with reliable, high-quality service.',
    benefits: [
      'Routine and emergency repairs',
      'Trusted local professionals',
      'Competitive pricing',
      'Quality workmanship',
      'Ongoing support'
    ],
    image: 'https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg',
    installTime: 'Same day - 3 days',
    warranty: '12 months'
  }
];

export const getRealServiceBySlug = (slug: string): RealService | undefined => {
  return realServices.find(service => service.slug === slug);
};

export const getRealServicesByCategory = (category: string): RealService[] => {
  return realServices.filter(service => service.category === category);
};

export const getFeaturedServices = (): RealService[] => {
  return realServices.filter(service => service.featured);
};