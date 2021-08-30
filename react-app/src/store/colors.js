const GET_COLORS = 'colors/GET_COLOR';

const getColors= (colors) => ({
  type: GET_COLORS,
  payload: colors
})

 export const getAllColors = () => async (dispatch) => {
  const res = await fetch(`/api/color/`)
  let data = await res.json();
  dispatch(getColors(data))
}

let initialState = {}
export default function reducer(state=initialState, action){
  switch (action.type) {
    case GET_COLORS:
      return {...state,...action.payload}
    default:
      return state
  }
}
