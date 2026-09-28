import { SareeProduct, ReviewItem, InstagramPost } from '../types';

export const HERITAGE_FABRICS = [
  {
    id: 'kanjeevaram',
    name: 'Kanjeevaram',
    tagline: 'The Queen of Silks',
    description: 'Triple-twisted mulberry silk woven with pure gold zari and signature korvai interlocking borders from Tamil Nadu.',
    origin: 'Kanchipuram, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    count: 24
  },
  {
    id: 'banarasi',
    name: 'Banarasi',
    tagline: 'Imperial Zari Poetry',
    description: 'Fine silk brocades adorned with intricate floral jaal, mina work, and Mughal-inspired motifs handwoven along the Ganga.',
    origin: 'Varanasi, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    count: 18
  },
  {
    id: 'mysore-silk',
    name: 'Mysore Silk',
    tagline: 'Featherlight Elegance',
    description: 'Unmatched sheen, fluid drape, and pure gold lace border crafted from heritage mulberry cocoons of Karnataka.',
    origin: 'Mysore, Karnataka',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    count: 15
  },
  {
    id: 'cotton-silk',
    name: 'Cotton Silk',
    tagline: 'Artisanal Breathability',
    description: 'The natural breathability of fine handloom cotton intertwined with the luminous luster of raw desi silk.',
    origin: 'Chanderi & Maheshwar',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
    count: 21
  }
];

export const HERITAGE_PRODUCTS: SareeProduct[] = [
  {
    id: 'hl-01',
    name: 'Rajgharana Crimson Korvai Kanjeevaram',
    fabric: 'Kanjeevaram',
    price: 48500,
    originalPrice: 54000,
    description: 'Woven with certified pure gold zari, contrasting emerald green korvai border featuring twin mayil (peacock) motifs and traditional rudraksh weave.',
    zariType: 'Certified Pure 24K Gold Plated Silver Zari',
    weaveTime: '28 Days of Master Handloom',
    origin: 'Kanchipuram Heritage Guild',
    color: 'Crimson & Emerald',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=90',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=90'
    ],
    inStock: true,
    isNewArrival: true,
    isBridal: true,
    tag: 'Bridal Heritage'
  },
  {
    id: 'hl-02',
    name: 'Neelambari Shikargah Banarasi Brocade',
    fabric: 'Banarasi',
    price: 42000,
    description: 'Midnight navy katan silk adorned with a classic royal shikargah (hunting scene) woven in antique gold and silver tested zari.',
    zariType: 'Antique Gold & Silver Zari',
    weaveTime: '22 Days on Pit Loom',
    origin: 'Varanasi',
    color: 'Midnight Navy & Antique Gold',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
    inStock: true,
    isNewArrival: true,
    isBridal: false,
    tag: 'Collector Series'
  },
  {
    id: 'hl-03',
    name: 'Kanakambari Mustard Mysore Crepe Silk',
    fabric: 'Mysore Silk',
    price: 29500,
    originalPrice: 32000,
    description: 'Lightweight pure crepe silk with rich gold kasuti border and hand-knotted tassels along the pallu.',
    zariType: '100% Tested Pure Zari',
    weaveTime: '14 Days of Weaving',
    origin: 'Mysore Silk Mills',
    color: 'Mustard Gold & Ruby',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85',
    inStock: true,
    isNewArrival: true,
    isBridal: false,
    tag: 'New Drape'
  },
  {
    id: 'hl-04',
    name: 'Parijat Hand-Spun Chanderi Cotton Silk',
    fabric: 'Cotton Silk',
    price: 18500,
    description: 'Translucent gossamer weave in blush pink with silver floral buttas and delicate handloom selvedge.',
    zariType: 'Fine Silver Mukaish Zari',
    weaveTime: '10 Days Handloom',
    origin: 'Chanderi Weavers Society',
    color: 'Blush & Silver',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    inStock: true,
    isNewArrival: false,
    isBridal: false,
    tag: 'Festive Daily'
  },
  {
    id: 'hl-05',
    name: 'Maharani Emerald Vaira Oosi Kanjeevaram',
    fabric: 'Kanjeevaram',
    price: 52000,
    description: 'Luminous deep bottle green pure silk with diamond needle stripes (vaira oosi) running through the body and a rich temple gopuram border.',
    zariType: 'Heavy Tested Gold Zari',
    weaveTime: '32 Days Master Weaving',
    origin: 'Kanchipuram Guild',
    color: 'Emerald & Gold',
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    inStock: true,
    isNewArrival: true,
    isBridal: true,
    tag: 'Royal Bridal'
  },
  {
    id: 'hl-06',
    name: 'Surya Rangkat Multi-Hued Banarasi Georgette',
    fabric: 'Banarasi',
    price: 38900,
    description: 'Spectacular multi-colored dyed panels woven in real kadwa technique with gold floral vines dancing across the body.',
    zariType: 'Gold Kadwa Zari',
    weaveTime: '26 Days Pitloom',
    origin: 'Varanasi',
    color: 'Saffron, Rani Pink & Gold',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
    inStock: true,
    isNewArrival: false,
    isBridal: true,
    tag: 'Bridal Trousseau'
  }
];

export const HERITAGE_TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-01',
    name: 'Dr. Arundhati Ramanathan',
    location: 'Chennai & London',
    rating: 5,
    comment: 'The crimson Korvai Kanjeevaram I ordered for my daughter’s muhurtham was an heirloom piece. The weight, the genuine silk mark, and the personal WhatsApp consultation made all the difference.',
    date: 'February 2026',
    sareePurchased: 'Rajgharana Crimson Korvai'
  },
  {
    id: 'rev-02',
    name: 'Gayathri Devanathan',
    location: 'Bengaluru',
    rating: 5,
    comment: 'Unlike retail chains where sarees feel mass-manufactured, every piece here has an artisan note and pure certified zari. Beautiful drape that stayed crisp for 8 hours of wedding rituals.',
    date: 'January 2026',
    sareePurchased: 'Maharani Emerald Vaira Oosi'
  },
  {
    id: 'rev-03',
    name: 'Meera Sen Gupta',
    location: 'Kolkata',
    rating: 5,
    comment: 'Their Banarasi brocades bring back the lost art of true kadwa handloom. Ordering over direct WhatsApp enquiry was seamless and delivered in heirloom cedar wood box.',
    date: 'March 2026',
    sareePurchased: 'Neelambari Shikargah Banarasi'
  }
];

export const HERITAGE_INSTAGRAM: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    caption: 'The golden hour glow on pure 24K zari warp. Handcrafted in Kanchipuram #AuraSilks #HeritageDrapes',
    likes: 1840,
    comments: 42,
    permalink: 'https://instagram.com'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
    caption: 'Behind the loom: 28 days of hand-pulled Jacquard punch cards in our Varanasi workshop. #ArtisanLegacy',
    likes: 2410,
    comments: 67,
    permalink: 'https://instagram.com'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    caption: 'Bridal trousseau styling: Pairing ruby red temple silks with heritage South Indian antique jewels. #BrideOfAura',
    likes: 3120,
    comments: 94,
    permalink: 'https://instagram.com'
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80',
    caption: 'Subtle elegance: Chanderi cotton silk with delicate tested silver mukaish weave for morning rituals. #PureSilks',
    likes: 1290,
    comments: 31,
    permalink: 'https://instagram.com'
  }
];
