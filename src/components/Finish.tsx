import * as React from 'react'
import { Component } from 'react'

const Finish = (props) => (
  <ul className="list-group">
    {props.answers.map(answer => <li key={answer.id} className="list-group-item">id: {answer.id}, answer: {answer.response}</li>)}
  </ul>
)

export default Finish