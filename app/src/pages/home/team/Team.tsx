import React, { useContext } from 'react';
import './Team.css';
import team1 from '../../../assets/image/home/team/team-1.jpg';
import team2 from '../../../assets/image/home/team/team-2.jpg';
import team3 from '../../../assets/image/home/team/team-3.jpg';
import team4 from '../../../assets/image/home/team/team-4.jpg';
import team5 from '../../../assets/image/home/team/team-5.jpg';
import { PathNavigation } from '../../../enums/Navigation';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Context } from '../../../hooks/context';
const Team = () => {
  const { t } = useTranslation();
  const { isActive, setIsActive } = useContext(Context);
  const onToggleMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <section className="team">
      <div className="container">
        <div className="teamInner">
          <div className="teamItem teamItem1">
            <img className="teamItem-img" src={team1} alt="name" />
            <p className="teamItemText teamItemTextRight">I will help you find the best option</p>
          </div>

          <div className="teamItem teamItem2">
            <img className="teamItem-img" src={team2} alt="name" />
            <p className="teamItemText teamItemTextLeft">
              I will help you with any type of assignments
            </p>
          </div>

          <div className="teamItem teamItem3">
            <img className="teamItem-img" src={team3} alt="name" />
            <p className="teamItemText teamItemTextRight">
              I will help you improve your productivity
            </p>
          </div>

          <div className="teamItem teamItem4">
            <img className="teamItem-img" src={team4} alt="name" />
            <p className="teamItemText teamItemTextRight">I will help you always</p>
          </div>

          <div className="teamItem teamItem5">
            <img className="teamItem-img" src={team5} alt="name" />
            <p className="teamItemText teamItemTextRight">
              I will help you achieve success in the work of the whole team
            </p>
          </div>

          <div className="teamBox">
            <h3 className="teamTitle title">Need a super hero?</h3>
            <p className="teamText">
              Consolidate all tasks in one place, even if your team members are scattered around the
              world.
            </p>
            <NavLink onClick={onToggleMenuClick} to={PathNavigation.SING_IN}>
              <Button size="large" variant="contained">
                {t('sing in')}
              </Button>{' '}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
