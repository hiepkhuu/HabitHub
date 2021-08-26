import React, {useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {loadAllTasks} from '../../store/tasks'

const TasksPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  console.log('#############',sessionUser.id)
  useEffect(() => {
    dispatch(loadAllTasks(sessionUser.id))
  }, [])
  return (
    <h1>TaskPage</h1>
  )
}

export default TasksPage
