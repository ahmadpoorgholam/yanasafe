export interface DatingApp {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export const datingApps: DatingApp[] = [
  {
    id: 'tinder',
    name: 'Tinder',
    color: '#FD3A73',
    icon: '🔥',
  },
  {
    id: 'bumble',
    name: 'Bumble',
    color: '#F5C935',
    icon: '🐝',
  },
  {
    id: 'hinge',
    name: 'Hinge',
    color: '#FF665F',
    icon: '💫',
  },
  {
    id: 'okcupid',
    name: 'OkCupid',
    color: '#1A1B1C',
    icon: '💕',
  },
  {
    id: 'match',
    name: 'Match.com',
    color: '#1E71FF',
    icon: '❤️',
  },
  {
    id: 'coffee-meets-bagel',
    name: 'Coffee Meets Bagel',
    color: '#FF7B7B',
    icon: '☕',
  },
  {
    id: 'plenty-of-fish',
    name: 'Plenty of Fish',
    color: '#FF6B6B',
    icon: '🐠',
  },
  {
    id: 'badoo',
    name: 'Badoo',
    color: '#7000E3',
    icon: '🌟',
  },
];

export function getDatingApp(id: string): DatingApp | undefined {
  return datingApps.find(app => app.id === id);
}

export function getDatingAppName(id: string): string {
  return getDatingApp(id)?.name || 'Unknown App';
}