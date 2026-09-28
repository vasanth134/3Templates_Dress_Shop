export interface SareeProduct {
  id: string;
  name: string;
  fabric: 'Kanjeevaram' | 'Banarasi' | 'Mysore Silk' | 'Cotton Silk' | 'Organza' | 'Chanderi' | 'Tussar';
  price: number;
  originalPrice?: number;
  description: string;
  zariType?: string;
  weaveTime?: string;
  origin?: string;
  color: string;
  image: string;
  secondaryImage: string;
  detailImages?: string[];
  inStock: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isBridal?: boolean;
  occasion?: 'Wedding' | 'Festive' | 'Office Wear' | 'Casual';
  tag?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  sareePurchased?: string;
  avatar?: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  permalink: string;
}

export interface DrapeStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  image: string;
}

export interface HotspotLook {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  subtitle: string;
  price: number;
  fabric: string;
  image: string;
}

export interface PressMention {
  publication: string;
  logoText: string;
  quote: string;
  issue: string;
}
