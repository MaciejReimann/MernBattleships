import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class GameField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: {},
      size: 50,

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
        console.log(this.props)
  }

  render() {
    return (
      <div className="gamefield" style={{width: "50px", height: "50px"}}>
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
