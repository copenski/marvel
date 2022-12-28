import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button = ({ appearance, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${appearance === 'primary' ? styles.primary : ''}${appearance === 'second' ? styles.second : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
