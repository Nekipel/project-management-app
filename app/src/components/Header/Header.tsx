import React from 'react';
import style from './Header.module.css';
import { Theme } from '../Theme/Theme';
import { HeaderProps } from './types';

export const Header = ({ toggleTheme, theme }: HeaderProps) => {
  return (
    <header className={style.header}>
      <nav className={style.navigation}>
        <a className={style.logo} href="#">
          logo
        </a>
        <div className={style.registrGroup}>
          <button>вход</button>
          <button>регистрация</button>
          <Theme theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </header>
  );
};
