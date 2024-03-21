import React from 'react';
import Winner from './components/Winner';
import './App.css'
import HomePage from './components/HomePgae';
const App = () => {
  return (
    <div style={{ backgroundColor: '#000000' }} className='container'>
    <HomePage/>
    {/* <Winner/> */}
  </div>
  );
};

export default App;
