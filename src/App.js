import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <GameBoard />
      </div>
    );
  }
}

export default App;
