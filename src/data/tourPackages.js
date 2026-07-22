export const packagesSectionContent = {
  eyebrow: "Handpicked Journeys",
  title: "Explore Popular Packages",
  description: "Get started with handpicked top rated trips.",
};

export const domesticTourPackages = [
  {
    id: "kerala-backwaters-luxury-retreat",
    title: "Kerala Backwaters & Private Houseboat Retreat",
    location: "Kerala, India",
    duration: "5–7 days",
    description:
      "Cruise Alleppey's palm-fringed backwaters aboard a private houseboat, unwind in a luxury lakeside resort, and discover the misty tea gardens of Munnar.",
    rating: 4.9,
    reviewCount: 32,
    priceFrom: 38900,
    currency: "₹",
    hasVideo: true,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "kashmir-valley-luxury-escape",
    title: "Kashmir Valley, Dal Lake & Gulmarg Escape",
    location: "Kashmir, India",
    duration: "6–8 days",
    description:
      "Stay in a heritage houseboat on Dal Lake, explore the alpine meadows of Gulmarg, and travel through Kashmir's most spectacular mountain valleys.",
    rating: 4.9,
    reviewCount: 28,
    priceFrom: 44900,
    currency: "₹",
    hasVideo: true,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "royal-rajasthan-palace-trail",
    title: "Royal Rajasthan Palaces & Desert Trail",
    location: "Rajasthan, India",
    duration: "7–9 days",
    description:
      "Journey through Jaipur, Jodhpur and Udaipur with palace stays, private heritage tours, and a starlit dinner amid the golden desert dunes.",
    rating: 4.8,
    reviewCount: 24,
    priceFrom: 52900,
    currency: "₹",
    hasVideo: false,
    badge: "Luxury Pick",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "goa-coastal-luxury-break",
    title: "Goa Coastal Luxury & Heritage Break",
    location: "Goa, India",
    duration: "4–6 days",
    description:
      "Relax at a premium beach resort, sail along the Mandovi at sunset, and explore Goa's Portuguese quarters with a private local guide.",
    rating: 4.7,
    reviewCount: 21,
    priceFrom: 29900,
    currency: "₹",
    hasVideo: false,
    badge: "Couples' Pick",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "himachal-snow-mountain-retreat",
    title: "Himachal Snow Peaks & Mountain Retreat",
    location: "Himachal Pradesh, India",
    duration: "5–7 days",
    description:
      "Escape to secluded mountain stays near Manali, take in snow-covered Himalayan panoramas, and enjoy curated forest and village experiences.",
    rating: 4.8,
    reviewCount: 19,
    priceFrom: 34900,
    currency: "₹",
    hasVideo: false,
    badge: "Family Favourite",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "andaman-island-villa-escape",
    title: "Andaman Island & Barefoot Beach Escape",
    location: "Andaman Islands, India",
    duration: "5–7 days",
    description:
      "Discover clear tropical waters, quiet white-sand beaches and vibrant reefs, paired with a premium island stay and private coastal excursions.",
    rating: 4.9,
    reviewCount: 17,
    priceFrom: 46900,
    currency: "₹",
    hasVideo: true,
    badge: "Island Escape",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
  },
];

// NOTE ON IMAGES
// These use hotlinkable, license-safe sources so you can ship immediately:
//  - Unsplash (free license, direct CDN, each URL below was verified live)
//  - Wikimedia Commons (CC BY-SA, via the stable Special:FilePath redirect)
// Swap for your own CDN/DAM URLs whenever you're ready — the `image` field
// is the only thing that needs to change.
//
// If you're using next/image, add these hosts to next.config.js:
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "images.unsplash.com" },
//       { protocol: "https", hostname: "commons.wikimedia.org" },
//     ],
//   }

export const tourPackages = [
  {
    id: "santorini-cliffside-villa-escape",
    title: "Santorini Cliffside Villa & Caldera Sunset Escape",
    location: "Santorini, Greece",
    duration: "3–6 days",
    description:
      "Settle into a private whitewashed villa carved into the caldera, with an infinity pool facing the Aegean and front-row seats to the world's most famous sunset.",
    rating: 4.9,
    reviewCount: 18,
    priceFrom: 890,
    currency: "$",
    hasVideo: true,
    badge: "Luxury Pick",
    image:
      "https://images.unsplash.com/photo-1547141749-e5222f8b8646?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "maldives-overwater-pool-villa",
    title: "Maldives Overwater Pool Villa Retreat",
    location: "Maldives",
    duration: "5–7 days",
    description:
      "Wake up over turquoise lagoon water in a private overwater villa, with a glass floor, your own infinity pool, and direct steps down into the reef.",
    rating: 5.0,
    reviewCount: 24,
    priceFrom: 1450,
    currency: "$",
    hasVideo: true,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "dubai-skyline-desert-luxury",
    title: "Dubai Skyline & Arabian Desert Luxury Experience",
    location: "Dubai, UAE",
    duration: "3–6 days",
    description:
      "Combine Burj Khalifa sky-lounge views and Dubai Mall shopping with a private overnight desert safari camp under the stars, complete with falconry and fine dining.",
    rating: 4.8,
    reviewCount: 15,
    priceFrom: 720,
    currency: "$",
    hasVideo: false,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1745750434535-5943ef2fd31a?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "kyoto-golden-temples-torii-trails",
    title: "Kyoto Golden Temples & Torii Gate Trails",
    location: "Kyoto, Japan",
    duration: "3–6 days",
    description:
      "Wander the thousand vermilion torii gates of Fushimi Inari, sip matcha in a centuries-old teahouse, and watch Kinkaku-ji's golden reflection at dawn.",
    rating: 4.9,
    reviewCount: 21,
    priceFrom: 540,
    currency: "$",
    hasVideo: false,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1542648284-01cca5c1052e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "santorini-caldera-sailing-cruise",
    title: "Aegean Caldera Sunset Sailing & Wine Cruise",
    location: "Santorini, Greece",
    duration: "0–3 hours",
    description:
      "Sail the volcanic caldera on a private catamaran, swim in hot springs, and finish with a wine tasting on deck as the sky turns gold over Oia.",
    rating: 4.7,
    reviewCount: 9,
    priceFrom: 95,
    currency: "$",
    hasVideo: false,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1446822679794-fbd084d10491?q=80&w=1400&auto=format&fit=crop",
  },

  {
  id: "zermatt-matterhorn-alpine-chalet",
  title: "Zermatt Alpine Chalet & Matterhorn Panorama Escape",
  location: "Zermatt, Switzerland",
  duration: "5–7 days",
  description:
    "Base yourself in a private wooden chalet at the foot of the Matterhorn, with car-free village charm by day and glacier-view dining by night — no passport, no crowds, just the Alps.",
  rating: 4.9,
  reviewCount: 12,
  priceFrom: 1180,
  currency: "$",
  hasVideo: true,
  badge: "Luxury Pick",
  image:
    "https://images.unsplash.com/photo-1692892285387-fc06d6a88604?q=80&w=1400&auto=format&fit=crop",
},

];
