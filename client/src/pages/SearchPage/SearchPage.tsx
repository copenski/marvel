import { useLocation } from 'react-router-dom';
import { CardList } from '../../components';
import styles from './SearchPage.module.css';

export const SearchPage = () => {

  const { state } = useLocation();

  return (
    <>
      <div className={styles.searchPage}>
        <CardList heros={state} />
      </div>
    </>
  )
}
