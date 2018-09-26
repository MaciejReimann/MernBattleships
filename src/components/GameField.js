import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class GameField extends Component {
  constructor(props) {
    super(props)
    const { positionX, positionY, size } = this.props;
    this.state = {
      positionX: positionX,
      positionY: positionY,
      size: size,
    }
    this.onMouseOver = this.onMouseOver.bind(this);
  }



  colorCanvas = canvas => color => {
    const ctx = canvas.getContext('2d');
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fill();
  }

  onMouseOver = e => {
    const canvas = findDOMNode(this.refs["canvas"]);
    this.colorCanvas(canvas)("grey")
        console.log(this.state.positionX)
  }

  render() {
    const {size} = this.state;
    return (
      <div className="gamefield" style={{width: size, height: size}}>
        <canvas
          className="canvas"
          ref="canvas"
          width={this.state.size}
          height={this.state.size}
          onMouseDown = {this.onMouseOver}
          onMouseOver = {e => {
            if(this.props.isMouseDown){
              return this.onMouseOver()
            }
          }}
        />
      </div>
    );
  }
}

export default GameField;
