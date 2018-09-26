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

class Legend extends Component {
  constructor(props) {
    super(props)
    const { name } = this.props;
    this.state = {
      name: name,
      gridSize: 10,
      module: 50,
      isMouseDown: false,
      data: ships
    }
    this.toggleMouseDown = this.toggleMouseDown.bind(this);
  }

  toggleMouseDown = () => this.setState({
    isMouseDown: !this.state.isMouseDown
  })

  render() {
    const { name, module, isMouseDown, gridSize, data } = this.state;
    const grid = gridOfGameFields(gridSize)(gridSize)(isMouseDown)(module)(data);
    return (
      <div className="legend-container">
        <div className="legend-name">
          <h1>{name}</h1>
        </div>
        <div
          className="legend"
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

export default Legend;
