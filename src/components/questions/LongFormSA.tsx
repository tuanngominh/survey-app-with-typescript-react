import * as React from 'react'
import { Component } from 'react'

interface Props {
  id: number;
  question: string;
  onSelect(id: number, value: string): void;
}

interface State {
  value: string;
}

class LongFormSA extends Component<Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState((prevState, props) => ({
      value
    }))
    this.props.onSelect(this.props.id, value)
  }

  render() {
    return (
      <div>
        <div>{this.props.question}</div>
        <div>
        <textarea rows={10} cols={30} value={this.state.value} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default LongFormSA
