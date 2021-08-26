const GET_TASKS = 'tasks/GET_TASKS';
const UPDATE_TASK = 'tasks/UPDATE_TASK';
const DELETE_TASK = 'tasks/DELETE_TASK';
const CREATE_TASK = 'tasks/CREATE_TASK';

//Get all tasks for user
const getTasksList = (userId) => ({
  type: GET_TASKS,
  payload: userId
})

//Create single task
const updateTask = (listId) => ({
  type: UPDATE_TASK,
  payload: listId
})

//Update single task
const createTask = (list) => ({
  type: CREATE_TASK,
  payload: list
})

//Delete single task
const deleteTask = (listId) => ({
  type: DELETE_TASK,
  payload: listId
})

///////  THUNKS ///////
export const loadAllTasks = (userId) => async (dispatch) => {
  const res = await fetch(`/api/tasks/users/${userId}`)

  let data = await res.json();
  dispatch(getTasksList(data))

}

export const addNewTask = (task) => async (dispatch) => {
  const res = await fetch('/api/tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      task
    }),
  })

  if (response.ok){
    const newTask = await response.json()
    dispatch(createTask(newTask))
  }
}



let initialState = {}
export default function reducer(state=initialState, action){

  switch (action.type) {
    case GET_TASKS:
      return {...state,...action.payload}

    default:
      return state
  }
}
