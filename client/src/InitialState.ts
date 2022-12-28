import { HerosList } from './interfaces/interfaces';

export const initialState: HerosList = [
  {
    name: 'Hulk',
    description: 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.',
    imgSrc: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_inl_02_1.jpg',
    superPower: ['cool', 'strog', 'fast']
  },
  {
    name: 'Thor',
    description: 'Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.',
    imgSrc: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_inl_02.jpg',
    superPower: ['cool', 'god', 'fly']
  },
  {
    name: 'SPIDER-MAN',
    description: 'With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.',
    imgSrc: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_inl_01.jpg',
    superPower: ['cool', 'net', 'wolking walls']
  }
];
