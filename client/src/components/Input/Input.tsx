import { InputProps } from './Input.props';
import styles from './Input.module.css';

export const Input = ({ ...props }: InputProps): JSX.Element => {
  return (
    <input className={styles.input} {...props} />
  )
}
