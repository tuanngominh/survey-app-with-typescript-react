import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  reducer,
  undefined,
  applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)