const initialState = {
  questions: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        questions: action.payload
      }
    default:
      return state
  }
}
export default rootReducer