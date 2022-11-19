import React from 'react';
import './Direction.css';
import direction1 from '../../../assets/image/home/direction/direction-1.svg';
const Direction = () => {
  return (
    <section className="direction">
      <div className="container">
        <div className="directionItem">
          <div className="directionItemContent">
            <h3 className="directionItemTitle title">Improvements</h3>
            <p className="directionItemTitleText">
              Integration of the best working tools.Hundreds of enhancements available to meet every
              team workflow need.
            </p>
            <h6 className="directionTitleSubtitle title">Automation without writing code.</h6>
            <p className="directionItemText">
              Let the robots do the work and let the team focus on the really important things.
            </p>
            <h6 className="directionTitleSubtitle title">Go into details</h6>
            <p className="directionItemText">
              On any card, you will find a comprehensive system of checklists, due dates,
              attachments, discussions, and more.
            </p>
            <h6 className="directionTitleSubtitle title">The board is just the beginning</h6>
            <p className="directionItemText">
              Lists and cards are the building blocks that help you organize your work.
            </p>
          </div>
          <img className="directionItemImg" src={direction1} alt="Design Professionals images" />
        </div>
      </div>
    </section>
  );
};
export default Direction;
