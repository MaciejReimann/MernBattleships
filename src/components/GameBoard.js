import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import GameField from './GameField';

const gridOfGameFields = x => y => props => Array(x).fill()
  .map((_, i) => (Array(y).fill()
  .map((_, j) => <GameField key={j} isMouseDown = {props}/> )
))

class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      module: 50,
      isMouseDown: false
    }
    this.toggleMouseDown = this.toggleMouseDown.bind(this);

  }
  toggleMouseDown = () => this.setState({
    isMouseDown: !this.state.isMouseDown
  })

  render() {
    const grid = gridOfGameFields(10)(10)(this.state.isMouseDown)
    return (
      <div className="gameboard-container">
        <div
          className="gameboard"
          style={{width: "500px", height: "500px"}}
          onMouseDown = {this.toggleMouseDown}
          onMouseUp = {this.toggleMouseDown}
        >
          {grid}
        </div>
      </div>
    );
  }
}

export default Gameboard;
