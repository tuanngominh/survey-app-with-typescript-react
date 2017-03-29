import 'whatwg-fetch'

async function load(): Promise<any> {
  const response = await fetch('/quiz-sample-data.json')
  let result = await response.json()
  return result.questions
}

const fetchQuestions = () => {
  return (dispatch) => {
    load().then(questions => {
      const updateQuestions = questions.map(q => ({
        ...q,
        question: q.prompt
      }))
      dispatch({
        type: 'FETCH',
        payload: updateQuestions
      })
    })
  }
}

export default fetchQuestions