import React from 'react';
import style from './Header.module.css';
import { Theme } from '../Theme/Theme';
import { HeaderProps } from './types';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../i18n/i18n';

export const Header = ({ toggleTheme, theme }: HeaderProps) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  const handleChangeLanguage = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  };
  return (
    <header className={style.header}>
      <nav className={style.navigation}>
        <a className={style.logo} href="#">
          logo
        </a>
        <div className={style.registrGroup}>
          <Button className={style.btn} variant="contained">
            {t('sing in')}
          </Button>
          <Button className={style.btn} variant="contained">
            {t('sing up')}
          </Button>
          <Theme theme={theme} toggleTheme={toggleTheme} />
          <button onClick={handleChangeLanguage}>{t('lang')}</button>
        </div>
      </nav>
    </header>
  );
};
