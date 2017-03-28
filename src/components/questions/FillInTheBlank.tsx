import * as React from 'react'
import { Component } from 'react'

interface Props {
  onSelect(id: number, value: string): void;
}

class FillInTheBlank extends Component<any, any> {
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
        <div><input value={this.state.value} onChange={this.handleChange} /></div>
      </div>
    );
  }
}

export default FillInTheBlank
