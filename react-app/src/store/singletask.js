const GET_SINGLE_TASK = 'singleTask/GET_SINGLE_TASK'


//get single task
const getSingleTask = (taskId) => ({
  type: GET_SINGLE_TASK,
  payload: taskId
})


export const loadSingleTask = (taskId) => async (dispatch) => {
  const res = await fetch(`/api/tasks/${taskId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  let data = await res.json();
  dispatch(getSingleTask(data))
}



let initialState = {}
export default function reducer(state=initialState, action){
  switch (action.type) {
    case GET_SINGLE_TASK:
      return {...state,...action.payload}
    default:
      return state
  }
}
