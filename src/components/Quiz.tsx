import * as React from 'react'
import { Component } from 'react'

import MultipleChoices from './questions/MultipleChoices'
import FillInTheBlank from './questions/FillInTheBlank'
import LongFormSA from './questions/LongFormSA'
import Instruction from './questions/Instruction'
import Finish from './Finish'
import StepZilla from 'react-stepzilla'
import '../../node_modules/react-stepzilla/src/css/main.css'

class Quiz extends Component<any, any> {
  constructor (props) {
    super(props)
    this.state = {
      answers: []
    }
  }

  handleSelect = (questionId, response) => {
    // console.log(questionId, answer)
    this.setState((prevState, props) => {
      const found = prevState.answers.find(answer => answer.id === questionId)
      if (found) {
        const answers = prevState.answers.slice(0)
        const updateAnswers = answers.map(answer => {
          if (answer.id === questionId) {
            answer.response = response
          }
          return answer
        })
        return {answers: updateAnswers}
      } else {
        return {
          answers: [...prevState.answers, {id: questionId, response: response}]
        }
      }
    })
  }

  renderQuestion = (question) => {
    switch(question.type) {
      case 'multiple_choice':
        return <MultipleChoices {...question} onSelect={this.handleSelect} />
      case 'fill_in_the_blank':
        return <FillInTheBlank {...question} onSelect={this.handleSelect} />
      case 'essay':
        return <LongFormSA {...question} onSelect={this.handleSelect} />
      case 'instruction':
        return <Instruction {...question} />
      default:
        return <div>Unknown question type</div>
    }
  }

  render() {
    let steps = this.props.questions.map(question => {
      return {
        name: 'Step ' + question.id,
        component: this.renderQuestion(question)
      }
    })
    steps.push({
      name: 'Finish',
      component: <Finish answers={this.state.answers} />
    })
    return (
      <div className='step-progress'>
        {(this.props.questions && this.props.questions.length) &&
          <StepZilla
            steps={steps}
             prevBtnOnLastStep={false} nextTextOnFinalActionStep="Finish"
          />
        }
      </div>
    );
  }
}

export default Quiz
