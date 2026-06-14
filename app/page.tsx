"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="border-b border-border-default py-4 px-6">
        <div className="container mx-auto">
          <h1 className="font-display text-2xl text-text-primary">Localens</h1>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <h2 className="font-display text-5xl md:text-7xl text-text-primary text-center mb-4">
          Discover Premium
          <br />
          Local Experiences
        </h2>
        <p className="text-text-secondary text-lg text-center mb-8 max-w-2xl">
          Find the best products, services, and businesses around you.
          AI-powered recommendations from real reviews.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for restaurants, cafes, shops, services..."
            className="w-full px-6 py-4 bg-bg-card border border-border-default rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-border-emphasis transition-colors text-lg"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-accent-white text-bg-primary rounded-md hover:bg-white/90 transition-colors font-medium"
          >
            Search
          </button>
        </form>

        {/* Category Pills */}
        <div className="flex gap-3 mt-8 flex-wrap justify-center">
          {[
            "Restaurants",
            "Cafes",
            "Hotels",
            "Shops",
            "Services",
            "Bars",
            "Fitness",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSearchQuery(cat);
                router.push(`/search?q=${encodeURIComponent(cat)}`);
              }}
              className="px-4 py-2 bg-bg-subtle border border-border-default rounded-md text-text-secondary hover:text-text-primary hover:border-border-emphasis transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
