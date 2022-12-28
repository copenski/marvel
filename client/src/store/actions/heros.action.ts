import { initialState } from '../../InitialState';
import { HerosList, IHero } from '../../interfaces/interfaces';
import { AppDispatch } from '../store';

export const getHeros = () => (dispatch: AppDispatch) => {
  // Если герои не сохранены в localStorage то сохраняем туда дефолтные значения
  if (!localStorage.getItem('heros')) {
    localStorage.setItem('heros', JSON.stringify(initialState));
  }

  const heros: HerosList = JSON.parse(localStorage.getItem('heros') as string);
  dispatch({
    type: 'GET_HEROS',
    payload: heros
  })
}

export const setHero = (hero: IHero) => (dispatch: AppDispatch) => {
  dispatch({
    type: 'SET_HERO',
    payload: hero
  })
}
