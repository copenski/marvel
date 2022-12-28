import { HerosList, Action } from '../../interfaces/interfaces';


export function herosReducer(state: HerosList = [], action: Action): HerosList {
  switch (action.type) {
    case 'SET_HERO':
      const newHerosList: HerosList = [...state, action.payload];

      localStorage.setItem('heros', JSON.stringify(newHerosList));

      return newHerosList;
    case 'GET_HEROS':
      return action.payload;
    default:
      return state;
  }
}
