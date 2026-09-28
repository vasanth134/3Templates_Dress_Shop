import { SareeProduct, HotspotLook, PressMention } from '../types';

export const EDITORIAL_HERO_STORY = {
  issueNumber: 'ÉDITION NO. 14 / AUTUMN-WINTER',
  title: 'Threads of the Forgotten Dynasty',
  subtitle: 'A poetic rediscovery of pure Mulberry silk and 24-carat beaten zari woven on ancestral hand-turned Jacquards.',
  curatorNote: 'Shot on location along the ancient stone corridors of Chettinad and Varanasi, this editorial explores the tactile resonance between architectural heritage and fluid Indian silk.',
  heroImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85',
  collectionName: 'The Imperial Trousseau 2026'
};

export const EDITORIAL_STORY_BLOCKS = [
  {
    id: 'story-1',
    chapter: 'CHAPTER 01',
    title: 'The Alchemical Warp',
    narrative: 'Before a single thread is tied, the raw unbleached mulberry yarn rests in mountain spring water. Three weeks under the sun softens the protein fibers until they capture light like liquid crystal.',
    quote: '"Silk is not manufactured; it is listened to. If the humidity in the loom chamber shifts by three degrees, the tension whispers it immediately."',
    artisanName: 'Master Weaver V. Shanmugam, 4th Generation',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85',
    detailImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 'story-2',
    chapter: 'CHAPTER 02',
    title: 'Echoes of the Temple Towers',
    narrative: 'The Korvai technique is a quiet miracle of human coordination. Two weavers sit opposite each other on the wooden bench, passing shuttles across the divide to interlock border and body with zero visible seam.',
    quote: '"Each temple gopuram motif is mathematically etched into punch-cards, preserving a geometry that predates modern calculation."',
    artisanName: 'Govind & Lakshmi, Master Korvai Guild',
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=900&q=85',
    detailImage: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=700&q=85'
  }
];

export const EDITORIAL_CURATED_COLLECTIONS = [
  {
    id: 'curated-1',
    curationTitle: 'The Monastic Reds',
    descriptor: 'Deep Madder, Lacquer & Pomegranate Infusions',
    story: 'Seven rare shades of red derived strictly from natural insect lac and madder roots, woven with antique bullion zari.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85',
    piecesCount: '5 One-of-a-kind Pieces',
    priceRange: '₹45,000 — ₹95,000'
  },
  {
    id: 'curated-2',
    curationTitle: 'The Ethereal Organzas',
    descriptor: 'Gossamer Air & Metallic Mukaish Splendor',
    story: 'Weightless weaves that flutter with the gentlest breath, counterbalanced by hand-pressed silver foil and gota patti applique.',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=85',
    piecesCount: '8 Bespoke Drapes',
    priceRange: '₹28,000 — ₹62,000'
  },
  {
    id: 'curated-3',
    curationTitle: 'The Midnight Jacquards',
    descriptor: 'Indigo, Obsidian & Tarnished Silver Brocades',
    story: 'Shadow drapes created for private salon evenings and evening galas where gold is muted in favor of oxidized moonlit silver.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85',
    piecesCount: '4 Archival Drapes',
    priceRange: '₹52,000 — ₹1,10,000'
  }
];

export const EDITORIAL_ARTISANS = {
  title: 'Custodians of the Sacred Loom',
  subtitle: 'The Hands Behind The Weave',
  description: 'Our atelier partners directly with sixty-four multigenerational artisan families in Kanchipuram, Varanasi, and Maheshwar. By bypassing middlemen, we ensure each master weaver receives dignified compensation, healthcare, and fair provenance credit.',
  stats: [
    { number: '64', label: 'Master Weaving Families' },
    { number: '28', label: 'Average Days Per Saree' },
    { number: '100%', label: 'Traceable Pure Silk' },
    { number: '4 Decades', label: 'Continuous Lineage' }
  ],
  artisanQuote: 'When you wrap an authentic handloom saree, you wear twenty thousand hours of generational instinct.',
  leadArtisan: 'Sri Ramanujam Achari, National Award Winner, 1988'
};

export const SHOP_THE_LOOK_ITEMS: HotspotLook[] = [
  {
    id: 'look-saree',
    x: 48,
    y: 52,
    title: 'The Trousseau Kanjeevaram Saree',
    subtitle: 'Pure mulberry silk with 24K zari peacock border',
    price: 68000,
    fabric: 'Kanjeevaram Silk',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'look-pallu',
    x: 68,
    y: 35,
    title: 'Heirloom Mayil-Chakra Pallu',
    subtitle: 'Woven with dual-warp interlocking silver & gold thread',
    price: 42000,
    fabric: 'Tested Zari Brocade',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'look-blouse',
    x: 35,
    y: 28,
    title: 'The Hand-Embroidered Zardozi Blouse Piece',
    subtitle: 'Raw silk unstitched fabric with antique dabka work',
    price: 14500,
    fabric: 'Raw Silk & Zardozi',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=85'
  }
];

export const EDITORIAL_PRESS: PressMention[] = [
  {
    publication: 'VOGUE INDIA',
    logoText: 'VOGUE',
    quote: 'Aura Silks bridges the delicate chasm between heirloom museum-grade weaving and modern sartorial poise.',
    issue: 'Wedding Book Special Edition'
  },
  {
    publication: 'ELLE DECOR',
    logoText: 'ELLE',
    quote: 'The textile boutique redefining how South Asian brides discover and cherish their wedding drapes.',
    issue: 'The Luxury Craft Issue'
  },
  {
    publication: 'ARCHITECTURAL DIGEST',
    logoText: 'AD',
    quote: 'Step into their private salon and you are instantly enveloped by the quiet luxury of real handspun silk.',
    issue: 'Design & Craftsmanship Annual'
  },
  {
    publication: "HARPER'S BAZAAR",
    logoText: 'BAZAAR',
    quote: 'No synthetic sheen, no rushed production. Pure, unadulterated textile poetry.',
    issue: 'The Art of Indian Craft'
  }
];

export const EDITORIAL_PRODUCTS: SareeProduct[] = [
  {
    id: 'ed-01',
    name: 'Savitri Archival Kadwa Brocade',
    fabric: 'Banarasi',
    price: 58000,
    description: 'An archival reissue of a 1930s royal court design featuring repeating cypress trees and blooming lotus blossoms.',
    color: 'Terracotta & Burnished Gold',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85',
    inStock: true,
    tag: 'Archival Issue'
  },
  {
    id: 'ed-02',
    name: 'Padmavati Pure Gold Zari Kanjeevaram',
    fabric: 'Kanjeevaram',
    price: 76000,
    description: 'Triple-shuttle heavy wedding drape with pure zari checks and traditional temple border motifs.',
    color: 'Deep Madder & Antique Gold',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=900&q=85',
    inStock: true,
    tag: 'One of One'
  },
  {
    id: 'ed-03',
    name: 'Ananda Gossamer Handspun Tussar',
    fabric: 'Tussar',
    price: 36000,
    description: 'Wild forest tussar silk hand-painted with organic vegetable pigments and accented with gold mukaish dots.',
    color: 'Raw Ochre & Rust',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85',
    inStock: true,
    tag: 'Natural Dye'
  }
];
