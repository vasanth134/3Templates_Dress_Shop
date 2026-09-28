import { SareeProduct, ReviewItem, DrapeStep } from '../types';

export const MODERN_OCCASIONS = [
  {
    id: 'wedding',
    name: 'Wedding',
    subtitle: 'High-octane modern opulence',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80',
    count: '34 Drapes'
  },
  {
    id: 'festive',
    name: 'Festive',
    subtitle: 'Vibrant festive statements',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80',
    count: '48 Drapes'
  },
  {
    id: 'office-wear',
    name: 'Office Wear',
    subtitle: 'Structured, breathable chic',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80',
    count: '26 Drapes'
  },
  {
    id: 'casual',
    name: 'Casual & Brunch',
    subtitle: 'Effortless everyday organza & linens',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=700&q=80',
    count: '19 Drapes'
  }
];

export const MODERN_PRODUCTS: SareeProduct[] = [
  {
    id: 'mm-01',
    name: 'The Sage Mineral Silk Saree',
    fabric: 'Organza',
    price: 14800,
    originalPrice: 17500,
    description: 'Crisp Japanese tissue organza in translucent eucalyptus sage with laser-cut metallic scallop borders and minimalist threadwork.',
    color: 'Sage Mist',
    occasion: 'Casual',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    isNewArrival: true,
    isBestSeller: true,
    tag: 'Trending'
  },
  {
    id: 'mm-02',
    name: 'Neo Noir Sculptural Satin Drape',
    fabric: 'Mysore Silk',
    price: 21900,
    description: 'Ultra-fluid black mulberry silk crepe with chrome-silver pinstripe selvedge and pre-stitched structured pleats.',
    color: 'Obsidian Black',
    occasion: 'Office Wear',
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    isNewArrival: true,
    isBestSeller: true,
    tag: 'Modern Classic'
  },
  {
    id: 'mm-03',
    name: 'Vermillion Sunset Chanderi',
    fabric: 'Cotton Silk',
    price: 16200,
    originalPrice: 19000,
    description: 'Breezy lightweight handloom cotton silk with modern geometric silver buttas and feather-touch pallu.',
    color: 'Electric Coral & Ochre',
    occasion: 'Festive',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    isNewArrival: true,
    isBestSeller: false,
    tag: 'New Drop'
  },
  {
    id: 'mm-04',
    name: 'Blush Champagne Liquid Tissue',
    fabric: 'Kanjeevaram',
    price: 32500,
    description: 'Contemporary champagne rose tissue weave with subtle platinum rose zari. Tailored for cocktail evenings and modern receptions.',
    color: 'Blush Champagne',
    occasion: 'Wedding',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    isNewArrival: false,
    isBestSeller: true,
    tag: 'Bestseller'
  },
  {
    id: 'mm-05',
    name: 'Cobalt Cobalt Linear Habutai Drape',
    fabric: 'Mysore Silk',
    price: 19400,
    description: 'Deep cobalt blue with architectural white micro-borders and zero-friction drape designed for 12-hour workdays.',
    color: 'Cobalt Blue',
    occasion: 'Office Wear',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    isNewArrival: true,
    isBestSeller: false,
    tag: 'Desk to Dinner'
  },
  {
    id: 'mm-06',
    name: 'Ivory Gold Modern Banarasi',
    fabric: 'Banarasi',
    price: 28900,
    originalPrice: 34000,
    description: 'Clean architectural grid motifs in spun silk with soft rose gold accents. Understated luxury without the bulk.',
    color: 'Ivory & Rose Gold',
    occasion: 'Wedding',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    isNewArrival: false,
    isBestSeller: true,
    tag: 'Bridal Edit'
  }
];

export const MODERN_LOOKBOOK = [
  {
    id: 'look-1',
    title: 'The Contemporary Power Drape',
    tagline: 'Styled with a tailored linen blazer & belt',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    saree: 'Neo Noir Sculptural Satin Drape'
  },
  {
    id: 'look-2',
    title: 'Sunset Garden Cocktail',
    tagline: 'Cascading open-pallu with statement ear cuff',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    saree: 'The Sage Mineral Silk Saree'
  },
  {
    id: 'look-3',
    title: 'Minimalist Festive Reception',
    tagline: 'Floating pleats with clean pearl choker',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    saree: 'Blush Champagne Liquid Tissue'
  }
];

export const DRAPE_STEPS: DrapeStep[] = [
  {
    step: 1,
    title: 'The Foundation Tuck',
    subtitle: 'Anchor the silhouette',
    description: 'Tuck the plain inner edge neatly into your petticoat or shapewear at the navel, turning once completely around your waist clockwise.',
    duration: '30 seconds',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80'
  },
  {
    step: 2,
    title: 'The Measurement & Pallu Throw',
    subtitle: 'Perfect proportion',
    description: 'Take the decorated pallu end and drape it over your left shoulder from back to front to set your desired length (falling just past the back of the knee).',
    duration: '45 seconds',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80'
  },
  {
    step: 3,
    title: 'The Modern Clean Pleats',
    subtitle: 'Crisp architectural lines',
    description: 'Make 5 to 7 clean 4-inch wide pleats with the remaining fabric. Shake lightly so pleats align straight down, then tuck firmly inside the waistband.',
    duration: '60 seconds',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80'
  },
  {
    step: 4,
    title: 'Securing & Contemporary Styling',
    subtitle: 'All-day comfort',
    description: 'Pin the pallu at the shoulder seam behind your collarbone. Pair with a structured belt or modern crop top for a razor-sharp profile.',
    duration: '20 seconds',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80'
  }
];

export const MODERN_REVIEWS: ReviewItem[] = [
  {
    id: 'mr-1',
    name: 'Ananya Roy',
    location: 'Mumbai',
    rating: 5,
    comment: 'Finally a saree brand that understands modern urban life. The Sage drape was featherlight, took 3 minutes to style, and I received countless compliments at my tech summit!',
    date: '2 days ago',
    sareePurchased: 'The Sage Mineral Silk Saree'
  },
  {
    id: 'mr-2',
    name: 'Tanya Mehra',
    location: 'Gurugram',
    rating: 5,
    comment: 'The image swap feature gave me total confidence in how the pallu falls. Ordered the Neo Noir for an art gallery preview and it fit like a dream.',
    date: '1 week ago',
    sareePurchased: 'Neo Noir Sculptural Satin'
  },
  {
    id: 'mr-3',
    name: 'Pooja Hegde',
    location: 'Hyderabad',
    rating: 5,
    comment: 'Saree drape guide on the site was remarkably helpful. Zero bulkiness, pure breathable handloom silk.',
    date: '2 weeks ago',
    sareePurchased: 'Vermillion Sunset Chanderi'
  }
];
