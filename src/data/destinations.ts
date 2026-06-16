export interface Destination {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    name: 'Maldives',
    slug: 'maldives',
    image: 'https://makanit.ae/wp-content/uploads/2025/11/holiday-inn-resort-kandooma-maldives.jpg',
    description: 'Crystal clear waters, overwater villas, and paradise beaches.',
  },
  {
    name: 'Turkey',
    slug: 'turkey',
    image: 'https://makanit.ae/wp-content/uploads/2025/03/0203-0245_istanbul-1024x666.jpg',
    description: 'Rich history, stunning landscapes, and vibrant culture.',
  },
  {
    name: 'Thailand',
    slug: 'thailand',
    image: 'https://makanit.ae/wp-content/uploads/2025/06/bangkok_city-1024x681.jpg',
    description: 'Tropical beaches, delicious cuisine, and warm hospitality.',
  },
  {
    name: 'Egypt',
    slug: 'egypt',
    image: 'https://makanit.ae/wp-content/uploads/2024/09/orig-1024x683.jpeg',
    description: 'Ancient pyramids, the Nile, and Red Sea resorts.',
  },
  {
    name: 'Azerbaijan',
    slug: 'azerbaijan',
    image: 'https://makanit.ae/wp-content/uploads/2025/01/Azerbaijan.jpg',
    description: 'The Land of Fire — modern Baku meets ancient culture.',
  },
  {
    name: 'Bali',
    slug: 'bali',
    image: 'https://makanit.ae/wp-content/uploads/2025/12/12839.jpg',
    description: 'Tropical paradise with temples, rice terraces, and surf.',
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    image: 'https://makanit.ae/wp-content/uploads/2025/12/2189_7-1024x682.jpg',
    description: 'Caucasus mountains, wine regions, and unique culture.',
  },
  {
    name: 'Malaysia',
    slug: 'malaysia',
    image: 'https://makanit.ae/wp-content/uploads/2025/11/Malaysia-shutterstock_546536626.jpg',
    description: 'Modern cities, rainforests, and diverse cultural heritage.',
  },
  {
    name: 'Bosnia',
    slug: 'bosnia',
    image: 'https://makanit.ae/wp-content/uploads/2025/01/Mostar-Bosnia-Happy-to-Wander-0638-1024x681-1.jpg',
    description: 'Historic towns, natural beauty, and warm hospitality.',
  },
  {
    name: 'Russia',
    slug: 'russia',
    image: 'https://makanit.ae/wp-content/uploads/2025/03/Moscow-1024x683.jpg',
    description: 'Iconic landmarks, rich history, and cultural treasures.',
  },
  {
    name: 'Uzbekistan',
    slug: 'uzbekistan',
    image: 'https://makanit.ae/wp-content/uploads/2025/03/2458_preview_r.v3-1024x683.jpg',
    description: 'Silk Road cities, stunning architecture, and rich heritage.',
  },
  {
    name: 'Zanzibar',
    slug: 'zanzibar',
    image: 'https://makanit.ae/wp-content/uploads/2025/04/mango-house-seychelles.jpg',
    description: 'Pristine beaches, turquoise waters, and spice plantations.',
  },
];

export const packageDestinations: Destination[] = destinations.slice(0, 8);