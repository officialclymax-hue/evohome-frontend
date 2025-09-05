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

export const services: Service[] = [
  // Solar Assisted Water Heat Pump
  {
    id: 'solar-assisted-heat-pump',
    name: 'Solar Assisted Water Heat Pump',
    slug: 'solar-assisted-heat-pump',
    category: 'renewable',
    description: 'A Solar Assisted Heat Pump (SAHP) efficiently heats water day and night using solar energy and heat pump technology.',
    longDescription: 'Revolutionary water heating technology that combines solar energy with heat pump efficiency for 24/7 hot water supply.',
    benefits: [
      'Hot water 24/7 – even without sunlight',
      'Lower energy bills with renewable tech',
      'Compact all-in-one system',
      'Quiet and low-maintenance',
      'Efficient in all weather conditions',
      'Eligible for Boiler Upgrade Scheme (BUS)',
      'Great for retrofits and upgrades',
      'Improves EPC rating and property value',
      'Year-round performance with reduced carbon footprint',
      'Built to last with long warranties'
    ],
    image: 'https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg',
    featured: true,
    averageSavings: '£800/year',
    installTime: '1-2 days',
    warranty: '7-10 years',
    whatIsIt: 'A Solar Assisted Heat Pump (SAHP) is an innovative system that combines the benefits of both solar energy and heat pump technology to provide highly efficient hot water for your home. Unlike traditional water heating systems that rely solely on electricity or gas, SAHPs use solar thermal energy to enhance performance, ensuring greater efficiency and cost savings.',
    howItWorksSteps: [
      {
        title: 'Solar Panel Absorption',
        description: 'A solar collector panel absorbs heat from the environment, even on cloudy days.'
      },
      {
        title: 'Heat Transfer to Refrigerant',
        description: 'The absorbed heat is transferred to a refrigerant fluid, increasing its temperature.'
      },
      {
        title: 'Compression & Energy Boost',
        description: 'The heat pump compresses the refrigerant, boosting its temperature to heat your water supply.'
      },
      {
        title: 'Efficient Energy Use',
        description: 'The system requires minimal electricity to operate, significantly reducing energy costs.'
      }
    ],
    comparisonTable: [
      {
        feature: 'Energy Source',
        sahp: 'Solar & Air Heat',
        electric: 'Electricity',
        solar: 'Sunlight'
      },
      {
        feature: 'Works at Night?',
        sahp: 'Yes',
        electric: 'Yes',
        solar: 'No'
      },
      {
        feature: 'Efficiency',
        sahp: 'Higher due to dual energy sources',
        electric: 'Standard',
        solar: 'Dependent on sunlight'
      },
      {
        feature: 'Hot Water On Demand',
        sahp: 'Yes',
        electric: 'Yes',
        solar: 'Limited'
      },
      {
        feature: 'Best For',
        sahp: 'Cost-effective water heating',
        electric: 'Standard electric heating',
        solar: 'Supplemental heating'
      }
    ],
    whyChooseContent: 'SAHPs are an excellent investment for homeowners looking to reduce energy bills while embracing renewable technology. With rising energy costs and increasing environmental concerns, switching to a Solar Assisted Heat Pump ensures a sustainable, cost-effective, and future-proof hot water solution.',
    howEvoHomeHelpsContent: 'At EvoHome Improvements, we provide expert guidance helping you choose the right system for your home. We work with trusted installers to ensure a seamless, high-quality installation. From initial advice to final setup, we manage the entire process, so you can enjoy the benefits of cleaner, more affordable hot water without the hassle.',
    relatedArticles: [
      {
        title: 'Air Source Heat Pump – Comprehensive Buyer\'s Guide',
        slug: 'air-source-heat-pump-comprehensive-buyers-guide',
        category: 'Air Source Heat Pump',
        description: 'Introduction to Air Source Heat Pumps Air Source Heat Pumps (ASHPs) are becoming a popular, sustainable...',
        image: 'https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg'
      },
      {
        title: 'Ultimate Buyer\'s Guide to Ground Source Heat Pumps',
        slug: 'ultimate-buyers-guide-ground-source-heat-pumps',
        category: 'Ground Source Heat Pump',
        description: 'Introduction to Ground Source Heat Pumps What Are Ground Source Heat Pumps? Ground Source Heat Pumps...',
        image: 'https://images.pexels.com/photos/9875398/pexels-photo-9875398.jpeg'
      },
      {
        title: 'Solar Power Buyer\'s Guide: Everything UK Homeowners Need to Know',
        slug: 'solar-power-buyers-guide-everything-uk-homeowners-need-know',
        category: 'Solar Power',
        description: 'The Ultimate Solar Power Buyer\'s Guide for UK Homeowners Introduction to Solar Power for Homes Solar...',
        image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg'
      }
    ],
    externalResources: [
      {
        title: 'Energy Saving Trust – Advice/Solar Assisted Heat Pumps',
        url: 'https://energysavingtrust.org.uk/advice/solar-assisted-heat-pumps/'
      }
    ]
  },

  // Solar Power
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
      'Professional MCS-certified installation',
      'Works even on cloudy days',
      'Low maintenance requirements',
      'Future-proof your home energy'
    ],
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
    featured: true,
    averageSavings: '£1,200/year',
    installTime: '1-2 days',
    warranty: '25 years',
    whatIsIt: 'Solar power harnesses the sun\'s energy to generate electricity, reducing reliance on the grid, lowering energy bills, and cutting carbon emissions all year round. Modern solar panels are highly efficient and work even in cloudy UK weather.',
    serviceTypes: [
      {
        name: 'Roof-Integrated Solar Panels',
        description: 'Sleek panels that sit flush with your roof for architectural harmony',
        features: ['Sleek, low-profile design', 'Replaces traditional roofing', 'Ideal for new builds or re-roofs', 'Increases property value']
      },
      {
        name: 'Solar Roof Tiles',
        description: 'Stylish tiles that seamlessly integrate into your roof while generating clean energy',
        features: ['Seamless roof integration', 'Premium aesthetic appeal', 'Best for new builds', 'Higher efficiency per tile']
      },
      {
        name: 'Solar Battery Storage',
        description: 'Store excess solar energy for use when you need it most',
        features: ['24/7 solar power usage', 'Backup during outages', 'Maximize solar investment', 'Smart energy management']
      },
      {
        name: 'EV Charger Integration',
        description: 'Charge your electric vehicle with clean solar energy',
        features: ['Fast home charging', 'Solar-powered driving', 'Smart charging features', 'Future-ready technology']
      }
    ],
    whyChooseContent: 'Solar power is one of the smartest investments UK homeowners can make. With energy bills rising and solar costs falling, most systems pay for themselves within 6-9 years. You\'ll enjoy decades of free electricity while increasing your property value.',
    howEvoHomeHelpsContent: 'EvoHome connects you with MCS-certified solar installers who understand UK homes. We provide impartial advice, competitive quotes, and full project management from design to commissioning.',
    faqs: [
      {
        question: 'How do solar panels generate electricity?',
        answer: 'Solar panels convert sunlight into electricity using photovoltaic cells. Even on cloudy days, panels generate power for your home.'
      },
      {
        question: 'What size solar system do I need?',
        answer: 'System size depends on your energy usage, roof space, and budget. Our experts provide free assessments to determine the optimal size.'
      },
      {
        question: 'Do I need planning permission?',
        answer: 'Most solar installations fall under permitted development rights. We handle any planning requirements for you.'
      }
    ],
    externalResources: [
      {
        title: 'Smart Export Guarantee – Official Government Link',
        url: 'https://www.gov.uk/guidance/smart-export-guarantee'
      },
      {
        title: 'MCS Certification – Solar Standards',
        url: 'https://mcscertified.com/'
      }
    ]
  },

  // Air Source Heat Pump
  {
    id: 'air-source-heat-pump',
    name: 'Air Source Heat Pump',
    slug: 'air-source-heat-pump',
    category: 'renewable',
    description: 'An Air Source Heat Pump (ASHP) extracts heat from the air to provide efficient heating and hot water.',
    longDescription: 'Air Source Heat Pumps extract heat from outside air to heat your home and hot water. Even in cold weather, these systems are 3-4 times more efficient than gas boilers and eligible for significant government grants.',
    benefits: [
      'Up to £7,500 government grant available',
      '300-400% efficiency compared to gas boilers',
      'Works effectively down to -15°C',
      'Reduces carbon emissions by up to 50%',
      'Low maintenance requirements',
      'Provides heating and cooling',
      'Future-proof renewable technology',
      'Increases property value'
    ],
    image: 'https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg',
    featured: true,
    averageSavings: '£1,500/year',
    installTime: '1-2 days',
    warranty: '7 years',
    whatIsIt: 'An Air Source Heat Pump (ASHP) provides a highly energy-efficient method to heat and cool your home. By drawing renewable heat from the outside air, an ASHP can reduce both your energy bills and carbon footprint.',
    serviceTypes: [
      {
        name: 'Air-to-Water Heat Pump',
        description: 'Heats water for radiators or underfloor heating systems',
        features: ['Works with existing radiators', 'Provides hot water', 'Highly efficient heating', 'Suitable for most UK homes']
      },
      {
        name: 'Air-to-Air Heat Pump',
        description: 'Circulates warm or cool air directly through your home',
        features: ['Heating and cooling', 'No water system needed', 'Quick installation', 'Ideal for modern homes']
      }
    ],
    whyChooseContent: 'With the Boiler Upgrade Scheme offering up to £7,500 grants, there\'s never been a better time to switch to an air source heat pump. These systems are 3-4 times more efficient than gas boilers and work effectively even in cold UK weather.',
    howEvoHomeHelpsContent: 'EvoHome guides you through the entire process, from grant applications to finding MCS-certified installers. We ensure you get the right system for your home and maximum government support.',
    externalResources: [
      {
        title: 'Boiler Upgrade Scheme – Government Grant',
        url: 'https://www.gov.uk/apply-boiler-upgrade-scheme'
      },
      {
        title: 'Energy Saving Trust – Heat Pumps Guide',
        url: 'https://energysavingtrust.org.uk/advice/air-source-heat-pumps'
      }
    ]
  },

  // Ground Source Heat Pump
  {
    id: 'ground-source-heat-pump',
    name: 'Ground Source Heat Pump',
    slug: 'ground-source-heat-pump',
    category: 'renewable',
    description: 'A Ground Source Heat Pump (GSHP) extracts heat from the ground to efficiently provide heating and hot water all year round.',
    longDescription: 'Ground Source Heat Pumps use the stable temperature of the ground to provide highly efficient heating and cooling. These systems offer the highest efficiency of all renewable heating technologies.',
    benefits: [
      'Highest efficiency of all heat pump types',
      'Very low running costs',
      'Can provide cooling in summer',
      '20+ year lifespan',
      'Minimal maintenance required',
      'Works in all weather conditions',
      'Eligible for government grants',
      'Significant carbon reduction'
    ],
    image: 'https://images.pexels.com/photos/9875398/pexels-photo-9875398.jpeg',
    featured: true,
    averageSavings: '£1,800/year',
    installTime: '3-5 days',
    warranty: '10 years',
    whatIsIt: 'A Ground Source Heat Pump (GSHP) Installation is an eco-friendly, energy-efficient heating solution that harnesses the consistent warmth stored in the earth to heat your home. Unlike traditional heating systems reliant on fossil fuels, GSHPs use geothermal energy.',
    serviceTypes: [
      {
        name: 'Horizontal Ground Source Heat Pump',
        description: 'Uses pipes buried in shallow trenches to extract renewable heat',
        features: ['Ideal for properties with ample outdoor space', 'Less intrusive installation', 'Cost-effective option', 'Suitable for larger gardens']
      },
      {
        name: 'Vertical Ground Source Heat Pump',
        description: 'Uses deep boreholes drilled into the ground for maximum efficiency',
        features: ['Perfect for limited outdoor space', 'Higher efficiency', 'Minimal land area required', 'Stable deep ground temperatures']
      }
    ],
    whyChooseContent: 'Ground source heat pumps offer the highest efficiency of all renewable heating systems. With stable ground temperatures year-round, they provide consistent heating and cooling while dramatically reducing energy bills.',
    howEvoHomeHelpsContent: 'EvoHome assesses your property\'s suitability and connects you with specialist GSHP installers. We handle grant applications and ensure your system is designed for maximum efficiency and savings.',
    externalResources: [
      {
        title: 'Energy Saving Trust – Ground Source Heat Pumps',
        url: 'https://energysavingtrust.org.uk/advice/ground-source-heat-pumps'
      }
    ]
  },

  // Windows & Doors
  {
    id: 'windows-doors',
    name: 'Windows & Doors',
    slug: 'windows-doors',
    category: 'improvements',
    description: 'We provide expert guidance on all window styles, materials, and suppliers, ensuring the best deals.',
    longDescription: 'Energy-efficient windows and doors that enhance security, comfort, and property value. Modern glazing technology provides superior insulation and style.',
    benefits: [
      'Reduce heat loss by up to 50%',
      'Enhanced home security',
      'Noise reduction',
      'Low maintenance',
      'Increase property value',
      'Improved comfort year-round',
      'Better condensation control',
      'Professional installation guaranteed'
    ],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    featured: true,
    averageSavings: '£600/year',
    installTime: '1 day per 6-8 windows',
    warranty: '10 years',
    whatIsIt: 'Modern windows and doors provide superior insulation, security, and style. Our range includes uPVC, aluminium, and timber options with advanced glazing technology to transform your home\'s comfort and efficiency.',
    serviceTypes: [
      {
        name: 'Casement Windows',
        description: 'Hinged windows that open outward for excellent ventilation',
        features: ['Maximum airflow', 'Unobstructed views', 'Easy cleaning', 'Traditional or modern styles']
      },
      {
        name: 'Sash Windows',
        description: 'Classic sliding windows perfect for period properties',
        features: ['Timeless elegance', 'Heritage compliance', 'Smooth operation', 'Energy efficient glazing']
      },
      {
        name: 'Composite Doors',
        description: 'High-security doors combining multiple materials for strength',
        features: ['Maximum security', 'Weather resistant', 'Low maintenance', 'Wide style choice']
      }
    ],
    materials: [
      {
        name: 'uPVC',
        description: 'Durable, cost-effective material with excellent insulation',
        pros: ['Low maintenance', 'Excellent insulation', 'Cost-effective', 'Weather resistant'],
        cons: ['Limited color options', 'Can fade over time'],
        bestFor: 'Budget-conscious homeowners wanting low-maintenance solutions'
      },
      {
        name: 'Aluminium',
        description: 'Strong, lightweight frames with sleek modern appearance',
        pros: ['Very durable', 'Slim profiles', 'Modern aesthetic', 'Recyclable'],
        cons: ['Higher cost', 'Can conduct heat'],
        bestFor: 'Modern properties needing slim, stylish frames'
      },
      {
        name: 'Timber',
        description: 'Natural wood offering classic beauty and excellent insulation',
        pros: ['Beautiful natural look', 'Excellent insulation', 'Repairable', 'Heritage appropriate'],
        cons: ['Requires maintenance', 'Higher cost'],
        bestFor: 'Period properties and conservation areas'
      }
    ],
    whyChooseContent: 'New windows and doors are one of the most cost-effective home improvements. They reduce energy bills, improve security, and enhance your home\'s appearance while adding significant value.',
    howEvoHomeHelpsContent: 'EvoHome provides impartial advice on the best windows and doors for your property. We compare quotes from vetted installers and ensure professional installation with comprehensive warranties.'
  },

  // Insulation
  {
    id: 'insulation',
    name: 'Insulation',
    slug: 'insulation',
    category: 'improvements',
    description: 'We help you find the best insulation solutions for your home, reducing heat loss & lowering energy bills.',
    longDescription: 'Professional insulation installation to keep your home warm and reduce energy costs. Proper insulation is one of the most cost-effective home improvements available.',
    benefits: [
      'Reduce heating bills by up to 40%',
      'Improve year-round comfort',
      'Quick return on investment',
      'Prevent condensation issues',
      'Increase property value',
      'Reduce carbon footprint',
      'Improve EPC rating',
      'Professional installation guaranteed'
    ],
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',
    averageSavings: '£500/year',
    installTime: '1-2 days',
    warranty: '25 years',
    whatIsIt: 'Proper insulation is the foundation of a warm, energy-efficient home. By keeping the heat in and the cold out, it reduces energy bills and creates a more comfortable living environment all year round.',
    serviceTypes: [
      {
        name: 'Loft Insulation',
        description: 'Prevent heat escaping through your roof with professional loft insulation',
        features: ['Quick installation', 'Immediate savings', 'Minimal disruption', '25-year warranty']
      },
      {
        name: 'Cavity Wall Insulation',
        description: 'Fill the gap between walls to reduce heat loss dramatically',
        features: ['Professional injection', 'Significant savings', 'Quick installation', 'Long-lasting performance']
      },
      {
        name: 'Solid Wall Insulation',
        description: 'Internal or external insulation for homes without cavities',
        features: ['Internal or external options', 'Transform older homes', 'Major efficiency gains', 'Professional installation']
      }
    ],
    whyChooseContent: 'Insulation offers the fastest payback of any home improvement. Most installations pay for themselves within 2-3 years through energy savings, then continue saving money for decades.',
    howEvoHomeHelpsContent: 'EvoHome assesses your home\'s insulation needs and connects you with specialist installers. We ensure you get the right type of insulation for maximum savings and comfort.'
  },

  // Roofing & Roofline
  {
    id: 'roofing',
    name: 'Roofing & Roofline',
    slug: 'roofing',
    category: 'improvements',
    description: 'Quality roofing ensures weather resistance, durability, and energy efficiency for your home.',
    longDescription: 'Complete roofing services from repairs to full replacements with quality materials. Professional roofing protects your home and adds value.',
    benefits: [
      'Complete weather protection',
      'Increase property value',
      'Professional warranties',
      'Quality materials',
      'Expert installation',
      'Improved energy efficiency',
      'Enhanced curb appeal',
      'Long-term durability'
    ],
    image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg',
    installTime: '3-7 days',
    warranty: '15 years',
    whatIsIt: 'A professionally installed roofline – including fascia, soffits, and guttering – is crucial for protecting your home from water damage, improving ventilation, and enhancing curb appeal.',
    serviceTypes: [
      {
        name: 'Pitched Roofing',
        description: 'Traditional sloped roofs using slate, tile, or metal materials',
        features: ['Excellent water drainage', 'Long-lasting materials', 'Classic appearance', 'Weather resistant']
      },
      {
        name: 'Flat Roofing',
        description: 'Modern flat roof systems using EPDM, TPO, or GRP materials',
        features: ['Cost-effective', 'Quick installation', 'Modern aesthetic', 'Suitable for extensions']
      },
      {
        name: 'Roofline Services',
        description: 'Fascias, soffits, and guttering for complete roof protection',
        features: ['Weather protection', 'Improved ventilation', 'Enhanced appearance', 'Low maintenance']
      }
    ],
    materials: [
      {
        name: 'Slate',
        description: 'Premium natural roofing material with exceptional durability',
        pros: ['Extremely durable', 'Fire resistant', 'Natural beauty', 'Low maintenance'],
        cons: ['Higher cost', 'Heavy weight'],
        bestFor: 'Premium homes and conservation areas'
      },
      {
        name: 'Clay/Concrete Tiles',
        description: 'Traditional tiles offering strength and weather resistance',
        pros: ['Weather resistant', 'Various styles', 'Good value', 'Long-lasting'],
        cons: ['Can be heavy', 'May require maintenance'],
        bestFor: 'Traditional and contemporary homes'
      }
    ],
    whyChooseContent: 'A quality roof protects your most valuable asset. Modern roofing materials offer superior weather protection, energy efficiency, and can significantly increase your property value.',
    howEvoHomeHelpsContent: 'EvoHome connects you with experienced roofing specialists who use quality materials and provide comprehensive warranties. We manage your project from assessment to completion.'
  },

  // Driveways
  {
    id: 'driveways',
    name: 'Driveways',
    slug: 'driveways',
    category: 'garden',
    description: 'Attractive driveways enhance curb appeal, improve parking, and increase property value.',
    longDescription: 'Professional driveway installation using quality materials. Transform your property\'s kerb appeal with block paving, resin, or tarmac driveways.',
    benefits: [
      'Enhanced kerb appeal',
      'Increase property value by £15,000+',
      'Durable materials',
      'Professional installation',
      'Comprehensive warranties',
      'Low maintenance options',
      'Improved parking convenience',
      'Weather resistant surfaces'
    ],
    image: 'https://images.pexels.com/photos/1396134/pexels-photo-1396134.jpeg',
    featured: true,
    averageSavings: 'Adds £15k+ value',
    installTime: '3-7 days',
    warranty: '10 years',
    whatIsIt: 'A professional driveway installation does more than just improve the look of your property – it adds real value and everyday convenience. Quality driveways enhance kerb appeal while providing durable, practical surfaces.',
    serviceTypes: [
      {
        name: 'Resin Driveways',
        description: 'Smooth, permeable surfaces with excellent durability',
        features: ['Non-slip surface', 'UV resistant', 'Color options', 'Permeable drainage']
      },
      {
        name: 'Block Paving',
        description: 'Traditional paving with endless design possibilities',
        features: ['Huge range of colors', 'Endless design options', 'Durable & hard wearing', 'Easy repairs']
      },
      {
        name: 'Tarmac Driveways',
        description: 'Cost-effective, durable surfacing for all properties',
        features: ['Quick installation', 'Cost-effective', 'Smooth finish', 'Long-lasting']
      }
    ],
    whyChooseContent: 'A new driveway can add £15,000+ to your property value while providing years of maintenance-free use. Modern materials offer superior durability and appearance compared to older surfaces.',
    howEvoHomeHelpsContent: 'EvoHome connects you with specialist driveway installers who use quality materials and proven techniques. We ensure proper preparation and professional installation for long-lasting results.'
  },

  // Kitchens
  {
    id: 'kitchens',
    name: 'Kitchens',
    slug: 'kitchens',
    category: 'improvements',
    description: 'Modern kitchens maximise functionality, enhance aesthetics, and create a welcoming space.',
    longDescription: 'Transform your kitchen with bespoke design and professional installation. Complete kitchen design and installation service from initial consultation to final fitting.',
    benefits: [
      'Bespoke design service',
      'Quality appliances included',
      'Professional project management',
      'Increase property value by £25,000+',
      'Full installation service',
      'Modern functionality',
      'Enhanced storage solutions',
      'Energy-efficient appliances'
    ],
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
    installTime: '7-14 days',
    warranty: '10 years',
    whatIsIt: 'The kitchen is the heart of your home — a space for cooking, entertaining, and everyday living. Whether you\'re dreaming of a sleek, modern kitchen or a timeless, traditional layout, we help bring your vision to life.',
    serviceTypes: [
      {
        name: 'Contemporary Kitchen',
        description: 'Sleek, clean lines with minimalist design',
        features: ['Flat-front cabinets', 'Modern hardware', 'Smart appliances', 'Open layouts']
      },
      {
        name: 'Traditional Kitchen',
        description: 'Timeless elegance with detailed cabinetry',
        features: ['Decorative details', 'Classic materials', 'Warm atmosphere', 'Traditional charm']
      },
      {
        name: 'Modern Kitchen',
        description: 'Innovative design with cutting-edge style',
        features: ['Integrated appliances', 'Bold accents', 'Clean lines', 'Urban aesthetic']
      }
    ],
    whyChooseContent: 'A kitchen renovation is one of the most impactful home improvements, adding £25,000+ in value while creating a space you\'ll love using every day.',
    howEvoHomeHelpsContent: 'EvoHome connects you with experienced kitchen designers and installers who create bespoke solutions. We manage the entire project from design to completion.'
  },

  // Bathrooms
  {
    id: 'bathrooms',
    name: 'Bathrooms',
    slug: 'bathrooms',
    category: 'improvements',
    description: 'Stylish bathrooms improve comfort, relaxation, and increase home value.',
    longDescription: 'Create a luxury bathroom with modern fixtures and professional installation. Complete bathroom renovation service including design, supply, and installation.',
    benefits: [
      'Complete design service',
      'Quality fixtures and fittings',
      'Professional installation',
      'Increase property value by £20,000+',
      'Full project management',
      'Modern functionality',
      'Enhanced comfort',
      'Water-efficient solutions'
    ],
    image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
    installTime: '5-10 days',
    warranty: '10 years',
    whatIsIt: 'A well-designed bathroom enhances your daily comfort and adds significant value to your home. Modern bathrooms combine style, functionality, and efficiency for the perfect retreat.',
    serviceTypes: [
      {
        name: 'Contemporary Bathroom',
        description: 'Clean lines and minimalist design for modern living',
        features: ['Frameless glass showers', 'Floating vanities', 'Neutral palettes', 'Modern fixtures']
      },
      {
        name: 'Traditional Bathroom',
        description: 'Timeless charm with classic fixtures and elegant details',
        features: ['Freestanding bathtubs', 'Classic fixtures', 'Warm tones', 'Ornate details']
      },
      {
        name: 'Modern Bathroom',
        description: 'Innovative design with cutting-edge functionality',
        features: ['Walk-in showers', 'Integrated storage', 'Bold accents', 'Smart technology']
      }
    ],
    whyChooseContent: 'Bathroom renovations offer excellent returns, adding £20,000+ in value while creating a luxurious daily experience. Modern bathrooms combine style with water and energy efficiency.',
    howEvoHomeHelpsContent: 'EvoHome connects you with bathroom specialists who create beautiful, functional spaces. We handle design, supply, and installation for a stress-free renovation.'
  },

  // Conservatories
  {
    id: 'conservatories',
    name: 'Conservatories',
    slug: 'conservatories',
    category: 'garden',
    description: 'Conservatories provide additional living space, natural light, and garden views.',
    longDescription: 'Extend your living space with a beautiful conservatory filled with natural light. Modern conservatories provide additional living space with advanced glazing and climate control.',
    benefits: [
      'Additional living space',
      'Natural light throughout',
      'Year-round usability',
      'Increase property value',
      'Connect with your garden',
      'Versatile usage options',
      'Energy-efficient glazing',
      'Professional installation'
    ],
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    installTime: '5-10 days',
    warranty: '10 years',
    whatIsIt: 'A conservatory is more than just an extension – it\'s a bright, versatile space that connects your home and garden, perfect for relaxing, entertaining, or enjoying the outdoors year-round.',
    serviceTypes: [
      {
        name: 'Victorian Conservatory',
        description: 'Traditional style with ornate detailing and bay-curved front',
        features: ['Multi-faceted design', 'Ornate ridge details', 'Enhanced garden views', 'Classic charm']
      },
      {
        name: 'Edwardian Conservatory',
        description: 'Square design maximizing floor space with clean lines',
        features: ['Rectangular shape', 'Maximum usable space', 'High sloping roof', 'Versatile usage']
      },
      {
        name: 'Lean-To Conservatory',
        description: 'Simple, practical design perfect for smaller spaces',
        features: ['Minimalist style', 'Cost-effective', 'Suitable for bungalows', 'Easy customization']
      }
    ],
    whyChooseContent: 'Conservatories add valuable living space and connect you with your garden. Modern designs offer year-round comfort with energy-efficient glazing and climate control.',
    howEvoHomeHelpsContent: 'EvoHome works with conservatory specialists to deliver high-quality installations. We handle design, planning, and installation for a seamless experience.'
  },

  // Garden Rooms
  {
    id: 'garden-rooms',
    name: 'Garden Rooms',
    slug: 'garden-rooms',
    category: 'garden',
    description: 'Garden rooms create versatile, comfortable spaces for work, relaxation, or hobbies.',
    longDescription: 'Versatile garden buildings for home offices, gyms, or relaxation spaces. Insulated garden rooms provide year-round comfort with quick installation.',
    benefits: [
      'Flexible usage options',
      'Year-round comfort',
      'Quick installation',
      'No planning permission usually required',
      'Increase property value',
      'Fully insulated',
      'Modern design options',
      'Cost-effective space solution'
    ],
    image: 'https://images.pexels.com/photos/1396130/pexels-photo-1396130.jpeg',
    installTime: '3-7 days',
    warranty: '10 years',
    whatIsIt: 'A garden room is a smart way to add space without the hassle of an extension. Whether you need a home office, creative studio, chill-out zone, or entertaining space, garden rooms offer endless possibilities.',
    serviceTypes: [
      {
        name: 'Home Office',
        description: 'Dedicated workspace separate from your main home',
        features: ['Quiet environment', 'Professional appearance', 'High-speed connectivity', 'Climate controlled']
      },
      {
        name: 'Garden Studio',
        description: 'Creative space for art, music, or hobbies',
        features: ['Natural light', 'Inspiring environment', 'Soundproofing options', 'Flexible layout']
      },
      {
        name: 'Leisure Room',
        description: 'Entertainment space for relaxation and socializing',
        features: ['Comfortable seating', 'Entertainment systems', 'Bar facilities', 'Garden views']
      }
    ],
    whyChooseContent: 'Garden rooms offer incredible flexibility and value. They\'re perfect for remote work, hobbies, or simply creating more space without the cost and disruption of a house extension.',
    howEvoHomeHelpsContent: 'EvoHome connects you with garden room specialists who create bespoke buildings. We handle design, planning permissions, and installation for your perfect garden retreat.'
  },

  // Rendering
  {
    id: 'rendering',
    name: 'Rendering',
    slug: 'rendering',
    category: 'improvements',
    description: 'Protect and transform your home. Durable, stylish, weatherproof.',
    longDescription: 'Transform your property with professional exterior rendering. Enhance appearance, durability, and value with expert rendering services.',
    benefits: [
      'Enhanced weather protection',
      'Improved insulation',
      'Increased property value',
      'Modern aesthetic appeal',
      'Durable finish',
      'Low maintenance',
      'Crack resistance',
      'Professional installation'
    ],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    installTime: '5-10 days',
    warranty: '15 years',
    whatIsIt: 'Rendering is the process of applying a protective and decorative finish to the exterior of buildings. It provides weatherproofing, insulation, and aesthetic appeal by covering exposed brick, concrete, or block work.',
    materials: [
      {
        name: 'Silicone Render',
        description: 'Self-cleaning, waterproof render with excellent flexibility',
        pros: ['Self-cleaning', 'Highly flexible', 'Waterproof', 'Dirt resistant'],
        cons: ['Not breathable', 'Higher cost'],
        bestFor: 'Modern homes in urban or exposed areas'
      },
      {
        name: 'Acrylic Render',
        description: 'Flexible render with excellent crack resistance',
        pros: ['Crack resistant', 'Wide color range', 'Durable topcoat', 'Good flexibility'],
        cons: ['Less breathable', 'Moderate cost'],
        bestFor: 'Properties needing crack-resistant finish'
      },
      {
        name: 'Monocouche Render',
        description: 'Single-layer render offering durability and modern finish',
        pros: ['Single-coat application', 'Weather resistant', 'Various colors', 'Time-saving'],
        cons: ['Less breathable', 'May crack with movement'],
        bestFor: 'New builds and modern properties'
      }
    ],
    whyChooseContent: 'Rendering transforms your home\'s appearance while providing essential weather protection. Modern render systems offer decades of maintenance-free performance.',
    howEvoHomeHelpsContent: 'EvoHome connects you with rendering specialists who understand different property types and requirements. We ensure the right render system for your home\'s specific needs.'
  },

  // Cladding
  {
    id: 'cladding',
    name: 'Cladding',
    slug: 'cladding',
    category: 'improvements',
    description: 'Exterior cladding transforms appearance, improves insulation, and protects against the elements.',
    longDescription: 'Transform the appearance and energy efficiency of your home with quality exterior cladding. Professional installation using modern materials for lasting results.',
    benefits: [
      'Improved insulation',
      'Enhanced weather protection',
      'Modern aesthetic appeal',
      'Increased property value',
      'Low maintenance options',
      'Durable materials',
      'Professional installation',
      'Energy efficiency gains'
    ],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    installTime: '7-14 days',
    warranty: '15 years',
    whatIsIt: 'Cladding adds a layer of protection against the elements, reduces maintenance needs, and enhances your property\'s curb appeal. Modern cladding systems provide insulation and weather protection.',
    materials: [
      {
        name: 'Timber Cladding',
        description: 'Natural wood offering warmth and traditional appeal',
        pros: ['Natural beauty', 'Eco-friendly', 'Warm appearance', 'Renewable material'],
        cons: ['Requires maintenance', 'Weather treatment needed'],
        bestFor: 'Traditional homes and eco-conscious homeowners'
      },
      {
        name: 'Composite Cladding',
        description: 'Wood-plastic composite offering wood appearance with durability',
        pros: ['Wood appearance', 'Low maintenance', 'Fade resistant', 'Durable'],
        cons: ['Higher initial cost', 'Limited repair options'],
        bestFor: 'Homeowners wanting wood look without maintenance'
      },
      {
        name: 'Metal Cladding',
        description: 'Aluminium or steel offering modern, durable finish',
        pros: ['Highly durable', 'Fire resistant', 'Modern aesthetic', 'Low maintenance'],
        cons: ['Can be noisy', 'Industrial appearance'],
        bestFor: 'Contemporary homes and commercial properties'
      }
    ],
    whyChooseContent: 'Cladding provides excellent insulation and weather protection while transforming your home\'s appearance. Modern materials offer decades of maintenance-free performance.',
    howEvoHomeHelpsContent: 'EvoHome connects you with cladding specialists who understand building regulations and installation techniques. We ensure quality materials and professional installation.'
  },

  // Property Maintenance
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
      'Ongoing support',
      'Prevent costly issues',
      'Maintain property value',
      'Peace of mind'
    ],
    image: 'https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg',
    installTime: 'Same day - 3 days',
    warranty: '12 months',
    whatIsIt: 'Regular property maintenance keeps your home in perfect condition, prevents costly repairs, and maintains its value. Our trusted professionals handle everything from routine upkeep to urgent repairs.',
    serviceTypes: [
      {
        name: 'Routine Maintenance',
        description: 'Regular upkeep to prevent issues and maintain your home',
        features: ['Scheduled inspections', 'Preventive repairs', 'Maintenance planning', 'Cost-effective care']
      },
      {
        name: 'Emergency Repairs',
        description: 'Urgent repairs when you need them most',
        features: ['24/7 availability', 'Rapid response', 'Emergency callouts', 'Immediate solutions']
      },
      {
        name: 'Seasonal Services',
        description: 'Prepare your home for changing seasons',
        features: ['Gutter cleaning', 'Boiler servicing', 'Garden maintenance', 'Weather preparation']
      }
    ],
    whyChooseContent: 'Regular maintenance prevents small issues becoming expensive problems. Our trusted professionals keep your home in perfect condition year-round.',
    howEvoHomeHelpsContent: 'EvoHome connects you with reliable maintenance professionals who provide quality service at fair prices. We ensure your home receives the care it deserves.'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured);
};