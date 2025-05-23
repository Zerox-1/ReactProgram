import { OffersList } from '../types/offer.ts';

export const offersList: OffersList[] = [
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    previewImage: 'img/20.png',
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
    
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
  },
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-1234567890ef',
    title: 'Modern Loft',
    type: 'loft',
    price: 220,
    previewImage: 'img/1.png',
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
    
    isPremium: true,
    isFavorite: false,
    rating: 4.5,
  },
  {
    id: 'def12345-6789-abcd-ef01-234567890abc',
    title: 'Cozy Studio in Vienna',
    type: 'studio',
    price: 90,
    previewImage: 'img/3.png',
    city: {
      name: 'Vienna',
      location: {
        latitude: 48.2082,
        longitude: 16.3738,
        zoom: 13
      }
    },
    location: {
      latitude: 48.210033,
      longitude: 16.363449,
      zoom: 15
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.1
  },
  {
    id: '0987abcd-1234-5678-efgh-90123456ijkl',
    title: 'Beachside Bungalow',
    type: 'house',
    price: 310,
    previewImage: 'img/4.png',
    city: {
      name: 'Barcelona',
      location: {
        latitude: 41.3851,
        longitude: 2.1734,
        zoom: 12
      }
    },
    location: {
      latitude: 41.3867,
      longitude: 2.1909,
      zoom: 14
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.8
  }
];
