import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class GameField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: {},
      size: 50,
    }
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  colorCanvas = canvas => color => {
    const ctx = canvas.getContext('2d');
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fill();
  }

  onMouseDown = e => {
    const canvas = findDOMNode(this.refs["canvas"]);
    this.colorCanvas(canvas)("grey")
  }

  render() {
    return (
      <div className="gamefield" style={{width: "50px", height: "50px"}}>
        <canvas
          className="canvas"
          ref="canvas"
          width={this.state.size}
          height={this.state.size}
          onMouseDown = {this.onMouseDown}
        />
      </div>
    );
  }
}

export default GameField;
