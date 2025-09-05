export interface County {
  name: string;
  slug: string;
  description: string;
  isPrimary?: boolean;
}

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

export const getCountyBySlug = (slug: string): County | undefined => {
  return counties.find(county => county.slug === slug);
};

export const getPrimaryCounties = (): County[] => {
  return counties.filter(county => county.isPrimary);
};