import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';
import { Card } from '../Card/Card';
import { CustomLink } from '../CustomLink/CustomLink';

export const CardList = ({ heros, ...props }: CardListProps): JSX.Element => {

  return (
    <div className={styles.cardList} {...props}>
      {heros.map((hero) =>
        <CustomLink key={hero.name} to={`/heros/${hero.name}`}>
          <Card hero={hero} />
        </CustomLink>)}
    </div>
  )
}
