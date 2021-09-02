const GET_REWARDS = 'rewards/GET_REWARDS';

const UPDATE_REWARD = 'rewards/UPDATE_REWARD';
const DELETE_REWARD = 'rewards/DELETE_REWARD';
const CREATE_REWARD = 'rewards/CREATE_REWARD';

//Get all rewards for user
const getRewardsList = (userId) => ({
  type: GET_REWARDS,
  payload: userId
})


//Create single reward
const updateReward = (listId) => ({
  type: UPDATE_REWARD,
  payload: listId
})

//Update single reward
const createReward = (list) => ({
  type: CREATE_REWARD,
  payload: list
})

//Delete single reward
const deleteReward = (listId) => ({
  type: DELETE_REWARD,
  payload: listId
})

///////  THUNKS ///////
export const loadAllRewards = (userId) => async (dispatch) => {
  const res = await fetch(`/api/rewards/users/${userId}`)

  let data = await res.json();
  dispatch(getRewardsList(data))

}

export const addNewReward = (reward) => async (dispatch) => {
  const res = await fetch('/api/rewards/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      reward
    ),
  })

  if (res.ok){
    const newReward = await res.json()
    dispatch(createReward(newReward))
  }
}

export const deleteSingleReward = (rewardId) => async(dispatch) => {
  const res = await fetch(`/api/rewards/${rewardId}`,{
    method: 'DELETE',
  })
  if (res.ok){
    const reward = await res.json()

    dispatch(deleteReward(reward))
  }
}

export const updateSingleReward = (reward) => async(dispatch) => {
  const res = await fetch(`/api/rewards/${reward.id}`,  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reward)
  })
  if (res.ok){
    const reward = await res.json()

    dispatch(updateReward(reward))
  }
}

let initialState = {}
export default function reducer(state=initialState, action){

  switch (action.type) {
    case GET_REWARDS:
      return {...state,...action.payload}
    case CREATE_REWARD:
      return {...state,...action.payload}
    case DELETE_REWARD:
      return {...state,...action.payload}
    case UPDATE_REWARD:
      return {...state,...action.payload}
    default:
      return state
  }
}
