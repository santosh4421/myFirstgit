import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Prob1 } from './Prob1';
import { Prob2 } from './Prob2';
import { Prob3 } from './Prob3';

function App() {
  return(
    <div className='App'>
      <Prob1/>
      <Prob2/>
      <Prob3/>
    </div>
  )
}

export default App;