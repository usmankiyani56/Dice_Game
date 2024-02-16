// MainPage.js
import React from "react";
import styles from './mainPage.module.css';
import Button from './Button';

function MainPage({ toggle }) {
  return (
    <div className={styles.mainpage}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="./images/dices.png" alt="dice-image" width="550px" height="422px" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <h1>DICE GAME</h1>
            <div className="d-flex justify-content-end w-100 my-3">
              {/* Pass toggle function as onClick prop */}
              <Button onClick={toggle} text="Play Game" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
