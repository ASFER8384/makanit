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
    image: '/images/wp/holiday-inn-resort-kandooma-maldives.jpg',
    description: 'Crystal clear waters, overwater villas, and paradise beaches.',
  },
  {
    name: 'Turkey',
    slug: 'turkey',
    image: '/images/wp/0203-0245_istanbul-1024x666.jpg',
    description: 'Rich history, stunning landscapes, and vibrant culture.',
  },
  {
    name: 'Thailand',
    slug: 'thailand',
    image: '/images/wp/bangkok_city-1024x681.jpg',
    description: 'Tropical beaches, delicious cuisine, and warm hospitality.',
  },
  {
    name: 'Egypt',
    slug: 'egypt',
    image: '/images/wp/orig-1024x683.jpeg',
    description: 'Ancient pyramids, the Nile, and Red Sea resorts.',
  },
  {
    name: 'Azerbaijan',
    slug: 'azerbaijan',
    image: '/images/wp/Azerbaijan.jpg',
    description: 'The Land of Fire — modern Baku meets ancient culture.',
  },
  {
    name: 'Bali',
    slug: 'bali',
    image: '/images/wp/12839.jpg',
    description: 'Tropical paradise with temples, rice terraces, and surf.',
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    image: '/images/wp/2189_7-1024x682.jpg',
    description: 'Caucasus mountains, wine regions, and unique culture.',
  },
  {
    name: 'Malaysia',
    slug: 'malaysia',
    image: '/images/wp/Malaysia-shutterstock_546536626.jpg',
    description: 'Modern cities, rainforests, and diverse cultural heritage.',
  },
  {
    name: 'Bosnia',
    slug: 'bosnia',
    image: '/images/wp/Mostar-Bosnia-Happy-to-Wander-0638-1024x681-1.jpg',
    description: 'Historic towns, natural beauty, and warm hospitality.',
  },
  {
    name: 'Russia',
    slug: 'russia',
    image: '/images/wp/Moscow-1024x683.jpg',
    description: 'Iconic landmarks, rich history, and cultural treasures.',
  },
  {
    name: 'Uzbekistan',
    slug: 'uzbekistan',
    image: '/images/wp/2458_preview_r.v3-1024x683.jpg',
    description: 'Silk Road cities, stunning architecture, and rich heritage.',
  },
  {
    name: 'Zanzibar',
    slug: 'zanzibar',
    image: '/images/wp/mango-house-seychelles.jpg',
    description: 'Pristine beaches, turquoise waters, and spice plantations.',
  },
];

export const packageDestinations: Destination[] = destinations.slice(0, 8);