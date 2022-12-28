import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, CardList, Modal } from '../../components';
import { RootState } from '../../store/store';
import styles from './MainPage.module.css';

export const MainPage = () => {

  const [modal, setModal] = useState<boolean>(false);
  const { heros } = useSelector((state: RootState) => state);

  return (
    <>
      <div className={styles.mainPage}>
        <div className={styles.addHero}>
          <Button appearance='primary' onClick={() => setModal(true)}>Add hero</Button>
        </div>
        <CardList heros={heros} />
      </div>
      {
        modal && <Modal setModal={setModal} />
      }
    </>
  )
}
