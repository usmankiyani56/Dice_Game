import React from 'react';
import styles from './button.module.css';

function Buttons(props) {
  const { text, onClick } = props; // Destructure text and onClick from props
  return (
    <div>
      {/* Add onClick event handler */}
      <button className={text=== "Play Game" || text=== "Show Results" ? styles.primary_btn : styles.reset_btn } onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Buttons;
