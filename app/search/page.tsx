"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<
    {
      id: string;
      name: string;
      category: string;
      address: string;
      rating: number;
      reviews: number;
      image: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      // TODO: Connect to Foursquare API
      // For now, show mock results
      setTimeout(() => {
        setResults(mockResults);
        setLoading(false);
      }, 1000);
    }
  }, [query]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex gap-4 p-4 border border-border-default rounded-lg"
          >
            <div className="skeleton w-24 h-24 rounded-md" />
            <div className="flex-1 space-y-2">
              <div className="skeleton h-5 w-3/4" />
              <div className="skeleton h-4 w-1/2" />
              <div className="skeleton h-4 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((result: any) => (
        <Link href={`/place/${result.id}`} key={result.id}>
          <div className="flex gap-4 p-4 border border-border-default rounded-lg hover:border-border-emphasis transition-colors cursor-pointer">
            <img
              src={result.image}
              alt={result.name}
              className="w-24 h-24 rounded-md object-cover"
            />
            <div className="flex-1">
              <h3 className="text-text-primary font-medium text-lg">
                {result.name}
              </h3>
              <p className="text-text-secondary text-sm">{result.category}</p>
              <p className="text-text-muted text-sm mt-1">{result.address}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-accent-white text-sm">
                  ★ {result.rating}
                </span>
                <span className="text-text-muted text-sm">
                  ({result.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Mock data for now
const mockResults = [
  {
    id: "1",
    name: "The Grand Restaurant",
    category: "Restaurant",
    address: "123 Main St",
    rating: 4.8,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Cafe Deluxe",
    category: "Cafe",
    address: "456 Oak Ave",
    rating: 4.5,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=100&h=100&fit=crop",
  },
  // Add more mock results as needed
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <header className="border-b border-border-default py-4 px-6 sticky top-0 bg-bg-primary z-10">
        <div className="container mx-auto">
          <Link
            href="/"
            className="font-display text-2xl text-text-primary hover:text-text-secondary transition-colors"
          >
            Localens
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchContent />
        </Suspense>
      </div>
    </main>
  );
}

import { useState, useEffect } from "react";
