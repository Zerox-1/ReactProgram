import { FullOffer } from '../types/offer.ts';

const offers: FullOffer[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Wood and stone place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
    type: 'apartment',
    price: 370,
    images: ['../../img/20.png', '../../img/17.png', '../../img/16.png', '../../img/15.png', '../../img/2.png', '../../img/7.png'],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.86661000000000,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Heating', 'Wi-Fi', 'Fridge', 'Laptop friendly workspace',
      'Baby seat', 'Air conditioning', 'Washer', 'Towels',
      'Dishwasher', 'Kitchen', 'Washing machine', 'Breakfast', 'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: '../../img/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3,
    previewImage:'../../img/20.png'
  },
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-1234567890ef',
    title: 'Modern Loft',
    description: 'Stylish loft in the heart of Amsterdam with canal view.',
    type: 'loft',
    price: 220,
    images: ['../../img/1.png', '../../img/17.png', '../../img/16.png', '../../img/15.png', '../../img/2.png', '../../img/7.png'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 12
      }
    },
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 14
    },
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Coffee machine'],
    host: {
      isPro: false,
      name: 'Mark',
      avatarUrl: '../../img/avatar-max.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2,
    previewImage:'../../img/1.png',
  },
  {
    id: 'def12345-6789-abcd-ef01-234567890abc',
    title: 'Cozy Studio in Vienna',
    description: 'Affordable and quiet studio close to public transport.',
    type: 'studio',
    price: 90,
    images: ['../../img/3.png', '../../img/17.png', '../../img/16.png', '../../img/15.png', '../../img/2.png', '../../img/7.png'],
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511, 
        longitude: 9.9937,
        zoom: 13
      }
    },
    location: {
      latitude: 53.5512, longitude: 9.9938,
      zoom: 15
    },
    goods: ['Wi-Fi', 'Fridge', 'Towels'],
    host: {
      isPro: false,
      name: 'Elena',
      avatarUrl: '../../img/avatar-max.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.1,
    bedrooms: 1,
    maxAdults: 1,
    previewImage:'../../img/3.png',
  },
  {
    id: '0987abcd-1234-5678-efgh-90123456ijkl',
    title: 'Beachside Bungalow',
    description: 'Sunny and private bungalow near the beach. Perfect for a relaxing vacation.',
    type: 'house',
    price: 310,
    images: ['../../img/4.png', '../../img/17.png', '../../img/16.png', '../../img/15.png', '../../img/2.png', '../../img/7.png'],
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511, longitude: 9.9937,
        zoom: 12
      }
    },
    location: {
      latitude: 53.5720, longitude: 9.9386,
      zoom: 14
    },
    goods: ['Air conditioning', 'Wi-Fi', 'Kitchen', 'Towels', 'Washer'],
    host: {
      isPro: true,
      name: 'Lucia',
      avatarUrl: '../../img/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 5,
    previewImage:'../../img/4.png',
  }
];

export {offers};