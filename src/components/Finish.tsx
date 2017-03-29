import * as React from 'react'
import { Component } from 'react'

interface Answer {
  id: number;
  response: string;
}

interface Props {
  answers: Array<Answer>
}

const Finish = (props: Props) => (
  <ul className="list-group">
    {props.answers.map(answer => <li key={answer.id} className="list-group-item">id: {answer.id}, answer: {answer.response}</li>)}
  </ul>
)

export default Finish