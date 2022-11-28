import React, { useContext } from 'react';
import style from './BestTracker.module.css';
import { NavLink } from 'react-router-dom';
import { PathNavigation } from '../../../enums/Navigation';
import Effect from './effect/Effect';
import { Context } from '../../../hooks/context';
import topImg from '../../../assets/image/home/best tracker/top-bg.svg';
import { useTranslation } from 'react-i18next';
const BestTracker = () => {
  const { isActive, setIsActive } = useContext(Context);
  const { t } = useTranslation();

  const onToggleMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <section className={style.top}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.content}>
            <h1 className={`${style.titleTop} ${style.title}`}>{t('bt title')}</h1>

            <p className={style.text}>{t('bt subTitle')}</p>
            <div className={style.buttons}>
              <NavLink
                className={`${style.btn} ${style.outerShadow} ${style.hoverInShadow}`}
                onClick={onToggleMenuClick}
                to={PathNavigation.SING_IN}
              >
                {t('sing in')}
              </NavLink>
              <NavLink
                className={`${style.btn2} ${style.outerShadow2} ${style.hoverInShadow2}`}
                onClick={onToggleMenuClick}
                to={PathNavigation.SING_UP}
              >
                {t('sing up')}
              </NavLink>
            </div>
          </div>
          <img className={style.directionItemImg} src={topImg} alt="Design Professionals images" />
        </div>
      </div>
      <Effect />
    </section>
  );
};

export default BestTracker;
