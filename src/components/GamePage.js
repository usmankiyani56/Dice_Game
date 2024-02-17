import React, { useState } from 'react';
import styles from './GamePage.module.css';
import Dice from './Dice';

function GamePage() {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [score, setscore] = useState(0);
    const [selectedNumber, setselectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, seterror] = useState("Select the Number");
    
    const GenerateRandomNumber = () => Math.floor(Math.random() * 6) + 1;

    const handleNumberSelection = (value) => {
        setselectedNumber(value);
        seterror("You have selected the number");
    };

    const handleClick = () => {
        if (!selectedNumber) {
            seterror("You have not selected any number");
            return;
        }
        seterror("Select Number");
        const randomNum = GenerateRandomNumber();
        setCurrentDice(randomNum);
        if (randomNum === selectedNumber) {
            setscore(prev => prev + randomNum);
        } else {
            setscore(prev => prev - 2);
        }
        setselectedNumber(undefined);
    };
    

    return (
        <div>
            <div className="container d-flex justify-content-between">
                <div className='container mt-5 d-flex flex-column align-items-center'>
                    <h1>
                        {score}
                    </h1>
                    <h1>
                        Total Score
                    </h1>
                </div>
                <div className='container d-flex align-items-center gap-3'>
                    {arrNumber.map((value, i) => (
                        <div
                            className={`${styles.box} ${selectedNumber === value ? styles.selected : ''}`}
                            onClick={() => handleNumberSelection(value)} key={i}>
                            {value}
                        </div>
                    ))}
                </div>
            </div>
            <div className='container d-flex justify-content-end'>
            <p>
  <b className={`${error === "You have not selected any number" ? styles.errorText : styles.normalText}`}>{error}</b>
</p>

            </div>
            <Dice currentDice={currentDice} handleClick={handleClick} score={score} setscore={setscore} seterror={seterror} />
        </div>
    );
}

export default GamePage
