import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllTasks } from '../../store/tasks'
import './TaskPage.css'
import moment from 'moment'
import AddNewHabitModal from '../../context/AddNewTask'
// import {showModal} from '../../context/AddNewTask'

const TasksPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()
  // console.log('#############',sessionUser.id)
  // console.log('#########', allTasks.tasks)

  const [reloadTaskPage, setReloadTaskPage] = useState(false)

  useEffect(async () => {
    await dispatch(loadAllTasks(sessionUser.id))
  }, [reloadTaskPage])

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
      <div className='habit-log'>
          <div className='task-label-bar'>
            <div clasName='task-name'>Name</div>
            <div clasName='task-detail'>Description</div>
            <div clasName='task-reason'>Motivating Reason</div>
            <div clasName='task-num'>Target</div>
            <div clasName='task-points'>Value</div>
            <div clasName='task-created'>Created</div>
          </div>
          {/* {grabTask()} */}
          {allTasks?.tasks?.map(task =>(
            <div className='task-bar'>
              <div clasName='task-name'>
                <p>{task.task_name}</p>
              </div>
              <div clasName='task-detail'>
              <p>{task.task_detail}</p>
              </div>
              <div clasName='task-reason'>
                <p>{task.task_reason}</p>
              </div>
              <div clasName='task-num'>
              <p>{task.target_num}</p>
              </div>
              <div clasName='task-points'>
                <p>{task.task_points}</p>
              </div>
              <div clasName='task-created'>
                <p>{turnDateIntoReadable(task.created_at)}</p>
              </div>
            </div>

          ))}
          <button>
            <AddNewHabitModal setReloadTaskPage={setReloadTaskPage}/>

          </button>

      </div>
    </div>
  )
}

export default TasksPage
