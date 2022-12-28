import { CustomLinkProps } from './CustomLink.props';
import { Link } from 'react-router-dom';
import styles from './CustomLink.module.css';

export const CustomLink = ({ to, children, ...props }: CustomLinkProps): JSX.Element => {
  return (
    <Link className={styles.link} to={to} {...props}>{children}</Link>
  )
}
