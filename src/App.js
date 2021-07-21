import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Localisation from './Components/Localisation'
import Restaurants from './Components/Restaurants';

function App() {
  return(
    <div>
    <Localisation/>
    <Restaurants />
    </div>
  );
}

export default App;
