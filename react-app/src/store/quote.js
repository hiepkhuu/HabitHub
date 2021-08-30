const GET_QUOTE = 'quotes/GET_QUOTE';

const getQuote = (quote) => ({
  type: GET_QUOTE,
  payload: quote
})

const getSingleQuote = () => {
  const res = fetch('/api/quotes/')
  let data = await res.json();
  dispatch(getQuote(data))
}


let initialState = {}
export default function reducer(state=initialState, action){

  switch (action.type) {
    case GET_QUOTES:
      return {...state,...action.payload}
    default:
      return state
  }
}
