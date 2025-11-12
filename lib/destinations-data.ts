export interface Highlight {
  icon: string
  title: string
  description: string
}

export interface Package {
  id: number
  title: string
  duration: string
  price: string
  description: string
  features: string[]
  image: string
  popular?: boolean
}

export interface Destination {
  id: number
  slug: string
  name: string
  location: string
  description: string
  longDescription: string
  image: string
  heroImage: string
  color: string
  emoji: string
  tags: string[]
  likes: number
  highlights: Highlight[]
  packages: Package[]
  mapCoordinates?: {
    lat: number
    lng: number
  }
  bestTimeToVisit: string
  localCurrency: string
  languages: string[]
}

const destinations: Destination[] = [
  {
    id: 1,
    slug: "thailand",
    name: "Thailand",
    location: "Southeast Asia",
    description: "Land of smiles with stunning temples, vibrant street life, and tropical beaches",
    longDescription:
      "Thailand captivates visitors with its perfect blend of ancient traditions and modern vibrancy. From the bustling streets of Bangkok to the serene beaches of Phuket and Koh Samui, Thailand offers diverse experiences for every traveler. Explore ornate temples, indulge in world-renowned cuisine, and immerse yourself in the warmth of Thai hospitality.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop",
    color: "#39FF14",
    emoji: "🇹🇭",
    tags: ["Beaches", "Culture", "Food", "Adventure"],
    likes: 4.5,
    highlights: [
      {
        icon: "Sun",
        title: "Pristine Beaches",
        description: "Relax on some of the world's most beautiful beaches with crystal-clear waters and white sand.",
      },
      {
        icon: "Utensils",
        title: "Culinary Delights",
        description: "Experience the explosion of flavors in authentic Thai cuisine, from street food to fine dining.",
      },
      {
        icon: "Landmark",
        title: "Ancient Temples",
        description:
          "Discover ornate Buddhist temples and ancient ruins that tell the story of Thailand's rich history.",
      },
      {
        icon: "Mountain",
        title: "Lush Landscapes",
        description: "Explore verdant jungles, limestone karsts, and hidden waterfalls throughout the country.",
      },
    ],
    packages: [
      {
        id: 101,
        title: "Bangkok & Beyond",
        duration: "7 days",
        price: "$1,299",
        description:
          "Experience the perfect blend of urban exploration and cultural immersion in Thailand's capital and surrounding areas.",
        features: [
          "City tour of Bangkok",
          "Ayutthaya day trip",
          "Floating markets",
          "Temple visits",
          "Thai cooking class",
        ],
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c8dd861?q=80&w=2070&auto=format&fit=crop",
        popular: true,
      },
      {
        id: 102,
        title: "Island Paradise",
        duration: "10 days",
        price: "$1,899",
        description: "Hop between Thailand's most beautiful islands and beaches for the ultimate tropical getaway.",
        features: [
          "Phuket exploration",
          "Phi Phi Islands tour",
          "Krabi beaches",
          "Snorkeling adventures",
          "Sunset cruises",
        ],
        image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: 103,
        title: "Northern Thailand Explorer",
        duration: "8 days",
        price: "$1,499",
        description: "Discover the cultural heart of Thailand in Chiang Mai and the mountainous north.",
        features: [
          "Chiang Mai temples",
          "Elephant sanctuary visit",
          "Hill tribe villages",
          "Doi Inthanon National Park",
          "Local craft workshops",
        ],
        image: "https://images.unsplash.com/photo-1598935898639-81586f7d2129?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    bestTimeToVisit: "November to March",
    localCurrency: "Thai Baht (THB)",
    languages: ["Thai", "English (widely spoken in tourist areas)"],
  },
  {
    id: 2,
    slug: "singapore",
    name: "Singapore",
    location: "Southeast Asia",
    description: "Modern city-state blending cultures, cuisines, and cutting-edge architecture",
    longDescription:
      "Singapore is a vibrant metropolis where East meets West in perfect harmony. This island city-state offers world-class attractions, pristine streets, lush gardens, and an incredible food scene. From the futuristic Gardens by the Bay to the historic shophouses of Chinatown, Singapore provides a compact yet diverse travel experience.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?q=80&w=2070&auto=format&fit=crop",
    color: "#00C2FF",
    emoji: "🇸🇬",
    tags: ["City", "Culture", "Food", "Modern"],
    likes: 4.6,
    highlights: [
      {
        icon: "Building",
        title: "Modern Architecture",
        description: "Marvel at iconic structures like Marina Bay Sands and the futuristic Supertree Grove.",
      },
      {
        icon: "Utensils",
        title: "Food Paradise",
        description: "Experience diverse culinary delights from hawker centers to Michelin-starred restaurants.",
      },
      {
        icon: "Trees",
        title: "Garden City",
        description: "Explore lush green spaces including Gardens by the Bay and the UNESCO-listed Botanic Gardens.",
      },
      {
        icon: "Landmark",
        title: "Cultural Districts",
        description: "Discover the rich heritage in Chinatown, Little India, and the Arab Quarter.",
      },
    ],
    packages: [
      {
        id: 201,
        title: "Singapore Highlights",
        duration: "5 days",
        price: "$1,599",
        description: "Experience the best of Singapore with this comprehensive city package.",
        features: [
          "Marina Bay exploration",
          "Gardens by the Bay",
          "Sentosa Island",
          "Cultural district tours",
          "Hawker food experience",
        ],
        image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=2070&auto=format&fit=crop",
        popular: true,
      },
    ],
    bestTimeToVisit: "February to April",
    localCurrency: "Singapore Dollar (SGD)",
    languages: ["English", "Mandarin", "Malay", "Tamil"],
  },
  {
    id: 3,
    slug: "malaysia",
    name: "Malaysia",
    location: "Southeast Asia",
    description: "A cultural melting pot with modern cities, ancient rainforests, and idyllic islands",
    longDescription:
      "Malaysia is a country of contrasts, where gleaming skyscrapers stand alongside colonial architecture, and pristine beaches border ancient rainforests. This multicultural nation offers visitors an incredible diversity of experiences, from the cosmopolitan energy of Kuala Lumpur to the orangutan sanctuaries of Borneo and the historic streets of Penang.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2064&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1576432204757-07e0536cfcc8?q=80&w=2070&auto=format&fit=crop",
    color: "#A259FF",
    emoji: "🇲🇾",
    tags: ["Culture", "Nature", "Cities", "Islands"],
    likes: 4.2,
    highlights: [
      {
        icon: "Building",
        title: "Modern Metropolis",
        description: "Explore Kuala Lumpur's impressive skyline, including the iconic Petronas Twin Towers.",
      },
      {
        icon: "Trees",
        title: "Ancient Rainforests",
        description: "Trek through some of the world's oldest tropical rainforests, home to diverse wildlife.",
      },
      {
        icon: "Utensils",
        title: "Fusion Cuisine",
        description: "Savor the unique blend of Malay, Chinese, and Indian flavors that define Malaysian cuisine.",
      },
      {
        icon: "Palmtree",
        title: "Island Escapes",
        description:
          "Relax on pristine beaches and dive in crystal-clear waters around islands like Langkawi and Tioman.",
      },
    ],
    packages: [
      {
        id: 301,
        title: "Malaysian Highlights",
        duration: "9 days",
        price: "$1,599",
        description: "Experience the best of Malaysia's diverse attractions, from urban centers to natural wonders.",
        features: [
          "Kuala Lumpur city tour",
          "Batu Caves",
          "Malacca historical sites",
          "Cameron Highlands",
          "Penang cultural exploration",
        ],
        image: "https://images.unsplash.com/photo-1590079014833-d3d8b7c85ce4?q=80&w=1974&auto=format&fit=crop",
        popular: true,
      },
      {
        id: 302,
        title: "Borneo Adventure",
        duration: "8 days",
        price: "$1,799",
        description: "Discover the wild side of Malaysia in Borneo, with its unique wildlife and indigenous cultures.",
        features: [
          "Orangutan sanctuaries",
          "Kinabatangan River cruise",
          "Danum Valley",
          "Traditional longhouse stay",
          "Mount Kinabalu National Park",
        ],
        image: "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=2035&auto=format&fit=crop",
      },
      {
        id: 303,
        title: "Island Paradise",
        duration: "7 days",
        price: "$1,399",
        description: "Relax and rejuvenate on Malaysia's stunning islands and beaches.",
        features: [
          "Langkawi exploration",
          "Perhentian Islands",
          "Snorkeling and diving",
          "Beach relaxation",
          "Island hopping",
        ],
        image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=1974&auto=format&fit=crop",
      },
    ],
    bestTimeToVisit: "December to April",
    localCurrency: "Malaysian Ringgit (MYR)",
    languages: ["Malay", "English", "Chinese", "Tamil"],
  },
  {
    id: 4,
    slug: "maldives",
    name: "Maldives",
    location: "Indian Ocean",
    description: "Paradise of overwater bungalows and crystal-clear turquoise waters",
    longDescription:
      "The Maldives is the ultimate tropical paradise, comprising 26 atolls with over 1,000 coral islands scattered across the Indian Ocean. Famous for its overwater bungalows, powder-white beaches, and unparalleled marine life, this island nation offers the perfect setting for romance, relaxation, and underwater adventures. Experience luxury at its finest while surrounded by some of the most beautiful natural scenery on earth.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop",
    color: "#00C2FF",
    emoji: "🇲🇻",
    tags: ["Luxury", "Beaches", "Romance", "Diving"],
    likes: 5.0,
    highlights: [
      {
        icon: "Hotel",
        title: "Overwater Villas",
        description: "Stay in iconic overwater bungalows with direct access to the crystal-clear lagoon below.",
      },
      {
        icon: "Fish",
        title: "Marine Wonders",
        description: "Explore vibrant coral reefs and swim alongside manta rays, whale sharks, and tropical fish.",
      },
      {
        icon: "Palmtree",
        title: "Pristine Beaches",
        description:
          "Relax on secluded beaches with powdery white sand and turquoise waters stretching to the horizon.",
      },
      {
        icon: "Sunset",
        title: "Romantic Experiences",
        description: "Enjoy private dinners on the beach, sunset cruises, and couples spa treatments in paradise.",
      },
    ],
    packages: [
      {
        id: 401,
        title: "Maldives Luxury Escape",
        duration: "7 days",
        price: "$3,299",
        description: "Indulge in the ultimate Maldives experience with this luxury resort package.",
        features: [
          "Overwater villa accommodation",
          "All-inclusive dining",
          "Sunset dolphin cruise",
          "Couples spa treatment",
          "Snorkeling excursions",
        ],
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2066&auto=format&fit=crop",
        popular: true,
      },
      {
        id: 402,
        title: "Diving Adventure",
        duration: "8 days",
        price: "$2,899",
        description: "Explore the underwater wonders of the Maldives with this diving-focused package.",
        features: [
          "Daily dive trips",
          "PADI certification courses",
          "Manta ray spotting",
          "Night diving",
          "Underwater photography workshop",
        ],
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 403,
        title: "Island Hopping",
        duration: "10 days",
        price: "$3,599",
        description: "Experience different sides of the Maldives by staying on multiple islands.",
        features: [
          "Luxury resort stay",
          "Local island experience",
          "Traditional Maldivian cuisine",
          "Cultural performances",
          "Marine conservation activities",
        ],
        image: "https://images.unsplash.com/photo-1586861256632-52a3db1073a7?q=80&w=1974&auto=format&fit=crop",
      },
    ],
    bestTimeToVisit: "November to April",
    localCurrency: "Maldivian Rufiyaa (MVR)",
    languages: ["Dhivehi", "English (widely spoken in resorts)"],
  },
  {
    id: 5,
    slug: "bali",
    name: "Bali",
    location: "Indonesia",
    description: "Island of the Gods with lush jungles and pristine beaches",
    longDescription:
      "Bali enchants visitors with its perfect harmony of natural beauty, spiritual depth, and artistic richness. This Indonesian paradise offers something for every traveler, from serene rice terraces and sacred temples to world-class surfing beaches and vibrant nightlife. Immerse yourself in the island's unique culture, characterized by daily offerings, traditional dances, and warm Balinese hospitality.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2070&auto=format&fit=crop",
    color: "#A259FF",
    emoji: "🇮🇩",
    tags: ["Beaches", "Culture", "Wellness", "Nature"],
    likes: 4.9,
    highlights: [
      {
        icon: "Palmtree",
        title: "Tropical Paradise",
        description:
          "Relax on stunning beaches with golden sand and clear blue waters perfect for swimming and surfing.",
      },
      {
        icon: "Landmark",
        title: "Sacred Temples",
        description: "Explore ancient Hindu temples set against dramatic landscapes, from clifftops to volcanic lakes.",
      },
      {
        icon: "Leaf",
        title: "Lush Landscapes",
        description: "Wander through emerald rice terraces, dense jungles, and dramatic volcanic scenery.",
      },
      {
        icon: "Heart",
        title: "Wellness & Spirituality",
        description: "Rejuvenate with yoga retreats, traditional spa treatments, and spiritual healing practices.",
      },
    ],
    packages: [
      {
        id: 501,
        title: "Bali Essentials",
        duration: "8 days",
        price: "$1,399",
        description: "Experience the best of Bali with this perfectly balanced tour of the island's highlights.",
        features: [
          "Ubud cultural tour",
          "Tegalalang Rice Terraces",
          "Uluwatu Temple",
          "Kuta Beach",
          "Traditional dance performance",
        ],
        image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=2050&auto=format&fit=crop",
        popular: true,
      },
      {
        id: 502,
        title: "Wellness Retreat",
        duration: "7 days",
        price: "$1,699",
        description: "Focus on rejuvenation and self-care with this wellness-centered Bali experience.",
        features: [
          "Daily yoga sessions",
          "Traditional spa treatments",
          "Meditation workshops",
          "Healthy cuisine",
          "Healing ceremonies",
        ],
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
      },
      {
        id: 503,
        title: "Adventure Bali",
        duration: "9 days",
        price: "$1,599",
        description: "Discover Bali's wild side with this action-packed adventure tour.",
        features: [
          "Mount Batur sunrise trek",
          "White water rafting",
          "Snorkeling at Blue Lagoon",
          "Jungle trekking",
          "Waterfall exploration",
        ],
        image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1935&auto=format&fit=crop",
      },
    ],
    bestTimeToVisit: "April to October",
    localCurrency: "Indonesian Rupiah (IDR)",
    languages: ["Indonesian", "Balinese", "English (in tourist areas)"],
  },
  {
    id: 6,
    slug: "sri-lanka",
    name: "Sri Lanka",
    location: "South Asia",
    description: "Pearl of the Indian Ocean with ancient temples, tea plantations, and wildlife",
    longDescription:
      "Sri Lanka is a compact island nation packed with incredible diversity. From pristine beaches and misty mountains to ancient temples and abundant wildlife, this tropical paradise offers experiences for every type of traveler. Discover the island's rich history, warm hospitality, and world-famous Ceylon tea while exploring lush landscapes and vibrant cities.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1603993097397-89c963e325c7?q=80&w=2070&auto=format&fit=crop",
    color: "#39FF14",
    emoji: "🇱🇰",
    tags: ["Culture", "Nature", "Wildlife", "Beaches"],
    likes: 4.4,
    highlights: [
      {
        icon: "Landmark",
        title: "Ancient Heritage",
        description: "Explore UNESCO World Heritage sites including ancient cities and magnificent rock fortresses.",
      },
      {
        icon: "Leaf",
        title: "Tea Country",
        description: "Visit scenic tea plantations in the misty highlands and learn about Ceylon tea production.",
      },
      {
        icon: "Trees",
        title: "Wildlife Safari",
        description: "Spot elephants, leopards, and exotic birds in national parks and nature reserves.",
      },
      {
        icon: "Palmtree",
        title: "Coastal Beauty",
        description: "Relax on golden beaches and discover colonial charm in coastal towns.",
      },
    ],
    packages: [
      {
        id: 601,
        title: "Sri Lanka Highlights",
        duration: "10 days",
        price: "$1,499",
        description: "Experience the best of Sri Lanka from cultural sites to natural wonders.",
        features: [
          "Sigiriya Rock Fortress",
          "Kandy Temple",
          "Tea plantation tour",
          "Wildlife safari",
          "Beach relaxation",
        ],
        image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop",
        popular: true,
      },
    ],
    bestTimeToVisit: "December to March (West Coast), April to September (East Coast)",
    localCurrency: "Sri Lankan Rupee (LKR)",
    languages: ["Sinhala", "Tamil", "English"],
  },
  {
    id: 7,
    slug: "nepal",
    name: "Nepal",
    location: "South Asia",
    description: "Home of the Himalayas with trekking adventures and spiritual experiences",
    longDescription:
      "Nepal is a land of soaring peaks, ancient temples, and warm-hearted people. Home to eight of the world's ten highest mountains including Mount Everest, this Himalayan nation is a paradise for trekkers and adventure seekers. Beyond the mountains, discover rich Buddhist and Hindu heritage, vibrant festivals, and the unique blend of cultures that make Nepal truly special.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2062&auto=format&fit=crop",
    color: "#A259FF",
    emoji: "🇳🇵",
    tags: ["Trekking", "Mountains", "Culture", "Adventure"],
    likes: 4.7,
    highlights: [
      {
        icon: "Mountain",
        title: "Himalayan Peaks",
        description: "Trek among the world's highest mountains with breathtaking views of snow-capped peaks.",
      },
      {
        icon: "Landmark",
        title: "Spiritual Sites",
        description: "Visit ancient temples, monasteries, and the birthplace of Buddha.",
      },
      {
        icon: "Compass",
        title: "Adventure Activities",
        description: "Experience trekking, mountaineering, rafting, and paragliding in stunning settings.",
      },
      {
        icon: "Heart",
        title: "Warm Hospitality",
        description: "Connect with local communities and experience genuine Nepalese culture.",
      },
    ],
    packages: [
      {
        id: 701,
        title: "Everest Base Camp Trek",
        duration: "14 days",
        price: "$1,999",
        description: "Trek to the base of the world's highest mountain on this iconic adventure.",
        features: [
          "Kathmandu sightseeing",
          "Scenic flight to Lukla",
          "Sherpa villages",
          "Everest Base Camp",
          "Namche Bazaar",
        ],
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=2070&auto=format&fit=crop",
        popular: true,
      },
    ],
    bestTimeToVisit: "October to November, March to May",
    localCurrency: "Nepalese Rupee (NPR)",
    languages: ["Nepali", "English (in tourist areas)"],
  },
  {
    id: 8,
    slug: "dubai",
    name: "Dubai",
    location: "United Arab Emirates",
    description: "Futuristic skylines, luxury shopping, and desert adventures",
    longDescription:
      "Dubai is a city of superlatives, where the world's tallest building pierces the sky and artificial islands reshape the coastline. This ultramodern city offers visitors an unparalleled blend of futuristic architecture, luxury experiences, and traditional Arabian culture. From shopping in opulent malls to thrilling desert safaris, Dubai constantly pushes the boundaries of what's possible.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2070&auto=format&fit=crop",
    color: "#00C2FF",
    emoji: "🇦🇪",
    tags: ["Luxury", "Architecture", "Shopping", "Desert"],
    likes: 4.8,
    highlights: [
      {
        icon: "Building",
        title: "Architectural Marvels",
        description: "Witness groundbreaking architecture, including the Burj Khalifa and the Palm Jumeirah.",
      },
      {
        icon: "ShoppingBag",
        title: "Shopping Paradise",
        description: "Explore some of the world's largest and most luxurious shopping malls and traditional souks.",
      },
      {
        icon: "Palmtree",
        title: "Desert Experiences",
        description: "Venture into the Arabian desert for dune bashing, camel rides, and traditional Bedouin camps.",
      },
      {
        icon: "Utensils",
        title: "Culinary Excellence",
        description:
          "Dine at world-class restaurants offering everything from local Emirati cuisine to international fare.",
      },
    ],
    packages: [
      {
        id: 801,
        title: "Dubai Extravaganza",
        duration: "6 days",
        price: "$1,999",
        description: "Experience the luxury and excitement of Dubai with this comprehensive city package.",
        features: [
          "Burj Khalifa visit",
          "Dubai Mall shopping",
          "Palm Jumeirah tour",
          "Dubai Marina cruise",
          "Old Dubai exploration",
        ],
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2069&auto=format&fit=crop",
        popular: true,
      },
      {
        id: 802,
        title: "Desert Adventure",
        duration: "5 days",
        price: "$1,699",
        description: "Combine city experiences with thrilling desert adventures for an unforgettable Dubai trip.",
        features: ["Desert safari", "Dune bashing", "Camel riding", "Bedouin camp dinner", "Sandboarding"],
        image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: 803,
        title: "Family Fun Dubai",
        duration: "7 days",
        price: "$2,299",
        description: "Perfect for families, this package includes Dubai's best attractions for all ages.",
        features: [
          "Aquaventure Waterpark",
          "Dubai Parks and Resorts",
          "Kidzania",
          "Dubai Aquarium",
          "IMG Worlds of Adventure",
        ],
        image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    bestTimeToVisit: "November to March",
    localCurrency: "United Arab Emirates Dirham (AED)",
    languages: ["Arabic", "English (widely spoken)"],
  },
]

export default destinations

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug)
}

export function getAllDestinations(): Destination[] {
  return destinations
}
