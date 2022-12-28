import { HeroProfileProps } from './HeroProfile.props';
import styles from './HeroProfile.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import { IHero } from '../../interfaces/interfaces';
import { Tag } from '../../components';

export const HeroProfile = ({ ...props }: HeroProfileProps): JSX.Element => {

  const { heros } = useSelector((state: RootState) => state);
  const params = useParams();

  const curHero: IHero = heros.filter((hero) => hero.name === params.name)[0];

  return (
    <article className={styles.hero} {...props}>
      {curHero ?
        <>
          <h1 className={styles.name}>{curHero.name}</h1>
          <div className={styles.image}>
            <img src={curHero.imgSrc} alt={curHero.name} />
          </div>
          <section className={styles.description}>
            {curHero.description}
          </section>
          {
            curHero.superPower &&
            <section className={styles.tags}>
              <h2>
                Super Powers:
              </h2>
              {curHero.superPower.map((power) => <Tag key={power}>{power}</Tag>)}
            </section>
          }
        </>
        : <h1>Герой не найден</h1>
      }
    </article>
  )
}
