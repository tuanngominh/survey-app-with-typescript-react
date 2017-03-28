import * as React from "react";
import {Component} from "react";

interface HelloProps {
  name: string;
}

class Hello extends Component<HelloProps, {}> {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export default Hello;