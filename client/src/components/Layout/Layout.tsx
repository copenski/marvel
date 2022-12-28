import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div >
  )
}
