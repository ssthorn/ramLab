import './App.css';
import React, { useState, useEffect } from 'react';
import CharacterContainer from './characterContainer/characterContainer';
import SingleCharacterComponent from './characterContainer/singleCharacterComponent/singleCharacterComponent';

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <CharacterContainer />
    </div>
  );
}

export default App;
