import React, { useContext } from 'react';
import style from './Header.module.css';
import { Theme } from '../Theme/Theme';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../i18n/i18n';
import { PathNavigation } from '../../enums/Navigation';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo.svg';
import useTheme from '../../hooks/useTheme';
import Hamburger from '../Hamburger/Hamburger';
import { Context } from '../../hooks/context';

export const Header = () => {
  const { isActive, setIsActive } = useContext(Context);
  const { theme, toggleTheme } = useTheme();
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

  const onToggleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav className={`${theme === 'dark' ? style.dark : style.light}`}>
        <div className="container">
          <div className={`${style.navigation} ${isActive && style.active}`}>
            <NavLink onClick={onToggleMenuClick} className={style.logo} to={PathNavigation.HOME}>
              <img src={logo} alt="logo" />
              <span>Best Tracker</span>
            </NavLink>

            <div className={style.registerGroup}>
              <NavLink onClick={onToggleMenuClick} to={PathNavigation.SING_IN}>
                <Button style={{ width: 100 }} variant="contained">
                  {t('sing in')}
                </Button>{' '}
              </NavLink>

              <NavLink onClick={onToggleMenuClick} to={PathNavigation.SING_UP}>
                <Button
                  style={{ margin: 20, width: 130 }}
                  className={style.btn}
                  variant="contained"
                >
                  {t('sing up')}
                </Button>
              </NavLink>

              <Theme theme={theme} toggleTheme={toggleTheme} />

              <Button
                style={{ margin: 20 }}
                onClick={handleChangeLanguage}
                variant="contained"
                color="secondary"
              >
                {t('lang')}
              </Button>
            </div>
          </div>
        </div>
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
      </nav>
    </header>
  );
};
