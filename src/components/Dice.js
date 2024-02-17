import React, { useState } from 'react';
import Button from './Button';
import Rules from './Rules';

function Dice({ currentDice, handleClick, score, setscore, seterror, FinalResult }) {
    const [showRules, setShowRules] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const resetScore = () => {
        setscore(0);
        seterror("Score has been reset");
    }

    const handleShowResults = () => {
        setShowResults(true);
    }

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center'>
            <div onClick={handleClick} className='container d-flex flex-column justify-content-center align-items-center gap-3'>
                <img src={`./images/dice_${currentDice}.png`} alt='dice-img' />
                <Button onClick={resetScore} text="Reset Game" />
                <Button onClick={handleShowResults} text="Show Results" />
                {showResults && <div>Score: {score}</div>}
                <Button onClick={() => setShowRules(!showRules)} text={showRules ? "Hide Rules" : "Show Rules"} />
                {showRules && <Rules />}
                
            </div>
        </div>
    );
}

export default Dice;
