export interface Business {
  _id: string;
  externalId: string;
  name: string;
  category: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  rating: number | null;
  priceLevel: number | null;
  phone: string | null;
  website: string | null;
  hours: Record<string, string> | null;
  imageUrls: string[];
  isOpen?: boolean;
  distance?: number;
}

export interface Review {
  _id: string;
  userId: { _id: string; name: string | null; avatar: string | null };
  businessId: string;
  rating: number;
  content: string;
  sentiment: "positive" | "neutral" | "negative" | null;
  createdAt: string;
}

export interface SearchFilters {
  query: string;
  category?: string;
  lat?: number;
  lng?: number;
  radius?: number;
  minRating?: number;
  openNow?: boolean;
  priceLevel?: number;
  page?: number;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}
