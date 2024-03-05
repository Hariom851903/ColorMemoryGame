import React, { useEffect, useState } from 'react';
import '../css/box.css';
import logo from './logo.png';

const Boxes = ({ chgpointer, dicevalue, pointervalue }) => {
    const [colors, setColors] = useState(Array(12).fill(null)); // State for storing box colors
    const [tr, setTr] = useState(Array(12).fill(false)); // State to track clicked boxes
    const [diceValue, setDiceValue] = useState(null); // State for storing dice value
    const [chgcolor, setChgColor] = useState(true); // State for controlling color change animation
    // Function to generate random background colors for boxes
    const colorOptions = ['red', 'green', 'blue'];
    const generateRandomColors = () => {
       
        const newColors = Array(12).fill(null).map(() => {
            const randomIndex = Math.floor(Math.random() * colorOptions.length);
            return colorOptions[randomIndex];
        });
        setColors(newColors);
    };

    useEffect(() => {
        generateRandomColors();
    }, []);

    // Function to handle box click
    const handleBoxClick = (index) => {
      // Set the diceValue to the index of the clicked box's color in the colorOptions array
      setDiceValue(colorOptions.indexOf(colors[index]));
  
      // Create a copy of the tr state
      const updatedTr = [...tr];
      // Set the clicked box's index to true
      updatedTr[index] = true;
      // Update the tr state
      setTr(updatedTr);
  
      // Disable changing colors temporarily
      setChgColor(false);
  
      // Check if the index of the clicked box's color matches the diceValue
      if (colorOptions.indexOf(colors[index]) !== dicevalue - 1) {
          // If not, reset the clicked box's index to false after 2 seconds
          setTimeout(() => {
              updatedTr[index] = false;
              setTr(updatedTr);
          }, 100);
      }
  
      // Enable changing colors after 2 seconds
      setTimeout(() => {
          setChgColor(true);
      }, 2000);
  };
  

    return (
        <div className="game-container">
            <div className="boxes">
                {colors.map((color, index) => (
                    <div key={index} className="box" onClick={() => handleBoxClick(index)}>
                        <div className="front">
                            {!tr[index]?
                                <img src={logo} alt="Image" className='image' />
                                : <div className="back" style={{ backgroundColor: `${color}` }}></div>}
                        </div>
                    </div>
                ))}
            </div>
            {diceValue && <p>Clicked color: {diceValue}</p>}
        </div>
    );
};

export default Boxes;
