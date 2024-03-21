import React from 'react';
import { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert'; // Import SweetAlert component
import { FaQuestion } from "react-icons/fa";
import Userinfo from './Userinfo';
import '../css/HomePage.css'; // Import CSS for styling

const HomePage = () => {
  const [showInstructions, setShowInstructions] = useState(false); // State to control visibility of instructions modal
  const [start,setstart]=useState(false)
   
   // Function to handle click on instructions button
   const handleStartClick = () => {
    setstart(true);
  };


  // Function to handle click on instructions button
  const handleInstructionsClick = () => {
    setShowInstructions(true);
  };

  // Function to handle close of instructions modal
  const handleCloseInstructions = () => {
    setShowInstructions(false);
  };

  return (
    start? <Userinfo/> :
    <div className="home-container">
      <h1>Welcome To Color Memory Game</h1>
    <div className='btn-container'>
    <button className="start-btn" onClick={handleStartClick}>Start</button>
      <button className="instructions-btn" onClick={handleInstructionsClick}>
      <FaQuestion /></button>
    </div>

      {/* Instructions modal */}
      <SweetAlert
        show={showInstructions}
        title="Instructions"
        onConfirm={handleCloseInstructions}
        className="sweet-instruction"
      >
       <div className='instruction'>
    <p className='point'>Fill in the players' names in the input fields provided.</p>
    <p className='point'>This is a color game where you need to match the 
    color of the box with the color shown on the dice.</p>
    <p className='point'>Click on the boxes to reveal their colors.</p>
    <p className='point'>If the color matches the dice, you score a point!</p>
    <p className='point'>The player with the highest score wins!</p>
    <p className='point'>If anyone's score reaches more than half of the total number
     of boxes plus one to secure your victory!, they will win</p>
</div>

      </SweetAlert>
    </div>
   );
};

export default HomePage;
