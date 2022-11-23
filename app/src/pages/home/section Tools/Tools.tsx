import React from 'react';
import tools1 from '../../../assets/image/home/tools/tools-1.svg';
import tools2 from '../../../assets/image/home/tools/tools-2.svg';
import tools3 from '../../../assets/image/home/tools/tools-3.svg';
import tools4 from '../../../assets/image/home/tools/tools-4.svg';
import board from '../../../assets/image/home/tools/board.svg';
import './Tools.css';
import { useTranslation } from 'react-i18next';
const Tools = () => {
  const { t } = useTranslation();
  return (
    <section className="tools">
      <div className="toolsInner">
        <div className="container">
          <h3 className="toolsTitle title">{t('tools title')}</h3>
          <div className="toolsItems">
            <div className="toolsItem">
              <img src={tools1} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">{t('tools click')}</h5>
              <p className="toolsItemText">{t('tools click text')}</p>
            </div>
            <div className="toolsItem">
              <img src={tools2} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">{t('tools feedback')}</h5>
              <p className="toolsItemText">{t('tools feedback text')}</p>
            </div>
            <div className="toolsItem">
              <img src={tools3} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">{t('tools community')}</h5>
              <p className="toolsItemText">{t('tools community text')}</p>
            </div>
            <div className="toolsItem">
              <img src={tools4} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">{t('tools common')}</h5>
              <p className="toolsItemText">{t('tools common text')}</p>
            </div>
          </div>
        </div>
        <img className="board" src={board} alt="board" />
      </div>
    </section>
  );
};

export default Tools;
