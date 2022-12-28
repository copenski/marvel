import { CardProps } from './Card.props';
import styles from './Card.module.css';

export const Card = ({ hero, ...props }: CardProps): JSX.Element => {
  return (
    <div className={styles.card} {...props}>
      <div className={styles.imgWrap}>
        <img src={hero.imgSrc} alt={hero.name} />
      </div>
      <span className={styles.name}>{hero.name}</span>
    </div>
  )
}
