import React from 'react';
import style from './Header.module.css';
import { Theme } from '../Theme/Theme';
import { HeaderProps } from './types';
import { Button } from '@mui/material';

export const Header = ({ toggleTheme, theme }: HeaderProps) => {
  return (
    <header className={style.header}>
      <nav className={style.navigation}>
        <a className={style.logo} href="#">
          logo
        </a>
        <div className={style.registrGroup}>
          <Button className={style.btn} variant="contained">
            вход
          </Button>
          <Button className={style.btn} variant="contained">
            регистрация
          </Button>
          <Theme theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </header>
  );
};
