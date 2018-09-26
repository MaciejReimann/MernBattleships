import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import {colorCanvas, circumscribeCanvas} from './drawingHelpers';

class GameField extends Component {
  constructor(props) {
    super(props)
    const { positionX, positionY, size } = this.props;
    this.state = {
      positionX: positionX,
      positionY: positionY,
      size: size,
      shipColor: "pink",
      mastColor: "white"
    }
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver = e => {
    const canvas = findDOMNode(this.refs["canvas"]);
    colorCanvas(canvas)(this.state.shipColor);
    circumscribeCanvas(canvas)(this.state.mastColor);
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
