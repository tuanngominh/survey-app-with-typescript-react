import * as React from 'react'
import { Component } from 'react'

class Instruction extends Component<any, any> {
  render() {
    return (
      <div>
        <div>{this.props.question}</div>
      </div>
    );
  }
}

export default Instruction