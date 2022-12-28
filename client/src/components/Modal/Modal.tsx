import { ModalProps } from './Modal.props';
import styles from './Modal.module.css';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import React, { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { setHero } from '../../store/actions/heros.action';
import { Tag } from '../Tag/Tag';

export const Modal = ({ setModal, ...props }: ModalProps): JSX.Element => {

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [showedMessage, setShowedMessage] = useState<boolean>(false);
  const [superPower, setSuperPower] = useState<string>('');
  const [superPowers, setSuperPowers] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  function submitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!name || !description || !url) {
      setShowedMessage(true);
      setTimeout(() => { setShowedMessage(false) }, 1000)
      return;
    }

    dispatch(setHero({ name, description, imgSrc: url, superPower: superPowers }));
    setModal(false);
  }

  function closeHandler(e: React.MouseEvent<HTMLDivElement>): void {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }

  function addSuperPower(): void {
    setSuperPowers((prev) => [...prev, superPower])
    setSuperPower('');
  }

  function keyEnterHandler(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      addSuperPower();
    }
  }

  return (
    <div className={styles.modal} onClick={closeHandler}>
      <form onSubmit={submitHandler} className={styles.addForm}>
        <Input
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <TextArea
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Input
          placeholder='Image URL'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className={styles.superPower}>
          <Input
            placeholder='Super Power'
            value={superPower}
            onChange={(e) => setSuperPower(e.target.value)}
            onKeyUp={keyEnterHandler}
          />
          <Button type='button' onClick={addSuperPower} appearance='primary'>Add Super Power</Button>
        </div>
        {
          superPowers.length > 0 &&
          <div className={styles.tags}>
            {superPowers.map((power) => <Tag key={power}>{power}</Tag>)}
          </div>
        }
        {showedMessage && <span className={styles.message}>Необходимо заполнить все поля!</span>}
        <div>
          <Button appearance='primary'>Save</Button>
        </div>
      </form >
    </div >
  )
}
