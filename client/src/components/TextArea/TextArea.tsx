import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';

export const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
  return (
    <textarea className={styles.textarea} {...props}></textarea>
  );
};
