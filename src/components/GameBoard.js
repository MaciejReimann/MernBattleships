import React, { Component } from 'react';

import GameField from './GameField';

const gridOfGameFields = x => y => listener => size => Array(x).fill()
  .map((_, i) => (Array(y).fill()
  .map((_, j) => <GameField positionX = {i} positionY = {j} key={j} isMouseDown = {listener} size = {size} /> )
))

class Gameboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gridSize: 10,
      module: 50,
      isMouseDown: false
    }
    this.toggleMouseDown = this.toggleMouseDown.bind(this);
  }

  toggleMouseDown = () => this.setState({
    isMouseDown: !this.state.isMouseDown
  })

  render() {
    const { module, isMouseDown, gridSize } = this.state;
    const grid = gridOfGameFields(gridSize)(gridSize)(isMouseDown)(module);
    return (
      <div className="gameboard-container">
        <div
          className="gameboard"
          style={{width: gridSize * module, height: gridSize * module}}
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
