import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import GameField from './GameField';

const gridOfGameFields = x => y => Array(x).fill()
  .map((_, i) => (Array(y).fill()
  .map((_, j) => <GameField key={j}/> )
))

class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      module: 50,
    }
  }

  render() {
    const grid = gridOfGameFields(10)(10)
    return (
      <div className="gameboard-container">
        <div className="gameboard" style={{width: "500px", height: "500px"}}>
          {grid}
        </div>
      </div>
    );
  }
}

export default Gameboard;
