import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { CustomLink } from '../CustomLink/CustomLink';
import { Search } from '../Search/Search';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {


  return (
    <header className={styles.header} {...props}>
      <CustomLink to='/'>
        <h1>MARVEL HEROS</h1>
      </CustomLink>
      <Search />
    </header>
  )
}
