import React from 'react';
import './Direction.css';
import direction1 from '../../../assets/image/home/direction/direction-1.svg';
import { useTranslation } from 'react-i18next';
const Direction = () => {
  const { t } = useTranslation();
  return (
    <section className="direction">
      <div className="container">
        <div className="directionItem">
          <div className="directionItemContent">
            <h3 className="directionItemTitle title">{t('direction improvements')}</h3>
            <p className="directionItemTitleText">{t('direction improvements text')}</p>
            <h6 className="directionTitleSubtitle title">{t('direction automation')}</h6>
            <p className="directionItemText">{t('direction automation text')}</p>
            <h6 className="directionTitleSubtitle title">{t('direction details')}</h6>
            <p className="directionItemText">{t('direction details text')}</p>
            <h6 className="directionTitleSubtitle title">{t('direction board')}</h6>
            <p className="directionItemText">{t('direction board text')}</p>
          </div>
          <img className="directionItemImg" src={direction1} alt="Design Professionals images" />
        </div>
      </div>
    </section>
  );
};
export default Direction;
