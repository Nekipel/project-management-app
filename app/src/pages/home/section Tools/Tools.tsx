import React from 'react';
import tools1 from '../../../assets/image/home/tools/tools-1.svg';
import tools2 from '../../../assets/image/home/tools/tools-2.svg';
import tools3 from '../../../assets/image/home/tools/tools-3.svg';
import tools4 from '../../../assets/image/home/tools/tools-4.svg';
import board from '../../../assets/image/home/tools/board.svg';
import './Tools.css';
const Tools = () => {
  return (
    <section className="tools">
      <h3 className="toolsTitle title">We develop tools to unlock your superpowers</h3>
      <div className="toolsInner">
        <div className="container">
          <div className="toolsItems">
            <div className="toolsItem">
              <img src={tools1} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">First click</h5>
              <p className="toolsItemText">
                From the first click you will understand that this is the best product.
              </p>
            </div>
            <div className="toolsItem">
              <img src={tools2} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">Feedback</h5>
              <p className="toolsItemText"> We are always happy to help you.</p>
            </div>
            <div className="toolsItem">
              <img src={tools3} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">Community</h5>
              <p className="toolsItemText">
                Can be customized to suit the needs of a particular organization.
              </p>
            </div>
            <div className="toolsItem">
              <img src={tools4} className="toolsItemImg" alt="tools img" />
              <h5 className="toolsItemTitle title">Сommon cause</h5>
              <p className="toolsItemText">The choice and responsibility of each person.</p>
            </div>
          </div>
        </div>
        <img className="board" src={board} alt="board" />
      </div>
    </section>
  );
};

export default Tools;
