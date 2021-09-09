const GET_LOGS = 'logs/GET_LOG';
const GET_TRUE_LOGS = 'logs/GET_TRUE_LOGS'

const getLogs= (log) => ({
  type: GET_LOGS,
  payload: log
})

const getTrueLogs = (log) => ({
  type: GET_TRUE_LOGS,
  payload: log
})

 export const getTaskLog = (id) => async (dispatch) => {
  const res = await fetch(`/api/logs/${id}`)
  let data = await res.json();
  dispatch(getLogs(data))
}

export const getTrueLogs = (id) => async (dispatchEvent) =>{
  const res = await fetch(`/api/logs/completed/${id}`)
  let data = await res.json();
  dispatch(getTrueLogs(data))
}
let initialState = {}
export default function reducer(state=initialState, action){
  switch (action.type) {
    case GET_LOGS:
      return {all_logs: action.payload}
    case GET_TRUE_LOGS:
      return {true_logs: action.payload}
    default:
      return state
  }
}
