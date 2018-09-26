import React, { Component } from 'react';

import GridBoard from './components/GridBoard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="wrapper">
          <div className="main-container">
            <div className="game-card">
              <GridBoard name = {"You"} gridX={10} gridY={10} module={40} />
              {/* Sips or Shapes */}
              <GridBoard name = {"Available Ships"} gridX={10} gridY={7} module={40} />
            </div>
            <div className="game-card">
              <GridBoard name = {"Also You"} gridX={10} gridY={10} module={40} />
              <GridBoard name = {"Opponent's Fleet"} gridX={10} gridY={2} module={40} />
              <GridBoard  gridX={10} gridY={2} module={40} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
