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
        title: "Bangkok & Pattaya Explorer",
        duration: "5 days / 4 nights",
        price: "₹23,000",
        description:
          "Experience the perfect blend of cultural immersion and beach adventures with visits to Bangkok's iconic temples and Pattaya's pristine beaches. This package includes exciting activities like Tiger Topia, the famous Alcazar Show, and Coral Island adventure.",
        features: [
          "Day 1: Airport pickup, Tiger Topia visit, Alcazar Show, Overnight at Pattaya",
          "Day 2: Coral Island Tour with Lunch and water activities, Overnight at Pattaya",
          "Day 3: Pattaya City Tour with Big Buddha Temple, Transfer to Bangkok, Overnight at Bangkok",
          "Day 4: Bangkok City Tour with Golden Buddha and Wat Mahaputthram temples, Overnight at Bangkok",
          "Day 5: Transfer to Bangkok Airport for return flight",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
        ],
        image: "https://images.unsplash.com/photo-1520250497591-1691ae25ab34?q=80&w=2070&auto=format&fit=crop",
        popular: true,
      },
      {
        id: 102,
        title: "Island Paradise",
        duration: "5 days / 4 nights",
        price: "Contact Us",
        description:
          "Explore Thailand's most stunning islands including Phuket and nearby paradise islands. Experience pristine beaches, crystal-clear waters, vibrant marine life, and tropical paradise at its finest.",
        features: [
          "Day 1: Arrival in Phuket, Airport pickup, Transfer to hotel, Patong Beach evening exploration, Overnight at Phuket",
          "Day 2: James Bond Island and Phang Nga Bay tour by speedboat, Sea kayaking through limestone caves, Overnight at Phuket",
          "Day 3: Full day Phi Phi Islands tour with Maya Bay visit, Snorkeling at Pileh Lagoon and Viking Cave, Overnight at Phuket",
          "Day 4: Phuket Old Town and cultural exploration, Big Buddha Temple visit, Karon Viewpoint sunset, Overnight at Phuket",
          "Day 5: Leisure morning with optional beach activities or spa, Transfer to Phuket Airport for return flight",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
        ],
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: 103,
        title: "Northern Thailand Explorer",
        duration: "5 days / 4 nights",
        price: "Contact Us",
        description:
          "Discover the cultural heart of Thailand in Chiang Mai. Experience ancient temples, hill tribe villages, elephant sanctuaries, and the stunning mountain landscapes of Northern Thailand.",
        features: [
          "Day 1: Arrival in Chiang Mai, Airport pickup, Night Bazaar visit, Traditional Khantoke dinner with cultural show, Overnight at Chiang Mai",
          "Day 2: Doi Suthep Temple with panoramic city views, Old City temple tour including Wat Chedi Luang and Wat Phra Singh, Traditional Thai cooking class, Overnight at Chiang Mai",
          "Day 3: Full day Ethical Elephant Sanctuary experience, Feed and bathe elephants, Learn about conservation, Bamboo rafting, Overnight at Chiang Mai",
          "Day 4: Doi Inthanon National Park (Thailand's highest peak), Twin Royal Pagodas, Karen Hill Tribe village visit, Wachirathan and Sirithan waterfalls, Overnight at Chiang Mai",
          "Day 5: Leisure morning at hotel with optional spa treatment or local market shopping, Transfer to Chiang Mai Airport for return flight",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
        ],
        image: "https://images.unsplash.com/photo-1598935898639-8a8506099945?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2352&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-15626028330f4ab2fc46e3?q=80&w=2352&auto=format&fit=crop",
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
        title: "Singapore Complete Experience",
        duration: "5 days / 4 nights",
        price: "₹33,000",
        description:
          "Discover the best of Singapore with this comprehensive tour featuring iconic attractions, cultural experiences, and thrilling adventures. From the Night Safari to Universal Studios, experience the magic of this modern city-state.",
        features: [
          "Day 1: Airport pickup, Night Safari with tram ride to observe nocturnal animals in their natural habitats",
          "Day 2: Singapore City Tour through Little India, Orchard Road, Chinatown, and Merlion Park photo stop | Evening Sunset at Sentosa via Cable Car",
          "Day 3: Marina Bay Sands visit with panoramic city views, infinity pool, and world-class casino | Gardens by the Bay with Supertree Grove and stunning flora displays",
          "Day 4: Full day at Universal Studios Singapore with thrilling rides, captivating shows, and immersive movie-based experiences",
          "Day 5: Transfer to Airport with memories of an unforgettable Singapore adventure",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
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
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2364&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2370&auto=format&fit=crop",
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
        duration: "4 days / 3 nights",
        price: "₹22,000",
        description:
          "Experience the best of Malaysia from Kuala Lumpur's modern skyline to the historic streets of Malacca and the thrilling heights of Genting Highlands. This tour combines culture, nature, and entertainment.",
        features: [
          "Day 1: Half Day City Tour through Chinatown, Botanical Garden, and National Museum with photo stops | Petronas Twin Towers visit with Skybridge and observation deck | Aquaria KLCC with mesmerizing marine life and coral reefs",
          "Day 2: Batu Caves limestone temples with Hindu shrines | Genting Highlands via 20-minute Cable Car with theme parks, casino, and shopping",
          "Day 3: Malacca UNESCO Heritage Site city tour with vibrant street art and colonial architecture",
          "Day 4: Putrajaya Tour exploring modern architecture, serene parks, and picturesque lakes | Transfer to Airport for return flight",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
        ],
        image: "https://images.unsplash.com/photo-1590079014833-d3d8b7c85ce4?q=80&w=1974&auto=format&fit=crop",
        popular: true,
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
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
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
        title: "Maldives Paradise Escape",
        duration: "4 days / 3 nights",
        price: "₹47,000",
        description:
          "Experience the ultimate Maldives getaway with luxurious resort accommodation, water sports activities, and pristine turquoise beaches. Perfect for couples and honeymooners seeking relaxation and adventure.",
        features: [
          "Day 1: Airport pickup via speedboat or seaplane transfer to your luxurious Resort Island",
          "Day 2: Island exploration with various water sports activities including snorkeling, kayaking, and jet skiing",
          "Day 3: Choice of relaxation in your luxurious overwater villa or beachside activities | Wide range of water sports and entertainment shows",
          "Day 4: Transfer to Airport via speedboat or seaplane for your return flight with unforgettable memories",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
        ],
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2070&auto=format&fit=crop",
        popular: true,
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
        title: "Bali Cultural & Beach Escape",
        duration: "5 days / 4 nights",
        price: "₹30,000",
        description:
          "Discover the magic of Bali with this perfect blend of cultural experiences and stunning natural beauty. From romantic beach dinners to ancient temples and pristine island beaches, this tour captures the essence of Bali.",
        features: [
          "Day 1: Airport pickup and hotel check-in | Romantic Candlelight Dinner at Jimbaran Beach with ocean views and culinary delights",
          "Day 2: Full day Kintamani with Ubud Art Village | Ubud Royal Palace | Ubud Monkey Forest | Coffee plantation experience with unique Balinese flavors",
          "Day 3: Full day Taman Ayun & Tanah Lot Tour | Majestic royal temple of Taman Ayun | Breathtaking sunset at iconic Tanah Lot sea temple",
          "Day 4: Full day Nusa Penida West Tour | Stunning Kelingking Beach | Broken Beach and Angel's Billabong | Crystal Bay with crystal-clear waters",
          "Day 5: Transfer to Airport with cherished memories of Bali's exquisite experiences",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
        ],
        image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=2050&auto=format&fit=crop",
        popular: true,
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
    heroImage: "https://images.unsplash.com/photo-1574852229195-4f19e59f6133?q=80&w=2082&auto=format&fit=crop",
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
        title: "Sri Lanka Heritage & Nature",
        duration: "5 days / 4 nights",
        price: "₹26,000",
        description:
          "Experience the magical blend of Sri Lanka's rich cultural heritage, stunning natural beauty, and diverse wildlife. From the sacred Temple of the Tooth to pristine waterfalls and coastal charm, this tour offers an unforgettable journey.",
        features: [
          "Day 1: Pinnawala Elephant Orphanage experience with gentle giants | Temple of the Tooth Relic in Kandy, home to Buddhism's sacred artifact | Overnight at Kandy",
          "Day 2: Kandy City Tour with Gem Museum, Arts & Crafts Center, Kandy Lake | Tea Plantation and Factory visit | Hanuman Temple & Ramboda Waterfalls | Overnight at Nuwara Eliya",
          "Day 3: Nuwara Eliya City Tour including Hill Club, Golf Club, Gregory Lake, and Victoria Park | Madu River Boat Safari through mangroves | Turtle Hatchery conservation visit | Overnight at Bentota",
          "Day 4: Colombo City Tour with Old Parliament, Seema Malaka Temple, and Independence Square | Shopping opportunities | Overnight at Colombo",
          "Day 5: Transfer to Airport with cherished memories of Sri Lanka's exquisite experiences",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
        ],
        image: "https://images.unsplash.com/photo-1594974862672-0be00fae96d1?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2370&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2362&auto=format&fit=crop",
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
        title: "Nepal Cultural & Nature Tour",
        duration: "6 days / 5 nights",
        price: "₹30,000",
        description:
          "Embark on an unforgettable journey through Nepal's cultural heart and natural wonders. From Kathmandu's ancient temples to Pokhara's serene lakes and stunning Himalayan sunrises, experience the best of Nepal.",
        features: [
          "Day 1: Airport pickup after exciting mountain flight | Hotel check-in and relaxation",
          "Day 2: Kathmandu Sightseeing with Pashupatinath Temple, Boudhanath Stupa, Swayambhunath | Historic Kathmandu Durbar Square exploration",
          "Day 3: Scenic drive to Pokhara with thrilling cable car ride to Manakamana Temple | Stunning landscapes and spiritual enrichment",
          "Day 4: Breathtaking Sarangkot Sunrise | Pokhara City Tour with David's Fall, Gupteshwar Mahadev Cave, World Peace Pagoda | Bindhyabasini Temple visit | Peaceful boat ride on Phewa Lake",
          "Day 5: Drive back to Kathmandu | Leisure time with Himalayan views | Shopping and exploration",
          "Day 6: Transfer to Airport with memories of Nepal's majestic beauty",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
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
    heroImage: "https://images.unsplash.com/photo-1518684079360-28e79d943446?q=80&w=2070&auto=format&fit=crop",
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
        title: "Dubai Luxury Experience",
        duration: "5 days / 4 nights",
        price: "₹32,000",
        description:
          "Discover the dazzling city of Dubai with this comprehensive tour featuring iconic landmarks, luxury experiences, and unforgettable entertainment. From the Burj Khalifa to desert adventures, experience Dubai's blend of tradition and futurism.",
        features: [
          "Day 1: Airport pickup and hotel check-in amidst the city of skyscrapers",
          "Day 2: Dubai City Tour with Burj Khalifa, Palm Jumeirah, and Dubai Marina | Magical Dhow Cruise Dinner under starlit sky with buffet and live entertainment",
          "Day 3: Desert Safari with dune bashing, camel rides, and traditional Bedouin camp experience | BBQ dinner with cultural performances",
          "Day 4: Dubai Frame with panoramic old and new city views | Dubai Mall world-class shopping | Burj Khalifa 124th floor observation deck with breathtaking views",
          "Day 5: Transfer to Airport with cherished memories of Dubai's exquisite experiences",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
        ],
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2070&auto=format&fit=crop",
        popular: true,
      },
    ],
    bestTimeToVisit: "November to March",
    localCurrency: "United Arab Emirates Dirham (AED)",
    languages: ["Arabic", "English (widely spoken)"],
  },
  {
    id: 9,
    slug: "cambodia",
    name: "Cambodia",
    location: "Southeast Asia",
    description: "Ancient temples, rich history, and the mighty Mekong River",
    longDescription:
      "Cambodia is a land of ancient wonders and resilient spirit. Home to the magnificent Angkor Wat temple complex, this Southeast Asian nation offers visitors a journey through time. From the grandeur of Khmer architecture to the poignant history of recent decades, Cambodia captivates with its cultural depth, warm people, and emerging modern energy.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2370&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1604439795104-e53ee6b94de3?q=80&w=2370&auto=format&fit=crop",
    color: "#39FF14",
    emoji: "🇰🇭",
    tags: ["History", "Culture", "Temples", "Adventure"],
    likes: 4.5,
    highlights: [
      {
        icon: "Landmark",
        title: "Angkor Wat Complex",
        description: "Explore the world's largest religious monument and UNESCO World Heritage site.",
      },
      {
        icon: "Ship",
        title: "Tonle Sap Lake",
        description: "Experience unique floating villages and Southeast Asia's largest freshwater lake.",
      },
      {
        icon: "Building",
        title: "Royal Heritage",
        description: "Visit the Royal Palace and Silver Pagoda showcasing Cambodia's regal history.",
      },
      {
        icon: "Heart",
        title: "Resilient Spirit",
        description: "Learn about Cambodia's history and witness the nation's remarkable recovery.",
      },
    ],
    packages: [
      {
        id: 901,
        title: "Cambodia Heritage Explorer",
        duration: "5 days / 4 nights",
        price: "₹28,000",
        description:
          "Journey through Cambodia's ancient wonders and recent history. From the magnificent Angkor temples to the poignant memorials of Phnom Penh, experience the full spectrum of Cambodia's rich cultural heritage.",
        features: [
          "Day 1: Pickup from Siem Reap Airport | Angkor Wat Temple Complex, the largest religious monument in the world | UNESCO World Heritage site exploration | Overnight at Siem Reap",
          "Day 2: Angkor Thom ancient capital | Bayon Temple with enormous stone faces | Ta Prohm Temple with mystical giant trees | Tonle Sap Lake Floating Village Tour | Overnight at Siem Reap",
          "Day 3: Transfer to Phnom Penh | Royal Palace & Silver Pagoda with royal family history and Emerald Buddha | Overnight at Phnom Penh",
          "Day 4: Killing Fields of Choeung Ek and Tuol Sleng Genocide Museum (S-21 Prison) | Central Market (Psar Thmei) shopping for local crafts and souvenirs | Overnight at Phnom Penh",
          "Day 5: Transfer to Phnom Penh Airport for your return flight with profound memories",
          "Note: Package duration, itinerary, and activities can be customized based on your interests and preferences.",
        ],
        image: "https://images.unsplash.com/photo-1604439795104-e53ee6b94de3?q=80&w=2070&auto=format&fit=crop",
        popular: true,
      },
    ],
    bestTimeToVisit: "November to March",
    localCurrency: "Cambodian Riel (KHR) / US Dollar",
    languages: ["Khmer", "English (in tourist areas)"],
  },
]

export default destinations

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug)
}

export function getAllDestinations(): Destination[] {
  return destinations
}
