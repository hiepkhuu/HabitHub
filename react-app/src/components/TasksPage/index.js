import React, {useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {loadAllTasks} from '../../store/tasks'

const TasksPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()
  // console.log('#############',sessionUser.id)
  // console.log('#########', allTasks)
  useEffect(async () => {
   await dispatch(loadAllTasks(sessionUser.id))
  }, [])

  const grabTask = () => {
    let taskList = []
    for (const task in allTasks){

      taskList.push(
        <div className='task-bar'>
          <p> {allTasks[task].task_name}</p>
          <p> {allTasks[task].task_detail}</p>
          <p> {allTasks[task].task_reason}</p>
          <p> {allTasks[task].target_num}</p>
          <p> {allTasks[task].task_points}</p>
          <p> {allTasks[task].created_at}</p>
        </div>

      )
    }
    return taskList
  }

  return (
    <div>
      <h1>TaskPage</h1>
      {grabTask()}
    </div>
  )
}

export default TasksPage
