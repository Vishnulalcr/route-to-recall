"use client"

import { notFound } from "next/navigation"
import ExperienceClient from "@/components/experience-client"

interface ExperienceData {
  id: number
  title: string
  location: string
  description: string
  fullDescription: string
  image: string
  gallery: string[]
  duration: string
  groupSize: string
  highlights: string[]
  itinerary: Array<{
    day: number
    title: string
    description: string
  }>
  color: string
}

const experiencesData: Record<number, ExperienceData> = {
  1: {
    id: 1,
    title: "Island Paradise",
    location: "Maldives",
    description: "Discover pristine beaches and crystal-clear waters in this tropical paradise.",
    fullDescription:
      "Embark on an unforgettable journey to the Maldives, where pristine white-sand beaches meet crystal-clear turquoise waters. This tropical paradise offers the perfect blend of relaxation and adventure, with opportunities to snorkel alongside manta rays, enjoy romantic sunset cruises, and indulge in world-class luxury at overwater villas. Experience the magic of this island nation where every moment feels like a dream.",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&auto=format&fit=crop&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&auto=format&fit=crop&q=60",
    ],
    duration: "7 Days / 6 Nights",
    groupSize: "2-8 People",
    highlights: [
      "Luxury overwater villa accommodation",
      "Snorkeling with manta rays and sea turtles",
      "Private sunset cruise",
      "Spa treatments overlooking the ocean",
      "Fresh seafood dining experiences",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        description:
          "Arrive at Malé International Airport and transfer to your luxury resort via speedboat or seaplane.",
      },
      {
        day: 2,
        title: "Underwater Adventures",
        description: "Explore vibrant coral reefs and snorkel with tropical fish, manta rays, and sea turtles.",
      },
      {
        day: 3,
        title: "Island Hopping",
        description: "Visit local islands, experience Maldivian culture, and enjoy pristine sandbanks.",
      },
      {
        day: 4,
        title: "Sunset Cruise",
        description: "Enjoy a private sunset cruise with champagne and watch dolphins play in the waves.",
      },
      {
        day: 5,
        title: "Spa & Relaxation",
        description: "Indulge in world-class spa treatments and wellness experiences.",
      },
      {
        day: 6,
        title: "Beach & Water Sports",
        description: "Try kayaking, paddleboarding, or simply relax on your private beach.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Enjoy a final breakfast overlooking the ocean before your transfer back to Malé.",
      },
    ],
    color: "#00C2FF",
  },
  2: {
    id: 2,
    title: "Temple & Culture Tour",
    location: "Thailand",
    description: "Explore ancient temples, vibrant markets, and authentic Thai cuisine.",
    fullDescription:
      "Immerse yourself in the rich cultural tapestry of Thailand. From the golden spires of ancient temples to the bustling energy of floating markets, this journey takes you deep into the heart of Thai culture. Experience authentic cuisine, witness traditional ceremonies, and discover the warm hospitality that makes Thailand the Land of Smiles.",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&auto=format&fit=crop&q=80",
    ],
    duration: "8 Days / 7 Nights",
    groupSize: "4-12 People",
    highlights: [
      "Visit iconic temples like Wat Phra Kaew and Wat Arun",
      "Explore floating markets in Bangkok",
      "Thai cooking class with local chefs",
      "Traditional Thai massage experience",
      "Evening tuk-tuk tour of the city",
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangkok Arrival",
        description:
          "Arrive in Bangkok and settle into your hotel. Evening welcome dinner with traditional Thai cuisine.",
      },
      {
        day: 2,
        title: "Grand Palace & Temples",
        description: "Explore the Grand Palace, Wat Phra Kaew, and Wat Pho with the famous Reclining Buddha.",
      },
      {
        day: 3,
        title: "Floating Markets",
        description: "Visit Damnoen Saduak floating market and experience traditional Thai market life.",
      },
      {
        day: 4,
        title: "Cooking Class",
        description: "Learn to cook authentic Thai dishes with a local chef at a traditional cooking school.",
      },
      {
        day: 5,
        title: "Chiang Mai Journey",
        description: "Fly to Chiang Mai and explore the old city temples and night bazaar.",
      },
      {
        day: 6,
        title: "Elephant Sanctuary",
        description: "Visit an ethical elephant sanctuary and learn about conservation efforts.",
      },
      {
        day: 7,
        title: "Hill Tribe Visit",
        description: "Experience traditional hill tribe culture and enjoy mountain scenery.",
      },
      {
        day: 8,
        title: "Departure",
        description: "Final breakfast and transfer to airport for your onward journey.",
      },
    ],
    color: "#39FF14",
  },
  3: {
    id: 3,
    title: "Urban Exploration",
    location: "Singapore",
    description: "Experience a futuristic city-state where cultures blend seamlessly.",
    fullDescription:
      "Discover Singapore, where East meets West in perfect harmony. This modern marvel combines futuristic architecture with lush gardens, world-class dining with hawker center traditions, and cutting-edge technology with rich cultural heritage. Explore the city's diverse neighborhoods, iconic landmarks, and hidden gems that make Singapore truly unique.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800&auto=format&fit=crop&q=60",
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    highlights: [
      "Gardens by the Bay and Supertree Grove",
      "Marina Bay Sands SkyPark",
      "Hawker center food tour",
      "Little India and Chinatown exploration",
      "Night Safari adventure",
    ],
    itinerary: [
      {
        day: 1,
        title: "City Orientation",
        description: "Arrive and explore Marina Bay area, including Marina Bay Sands and Merlion Park.",
      },
      {
        day: 2,
        title: "Gardens & Culture",
        description: "Visit Gardens by the Bay, Cloud Forest, and explore the historic Chinatown district.",
      },
      {
        day: 3,
        title: "Food & Heritage",
        description: "Food tour through hawker centers and explore Little India's vibrant streets.",
      },
      {
        day: 4,
        title: "Wildlife & Nature",
        description: "Visit the Singapore Zoo and experience the unique Night Safari.",
      },
      {
        day: 5,
        title: "Shopping & Departure",
        description: "Last-minute shopping on Orchard Road before airport transfer.",
      },
    ],
    color: "#00C2FF",
  },
  4: {
    id: 4,
    title: "Island Discovery",
    location: "Bali",
    description: "Immerse yourself in the Island of the Gods with its sacred temples and pristine beaches.",
    fullDescription:
      "Journey to Bali, the enchanting Island of the Gods, where ancient temples rise from lush jungles, emerald rice terraces cascade down hillsides, and pristine beaches stretch as far as the eye can see. This spiritual island offers a perfect blend of culture, adventure, and relaxation, with world-class wellness retreats, vibrant ceremonies, and warm Balinese hospitality.",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df34b147?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&auto=format&fit=crop&q=80",
    ],
    duration: "9 Days / 8 Nights",
    groupSize: "2-8 People",
    highlights: [
      "Tanah Lot and Uluwatu Temple visits",
      "Tegalalang rice terraces photography",
      "Traditional Balinese spa treatments",
      "Sunrise trek to Mount Batur",
      "Ubud cultural immersion",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ubud",
        description: "Arrive in Bali and transfer to Ubud, the cultural heart of the island.",
      },
      {
        day: 2,
        title: "Rice Terraces & Temples",
        description: "Explore Tegalalang rice terraces and visit Tirta Empul holy water temple.",
      },
      {
        day: 3,
        title: "Ubud Culture",
        description: "Visit Monkey Forest, traditional markets, and watch a Legong dance performance.",
      },
      {
        day: 4,
        title: "Mount Batur Sunrise",
        description: "Early morning trek to Mount Batur summit for spectacular sunrise views.",
      },
      {
        day: 5,
        title: "Beach Transfer",
        description: "Transfer to Seminyak beach area, afternoon at leisure.",
      },
      {
        day: 6,
        title: "Tanah Lot",
        description: "Visit the iconic Tanah Lot sea temple at sunset.",
      },
      {
        day: 7,
        title: "Water Sports",
        description: "Surfing lessons or snorkeling at Nusa Dua.",
      },
      {
        day: 8,
        title: "Uluwatu & Kecak",
        description: "Explore Uluwatu Temple and watch the famous Kecak fire dance at sunset.",
      },
      {
        day: 9,
        title: "Departure",
        description: "Final spa treatment and transfer to airport.",
      },
    ],
    color: "#A259FF",
  },
  5: {
    id: 5,
    title: "Mountain Trekking",
    location: "Nepal",
    description: "Journey through the Himalayas with breathtaking mountain vistas.",
    fullDescription:
      "Embark on an epic adventure through the majestic Himalayas of Nepal. Trek through pristine mountain trails, witness the world's highest peaks, experience the warm hospitality of Sherpa villages, and discover ancient Buddhist monasteries perched on mountainsides. This journey combines physical challenge with spiritual enlightenment, offering an unforgettable encounter with one of the world's most spectacular landscapes.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1605649451080-d7cbe697fb25?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1608139726730-e0157c73e1ea?w=800&auto=format&fit=crop&q=60",
    ],
    duration: "12 Days / 11 Nights",
    groupSize: "4-10 People",
    highlights: [
      "Everest Base Camp trek option",
      "Visit ancient Buddhist monasteries",
      "Experience Sherpa culture and hospitality",
      "Spectacular Himalayan mountain views",
      "Traditional Nepali cuisine",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kathmandu Arrival",
        description: "Arrive in Kathmandu, meet the team, and prepare for the trek.",
      },
      {
        day: 2,
        title: "Kathmandu Exploration",
        description: "Visit UNESCO World Heritage sites including Swayambhunath and Boudhanath stupas.",
      },
      {
        day: 3,
        title: "Flight to Lukla",
        description: "Scenic mountain flight to Lukla and begin trek to Phakding.",
      },
      {
        day: 4,
        title: "Namche Bazaar",
        description: "Trek to Namche Bazaar, the gateway to Everest region.",
      },
      {
        day: 5,
        title: "Acclimatization Day",
        description: "Acclimatization hike with stunning views of Everest, Lhotse, and Ama Dablam.",
      },
      {
        day: 6,
        title: "Tengboche Monastery",
        description: "Trek to Tengboche and visit the famous Buddhist monastery.",
      },
      {
        day: 7,
        title: "Dingboche",
        description: "Continue trekking higher into the mountains to Dingboche.",
      },
      {
        day: 8,
        title: "Base Camp Push",
        description: "Trek to Everest Base Camp or Kala Patthar viewpoint.",
      },
      {
        day: 9,
        title: "Return Trek",
        description: "Begin descent back through the Khumbu valley.",
      },
      {
        day: 10,
        title: "Continue Descent",
        description: "Trek back to lower elevations and warmer climates.",
      },
      {
        day: 11,
        title: "Return to Lukla",
        description: "Final day of trekking, celebration dinner in Lukla.",
      },
      {
        day: 12,
        title: "Fly to Kathmandu",
        description: "Morning flight back to Kathmandu, afternoon at leisure, farewell dinner.",
      },
    ],
    color: "#A259FF",
  },
  6: {
    id: 6,
    title: "Luxury Desert",
    location: "Dubai",
    description: "Experience ultra-modern luxury in the desert with world-class attractions.",
    fullDescription:
      "Discover Dubai, where Arabian tradition meets futuristic innovation. From the world's tallest building to golden desert dunes, this city of superlatives offers unparalleled luxury, world-class shopping, innovative architecture, and thrilling desert adventures. Experience the perfect blend of cutting-edge modernity and timeless Arabian hospitality.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=60",
    ],
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    highlights: [
      "Burj Khalifa observation deck",
      "Desert safari with dune bashing",
      "Dubai Mall and Gold Souk shopping",
      "Palm Jumeirah and Atlantis",
      "Traditional dhow cruise dinner",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & City Lights",
        description: "Arrive in Dubai, check into luxury hotel, evening at Dubai Fountain.",
      },
      {
        day: 2,
        title: "Modern Dubai",
        description: "Visit Burj Khalifa, Dubai Mall, and explore the modern downtown area.",
      },
      {
        day: 3,
        title: "Desert Safari",
        description: "Thrilling dune bashing, camel riding, and traditional Bedouin camp dinner.",
      },
      {
        day: 4,
        title: "Traditional Dubai",
        description: "Explore Gold and Spice Souks, Dubai Museum, and Al Fahidi historical district.",
      },
      {
        day: 5,
        title: "Palm & Beach",
        description: "Visit Palm Jumeirah, Atlantis Aquarium, and relax on pristine beaches.",
      },
      {
        day: 6,
        title: "Shopping & Departure",
        description: "Final shopping at Mall of the Emirates before airport transfer.",
      },
    ],
    color: "#00C2FF",
  },
  7: {
    id: 7,
    title: "Cultural Fusion",
    location: "Malaysia",
    description: "Discover a cultural melting pot where tradition meets modernity.",
    fullDescription:
      "Experience Malaysia's incredible diversity where Malay, Chinese, and Indian cultures blend harmoniously. From the futuristic skyline of Kuala Lumpur to the ancient rainforests of Borneo, from colonial heritage in Penang to pristine beaches in Langkawi, Malaysia offers an unforgettable journey through one of Asia's most dynamic nations.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1580139099011-e962c44c05a8?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&auto=format&fit=crop&q=60",
    ],
    duration: "10 Days / 9 Nights",
    groupSize: "2-10 People",
    highlights: [
      "Petronas Twin Towers and KL skyline",
      "Cameron Highlands tea plantations",
      "Penang street food and heritage sites",
      "Langkawi island paradise",
      "Batu Caves and cultural temples",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kuala Lumpur Arrival",
        description: "Arrive in KL, explore Petronas Twin Towers and KLCC Park.",
      },
      {
        day: 2,
        title: "City Exploration",
        description: "Visit Batu Caves, Central Market, and experience vibrant street food.",
      },
      {
        day: 3,
        title: "Cameron Highlands",
        description: "Journey to the highlands, visit tea plantations and strawberry farms.",
      },
      {
        day: 4,
        title: "Highland Adventures",
        description: "Jungle trekking and exploring local villages in the cool mountain climate.",
      },
      {
        day: 5,
        title: "Penang Transfer",
        description: "Travel to Penang, explore Georgetown's UNESCO heritage sites.",
      },
      {
        day: 6,
        title: "Penang Culture",
        description: "Street art tour, clan jetties, and legendary hawker food experience.",
      },
      {
        day: 7,
        title: "Langkawi Island",
        description: "Ferry to Langkawi, afternoon beach relaxation.",
      },
      {
        day: 8,
        title: "Island Hopping",
        description: "Explore nearby islands, snorkeling and beach activities.",
      },
      {
        day: 9,
        title: "Cable Car & Nature",
        description: "Langkawi Sky Bridge, cable car ride, and mangrove boat tour.",
      },
      {
        day: 10,
        title: "Departure",
        description: "Final beach morning before flight back to Kuala Lumpur.",
      },
    ],
    color: "#A259FF",
  },
  8: {
    id: 8,
    title: "Pearl of the Ocean",
    location: "Sri Lanka",
    description: "Experience ancient temples, tea plantations, and pristine beaches.",
    fullDescription:
      "Discover Sri Lanka, the resplendent Pearl of the Indian Ocean. This compact island nation packs incredible diversity into its shores - from ancient Buddhist temples and colonial hill stations to wildlife-rich national parks and palm-fringed beaches. Experience warm Sri Lankan hospitality, world-famous Ceylon tea, and a journey through thousands of years of fascinating history.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1534850336045-c6c6d287f89e?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&auto=format&fit=crop&q=60",
    ],
    duration: "11 Days / 10 Nights",
    groupSize: "2-12 People",
    highlights: [
      "Ancient city of Sigiriya Lion Rock",
      "Temple of the Tooth in Kandy",
      "Tea country in Nuwara Eliya",
      "Safari in Yala National Park",
      "Beach relaxation in Mirissa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Colombo Arrival",
        description: "Arrive in Colombo, brief city tour and transfer to hotel.",
      },
      {
        day: 2,
        title: "Ancient Wonders",
        description: "Travel to Sigiriya, climb the famous Lion Rock fortress.",
      },
      {
        day: 3,
        title: "Dambulla & Kandy",
        description: "Visit Dambulla Cave Temple, continue to Kandy through scenic countryside.",
      },
      {
        day: 4,
        title: "Kandy Culture",
        description: "Temple of the Tooth, cultural dance show, and botanical gardens.",
      },
      {
        day: 5,
        title: "Tea Country",
        description: "Scenic train journey to Nuwara Eliya through tea plantations.",
      },
      {
        day: 6,
        title: "Tea Plantations",
        description: "Visit tea factory, learn about Ceylon tea production, countryside walks.",
      },
      {
        day: 7,
        title: "Ella Adventure",
        description: "Travel to Ella, visit Nine Arch Bridge and Little Adam's Peak.",
      },
      {
        day: 8,
        title: "Yala Safari",
        description: "Journey to Yala, afternoon wildlife safari in the national park.",
      },
      {
        day: 9,
        title: "Beach Transfer",
        description: "Travel to south coast beaches, afternoon relaxation in Mirissa.",
      },
      {
        day: 10,
        title: "Whale Watching",
        description: "Morning whale watching tour, afternoon beach leisure.",
      },
      {
        day: 11,
        title: "Departure",
        description: "Final beach morning, transfer to Colombo for departure flight.",
      },
    ],
    color: "#39FF14",
  },
}

export default async function ExperiencePage({ params }: { params: { id: string } }) {
  const experience = experiencesData[Number.parseInt(params.id)]

  if (!experience) {
    notFound()
  }

  return <ExperienceClient experience={experience} />
}
