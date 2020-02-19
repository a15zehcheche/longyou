import React from 'react';
//import logo from './logo.svg';
import Map from './component/map'
import './App.css';
import Player from './component/player'
import date from './date'

function App() {
  const players = date.players.map((playerDate) => <Player date={playerDate}/> );

  return (
    <div>
      <div class="playerContainer">
        {players}
      </div>
      <Map />
    </div>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
