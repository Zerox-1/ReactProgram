import { Review } from '../types/review';

export const reviewsMock: Review[] = [
  {
    id: '1',
    user: {
      name: 'Alice',
      avatarUrl: 'img/avatar-alice.jpg',
      isPro: true,
    },
    rating: 4,
    comment: 'Nice place, very clean and comfortable.',
    date: '2024-05-01T14:13:56.569Z',
  },
  {
    id: '2',
    user: {
      name: 'Bob',
      avatarUrl: 'img/avatar-bob.jpg',
      isPro:true,
    },
    rating: 5,
    comment: 'Perfect location and very friendly host!',
    date: '2024-04-21T10:00:00.000Z',
  },
];
