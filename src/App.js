import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Localisation from './Components/Localisation'
import Restaurants from './Components/Restaurants';
import Header from './Components/Header';


function App() {
  return(
    <div>
    <Header />
    <Localisation/>
    </div>
  );
}

export default App;
