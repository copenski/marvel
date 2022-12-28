import TagProps from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({ children, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={styles.tag}
      {...props}
    >
      {children}
    </div >
  );
};
