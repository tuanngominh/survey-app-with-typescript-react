import * as React from 'react'
import { Component } from 'react'

interface Props {
  question: string;
}

class Instruction extends Component<Props, any> {
  render() {
    return (
      <div>
        <div>{this.props.question}</div>
      </div>
    );
  }
}

export default Instruction