import React, { useContext } from 'react';
import style from './BestTracker.module.css';
import { NavLink } from 'react-router-dom';
import { PathNavigation } from '../../../enums/Navigation';
import Effect from './effect/Effect';
import { Context } from '../../../hooks/context';
import topImg from '../../../assets/image/home/best tracker/top-bg.svg';
const BestTracker = () => {
  const { isActive, setIsActive } = useContext(Context);

  const onToggleMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <section className={style.top}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.content}>
            <h1 className={`${style.titleTop} ${style.title}`}>
              Best Tracker helps to collect all employees, tasks and tools in one place
            </h1>

            <p className={style.text}>
              Connect everything in one place, even if your team members are scattered around the
              world.
            </p>
            <NavLink
              className={`${style.btn} ${style.outerShadow} ${style.hoverInShadow}`}
              onClick={onToggleMenuClick}
              to={PathNavigation.SING_IN}
            >
              Sing In
            </NavLink>
            <NavLink
              className={`${style.btn2} ${style.outerShadow2} ${style.hoverInShadow2}`}
              onClick={onToggleMenuClick}
              to={PathNavigation.SING_UP}
            >
              Sing Up
            </NavLink>
          </div>
          <img className="directionItemImg" src={topImg} alt="Design Professionals images" />
        </div>
      </div>
      <Effect />
    </section>
  );
};

export default BestTracker;
