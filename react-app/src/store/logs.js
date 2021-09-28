const GET_LOGS = 'logs/GET_LOG';
const GET_TRUE_LOGS = 'logs/GET_TRUE_LOGS'
const ADD_LOG = 'logs/ADD_LOGS'
const GET_WEEKLY_LOGS = 'logs/GET_WEEKLY_LOGS'

const getWeeklyLogs = (log) => ({
  type: GET_WEEKLY_LOGS,
  payload: log
})

const getLogs= (log) => ({
  type: GET_LOGS,
  payload: log
})

const getTrueLogs = (log) => ({
  type: GET_TRUE_LOGS,
  payload: log
})

const addALog = (log) => ({
  type: ADD_LOG,
  payload: log
})

//GET ALL COMPLETED/UNCOMPLETED LOGS FOR ONE TASK
 export const getAllLogs = (id) => async (dispatch) => {
  const res = await fetch(`/api/logs/${id}`)
  let data = await res.json();
  dispatch(getLogs(data))
}

//GET WEEKLY LOGS COMPLETED/UNCOMPLETED FOR ALL TASKS WITHIN THE WEEK
export const getAllWeeklyLogs = () => async (dispatch) => {
  const res = await fetch(`/api/logs/week`)
  let data = await res.json();
  dispatch(getWeeklyLogs(data))
}

//GET ONLY COMPLETED LOG BY CERTAIN USER
export const getAllCompletedLogs = (id) => async (dispatch) =>{
  const res = await fetch(`/api/logs/completed/${id}`)
  let data = await res.json();
  dispatch(getTrueLogs(data))
}

//post log route
export const addCompletedLog = (log) => async (dispatch) => {
  const res = await fetch('/api/logs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      log
    ),
  })

  if (res.ok){
    const data = await res.json()
    dispatch(addALog(data))
    return null;
  }else if (res.status < 500) {
    const data = await res.json();

    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


let initialState = {}
export default function reducer(state=initialState, action){
  switch (action.type) {
    case GET_LOGS:
      return {all_logs: action.payload}
    case GET_TRUE_LOGS:
      return {true_logs: action.payload}
    case ADD_LOG:
      return {added_log: action.payload}
    case GET_WEEKLY_LOGS:
      return {weekly_logs: action.payload}
    default:
      return state
  }
}
