import React, {  useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from 'react-bootstrap-sweetalert'; // Import SweetAlert component
import '../css/winner.css';
import HomePage from './HomePgae';

const Winner = ({ player, score,restart }) => {
 // State to control visibility of alert
 const [showAlert, setShowAlert] = useState(true);

    // Function to handle click on start button
    const handleStartClick = () => {
  
        setShowAlert(false);
        restart()
        // Hide the alert
    
        // Add your logic to start the game
    };

    // Function to handle click on exit button
    const handleExitClick = () => {
        // return (<><HomePage></HomePage></>)
          setShowAlert(false);
        // Add your logic to exit the game
    };



    return (
        <>
           
         { score!==10?  (<SweetAlert
                show={showAlert}
                title="Game Over!"
                onConfirm={handleStartClick}
                confirmBtnText="Restart"
                showCancel
                onCancel={handleExitClick}
                cancelBtnText="Exit"
            >
                 <div className="balloons">
                    <span role="img" aria-label="balloon" className="balloon balloon-1">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-2">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-3">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-4">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-5">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-6">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-7">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-8">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-9">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-10">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-11">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-12">🎈</span>
                </div>
                <div>
                    <h2>🎉 Congratulations to the winner! 🎉</h2>
                    <h1 className='player'>🌟{player}</h1>
                    <p>🏆 Score: {score}</p>
                    <p>🎈 Best wishes for success! 🎈</p>
                </div>
                <div className="balloons">
                    <span role="img" aria-label="balloon" className="balloon balloon-1">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-2">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-3">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-4">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-5">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-6">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-7">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-8">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-9">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-10">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-11">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-12">🎈</span>
                </div>
                
            </SweetAlert>):(<SweetAlert
                show={showAlert}
                title="Game Over!"
                onConfirm={handleStartClick}
                confirmBtnText="Restart"
                showCancel
                onCancel={handleExitClick}
                cancelBtnText="Exit"
            >
                 <div className="balloons">
                    <span role="img" aria-label="balloon" className="balloon balloon-1">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-2">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-3">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-4">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-5">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-6">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-7">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-8">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-9">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-10">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-11">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-12">🎈</span>
                </div>
                <div>
                    <h2>🎉 Congratulations🎉</h2>
                     <h1>🌟Match tie</h1>
                     <p>Well Play both of you</p>
                     <p>🎈Best wishes for success! 🎈</p>
                </div>
                <div className="balloons">
                    <span role="img" aria-label="balloon" className="balloon balloon-1">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-2">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-3">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-4">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-5">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-6">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-7">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-8">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-9">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-10">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-11">🎈</span>
                    <span role="img" aria-label="balloon" className="balloon balloon-12">🎈</span>
                </div>
                
            </SweetAlert>)
         }
            { !showAlert ? <HomePage/>: ' '}
        </>
    );
};

export default Winner;
