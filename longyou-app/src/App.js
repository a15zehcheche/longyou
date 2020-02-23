import React, {Component} from 'react';
import StartScreen from './screen/startScreen'
import GameScreen from './screen/gameScreen'
import WinResultScreen from './screen/winResultScreen'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      scree: null
    }

  }

  render() {
    return (
      <div>
      <StartScreen/>
      </div>
    );
  };
}

/*
function App() {
  
  return (
    <div>
       <StartScreen  />
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
 
  );
}
   */

export default App;
