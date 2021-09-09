const GET_LOGS = 'logs/GET_LOG';

const getLogs= (log) => ({
  type: GET_LOGS,
  payload: log
})

 export const getTaskLog = (id) => async (dispatch) => {
  const res = await fetch(`/api/logs/${id}`)
  let data = await res.json();
  dispatch(getLogs(data))
}

let initialState = {}
export default function reducer(state=initialState, action){
  switch (action.type) {
    case GET_LOGS:
      return {...state,...action.payload}
    default:
      return state
  }
}
