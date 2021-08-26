import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllTasks } from '../../store/tasks'
import './TaskPage.css'
import moment from 'moment'
import AddNewHabitModal from '../../context/AddNewTask'

const TasksPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()
  // console.log('#############',sessionUser.id)
  // console.log('#########', allTasks.tasks)

  useEffect(async () => {
    await dispatch(loadAllTasks(sessionUser.id))
  }, [])

  function convert(input) {
    return moment(input, 'HH:mm:ss').format('h:mm A');
    // .format('h:mm:ss A')
  }

  function turnDateIntoReadable(date) {
    const newDate = date.split(' ').slice(0, 4).join(' ') + ' ' + convert(date.split(' ').slice(4, 5))
    return newDate
  }

  // const grabTask = () => {
  //   let taskList = []
  //   for (const task in allTasks) {

  //     taskList.push(
  //       <div className='task-bar'>
  //         <p> {allTasks[task].task_name}</p>
  //         <p> {allTasks[task].task_detail}</p>
  //         <p> {allTasks[task].task_reason}</p>
  //         <p> {allTasks[task].target_num}</p>
  //         <p> {allTasks[task].task_points}</p>
  //         <p> {turnDateIntoReadable(allTasks[task].created_at)} </p>
  //       </div>

  //     )
  //   }
  //   return taskList
  // }

  return (
    <div>
      <h3>Habit List</h3>
      <div className='task-label-bar'>
        <div>Name</div>
        <div>Description</div>
        <div>Motivating Reason</div>
        <div>Target</div>
        <div>Value</div>
        <div>Created</div>
      </div>
      {/* {grabTask()} */}
      {allTasks?.tasks?.map(task =>(
        <div className='task-bar'>
          <p>{task.task_name}</p>
          <p>{task.task_detail}</p>
          <p>{task.task_reason}</p>
          <p>{task.target_num}</p>
          <p>{task.task_points}</p>
          <p>{turnDateIntoReadable(task.created_at)}</p>
        </div>
      ))}
      <button>
        <AddNewHabitModal />

      </button>
    </div>
  )
}

export default TasksPage
