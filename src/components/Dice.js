import React, { useState, useEffect } from 'react';
import '../css/Dice.css'; // CSS file for styling
import Boxes from './Boxes';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(0); // State for storing dice value
  const [rolling, setRolling] = useState(false); // State to track if dice is currently rolling
  const [pointer,setpointer]=useState(true)

  // Function to roll the dice
  const rollDice = () => {
    if (!rolling) {
      setRolling(true); // Start rolling animation
      setTimeout(() => {
        const newValue = Math.floor(Math.random() * 3) + 1; // Generate a random value between 1 to 3
        setDiceValue(newValue); // Update dice value
        setRolling(false); // Stop rolling animation
        setpointer(false);
      }, 1000); // Rolling animation duration in milliseconds
    }
  };
  function chnagepointer()
  {
    setpointer(true)
  }
  // Effect to reset dice value when rolling state changes
  useEffect(() => {
    setDiceValue(0); // Reset dice value
  }, []);

  return (
    <>
        <Boxes chgpointer={chnagepointer} dicevalue={diceValue} pointervalue={pointer} />
        <div className="dice-container">
        
      <div className={`dice dice-${diceValue} ${rolling ? 'rolling' : ''} dot-${diceValue} ${pointer? '':'dicpointer'}`} onClick={rollDice}>

      </div>
    </div>
    </>
    
  );
};

export default Dice;
