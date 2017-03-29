import * as React from 'react'
import { Component } from 'react'
import Quiz from './components/Quiz'
import './App.scss'
import {connect} from 'react-redux'
import fetchQuestions from './actions'

interface Props {
  questions: Array<any>;
  onFetch(): void;
}

class App extends Component<Props, any> {
  componentDidMount() {
    this.props.onFetch()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Quiz questions={this.props.questions} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      questions: state.questions
    }
  },
  (dispatch) => {
    return {
      onFetch: (uid, text) => {
        dispatch(fetchQuestions())
      }
    }
  }
)(App)