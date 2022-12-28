import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

export const Search = ({ ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const { heros } = useSelector((state: RootState) => state)
  const navigate = useNavigate();

  function searchHandler(): void {
    const searchedHeros = heros.filter((hero) => new RegExp(search, 'gi').test(hero.name));

    setSearch('');

    if (searchedHeros.length === 1) {
      navigate(`heros/${searchedHeros[0].name}`)
    } else if (searchedHeros.length > 1) {
      navigate('heros/search', { state: searchedHeros })
    } else {
      navigate(`heros/${search}`)
    }
  }
  function keyEnterHandler(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      searchHandler();
    }
  }

  return (
    <div className={styles.search}>
      <Input
        placeholder='Enter hero name'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={keyEnterHandler}
      />
      <Button onClick={searchHandler} appearance='second'>
        Search
      </Button>
    </div>
  )
}
