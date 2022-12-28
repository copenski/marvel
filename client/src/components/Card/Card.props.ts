import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IHero } from '../../interfaces/interfaces';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  hero: IHero;
}
