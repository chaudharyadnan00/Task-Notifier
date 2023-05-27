import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import './App.css';
const App = () => {

  return (
    <>
      <div className="heroDiv">
        <Navbar />
        <Main />
      </div>
    </>
  );
}
export default App;