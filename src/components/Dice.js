import React, { useState } from 'react';
import Button from './Button';
import Rules from './Rules';

function Dice({currentDice, handleClick, setscore, seterror}) {
 

//   const GenerateRandomNumber = () => Math.floor(Math.random() * 6) + 1;

//   const handleClick = () => {
//     const randomNum = GenerateRandomNumber();
//     setCurrentDice(randomNum);
//   };
const resetScore = () => {
    setscore(0);
    seterror("Score has been reset");
}

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
    <div onClick={handleClick} className='container d-flex flex-column justify-content-center align-items-center gap-3'>
      <img src={`./images/dice_${currentDice}.png`} alt='dice-img' />
      <Button onClick={resetScore} text="Reset Game" />
      <Button text="Show Results" />
      <Rules/>

    </div>
  </div>
  );
}

export default Dice;
