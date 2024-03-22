import React, { useState } from 'react';
// import Dice from './Dice'; // Import Dice component
import Winner from './Winner'; // Import Winner component
import '../css/userinfo.css';
import Start from './Start';

const Userinfo = () => {
    const [formData, setFormData] = useState({ player1: '', player2: '' });
    const [scores, setScores] = useState({ player1: 0, player2: 0 }); // State to store scores
    const [currentPlayer, setCurrentPlayer] = useState(null);
   const  [load,setload]=useState(false)
    // Function to handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };



    // Function to set player's chance
   // Function to update score
const updateScore = () => {
    setScores((prevScores) => {
        const updatedScores = { ...prevScores, [currentPlayer]: prevScores[currentPlayer] + 1 };
        // Call setPlayer after updating scores
        // Change this line
        setPlayer(updatedScores)
        return updatedScores;
    });
};


// Function to set player's chance
const setPlayer = (playerScore) => {
    console.log(playerScore.player1 + playerScore.player2);
    if (playerScore.player1+playerScore.player2===20 || 
        playerScore.player1===11 || playerScore.player2===11) { // Changed condition to check if score is greater than or equal to 15
        console.log("Hariom")
        setTimeout(()=>{
            setload(true)
        },1000)
    }
};

// function Restart
function restart()
{
    setCurrentPlayer(Math.random() < 0.5 ? 'player1' : 'player2');
    setScores({ player1: 0, player2: 0 });
    setload(false)
}


    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentPlayer(Math.random() < 0.5 ? 'player1' : 'player2');
    };

   // change current player 

  const handlplayer=()=>{
    setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
  }


    return (
        <>
            {currentPlayer === null ? (
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="player1">Player 1:</label>
                        <input
                            type="text"
                            id="player1"
                            name="player1"
                            placeholder="Enter your name player1"
                            value={formData.player1}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="player2">Player 2:</label>
                        <input
                            type="text"
                            id="player2"
                            name="player2"
                            placeholder="Enter your name player2"
                            value={formData.player2}
                            onChange={handleInputChange}
                            required
                        />
                        <button type="submit">Start Game</button>
                    </form>
                </div>
            ) : (
                load? (<Winner player={scores.player1 > scores.player2 ? formData.player1 : formData.player2}
                  score={scores.player1 > scores.player2 ? scores.player1 : scores.player2} restart={restart} />)
                :
                (<Start
                updateScore={updateScore} 
                currentPlayer={currentPlayer} 
                handlplayer={handlplayer}
                 formData={formData} 
                 scores={scores}></Start>)
            )}
        </>
    );
};

export default Userinfo;
