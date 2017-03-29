import * as React from 'react'
import { Component } from 'react'

interface MultipleChoicesItem_Props extends MultipleChoices_Props_Option{
  questionId: number;
  onSelect(id: number, value: string): void;
}

class MultipleChoicesItem extends Component<MultipleChoicesItem_Props, any> {
  handleSelect = () => {
    this.props.onSelect(this.props.questionId, this.props.id)
  }

  render() {
    return <div><input
      type="radio"
      onClick={this.handleSelect}
      value={this.props.id}
      name={this.props.name}
    />{this.props.value}</div>
  }
}

interface MultipleChoices_Props_Option {
  id: string;
  name: string;
  value: string;
}

interface MultipleChoices_Props {
  id: number;
  type: string;
  question: string;
  options: Array<MultipleChoices_Props_Option>;
  onSelect(id: number, value: string): void;
}

class MultipleChoices extends Component<MultipleChoices_Props, any> {
  render() {
    return (
      <div>
        <div>{this.props.question}</div>
        <div>{this.props.options.map(
          option =>
          <MultipleChoicesItem
            key={option.id}
            {...option}
            onSelect={this.props.onSelect}
            questionId={this.props.id}
            name={`${this.props.type}-${this.props.id}`}
          />
        )}
        </div>
      </div>
    );
  }
}

export default MultipleChoices
