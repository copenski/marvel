import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { HerosList } from '../../interfaces/interfaces';

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heros: HerosList;
}
