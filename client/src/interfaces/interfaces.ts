export interface IHero {
  name: string;
  description: string;
  imgSrc: string;
  superPower?: string[];
}

export type HerosList = IHero[];

export type Action = { type: 'SET_HERO', payload: IHero } | { type: 'GET_HEROS', payload: HerosList }

