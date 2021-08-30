const GET_QUOTE = 'quotes/GET_QUOTE';

const getQuote = (quote) => ({
  type: GET_QUOTE,
  payload: quote
})

 export const getSingleQuote = () => async (dispatch) => {
  const res = await fetch('/api/quotes/')
  let data = await res.json();
  dispatch(getQuote(data))
}

let initialState = {}
export default function reducer(state=initialState, action){
  switch (action.type) {
    case GET_QUOTE:
      return {...state,...action.payload}
    default:
      return state
  }
}
