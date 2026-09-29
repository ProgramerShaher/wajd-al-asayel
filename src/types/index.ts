export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  materials: string[];
  features: string[];
  imageUrl: string;
  aspectRatio?: string;
  sampleCode?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'قصور خاصة' | 'بنتهاوس' | 'يخوت فاخرة' | 'صالات عرض عالمية' | 'معالم تاريخية' | string;
  location: string;
  year: string;
  technique: string;
  dimensions: string;
  curatorNotes: string;
  imageUrl: string;
  videoUrl?: string;
  detailImageUrl?: string;
  featured?: boolean;
  accentColor?: string;
  colSpan?: string;
}

export interface SwatchFinish {
  id: string;
  name: string;
  category: string;
  tone: string;
  sheen: string;
  description: string;
  composition: string;
  imageUrl: string;
  baseHex: string;
  goldReflectance: number;
}

export interface ArtisanStep {
  step: string;
  name: string;
  duration: string;
  description: string;
  detail: string;
  materials: string;
  images: string[];
}

export interface StudioMetric {
  value: string;
  label: string;
  sub: string;
}
