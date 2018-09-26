import React, { Component } from 'react';

import GameField from './GameField';

const gridOfGameFields = x => y => listener => size => data => Array(x).fill()
  .map((_, i) => (Array(y).fill()
  .map((_, j) => <GameField positionX = {i} positionY = {j} key={j} isMouseDown = {listener} size = {size}
    data = { data[j][i] }
  />
  )
))

const ships = Array(10).fill().map((_, i) => (Array(10).fill().map((_, j) => { return {x: i * 10, y: j * 10} } )))

class GridBoard extends Component {
  constructor(props) {
    super(props)
    const { name, gridX, gridY, module } = this.props;
    this.state = {
      name: name,
      gridX: gridX,
      gridY: gridY,
      module: module,
      isMouseDown: false,
      data: ships
    }
    this.toggleMouseDown = this.toggleMouseDown.bind(this);
  }

  toggleMouseDown = () => this.setState({
    isMouseDown: !this.state.isMouseDown
  })

  render() {
    const { name, module, isMouseDown, gridX, gridY, data } = this.state;
    const style = {
      width: gridX * module,
      height: gridY * module,
      display: "grid",
      gridTemplateRows: "repeat("+gridY+", "+gridY+"fr)",
      gridTemplateColumns: "repeat("+gridX+", "+gridX+"fr)"
    }
    const grid = gridOfGameFields(gridY)(gridX)(isMouseDown)(module)(data);
    return (
      <div className="gameboard-container">
        <div className="gameboard-name">
          <h1>{name}</h1>
        </div>
        <div
          className="gameboard"
          style={style}
          onMouseDown = {this.toggleMouseDown}
          onMouseUp = {this.toggleMouseDown}
        >
          {grid}
        </div>
      </div>
    );
  }
}

export default GridBoard;
