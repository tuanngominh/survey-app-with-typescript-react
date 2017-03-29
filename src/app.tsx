import * as React from 'react'
import { Component } from 'react'
import 'whatwg-fetch'
import Quiz from './components/Quiz'
import './App.scss'

async function load(): Promise<any> {
  const response = await fetch('/quiz-sample-data.json')
  let result = await response.json()
  return result.questions
}

interface State {
  questions: Array<any>;
}

class App extends Component<any, State> {
  constructor (props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    load().then(questions => {
      questions.map(q => ({
        ...q,
        question: q.prompt
      }))
      this.setState((prevState, props) => ({
        questions: questions
      }))
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Quiz questions={this.state.questions} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
