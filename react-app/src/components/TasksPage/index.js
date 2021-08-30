import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllTasks } from '../../store/tasks'
import './TaskPage.css'
import moment from 'moment'
import AddNewHabitModal from '../../context/AddNewTaskModal'
import UpdateTaskModal from '../../context/UpdateTaskModal'
// import ColorCircle from './ColorCircle'
// import {showModal} from '../../context/AddNewTask'

const TasksPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()
  // console.log('#############',sessionUser.id)
  // console.log('#########', allTasks.tasks)

  const [reloadTaskPage, setReloadTaskPage] = useState(false)
  const [color, setColor] = useState('')

  useEffect(async () => {
    await dispatch(loadAllTasks(sessionUser.id))
    setReloadTaskPage(false)

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
    <div className='task-log-board'>
      <div className='habit-header'>
        <h3>Habit List</h3>
        <div>
          <AddNewHabitModal setReloadTaskPage={setReloadTaskPage}/>
        </div>
      </div>
      <div className='task-log' id='task-log'>
          {/* <div className='task-label-bar'>
            <div className='task-name'>Name</div>
            <div className='task-detail'>Description</div>
            <div className='task-reason'>Motivating Reason</div>
            <div className='task-num'>Target</div>
            <div className='task-points'>Value</div>
            <div className='task-created'>Created</div>
            <div className='empty-div'></div>
          </div> */}
          {/* {grabTask()} */}
          {allTasks?.tasks?.map(task =>(
            <>


            <div className='task-card'  style={{boxShadow:`0px 0px 2px 1px ${task.color_hue}`}}>
                {/* style={{border:`2px solid ${task.color_hue}`}} */}
                <div className='task-name'>
                    <div className='task-name-header'>
                      {task.task_name}
                      <div id='color-circle'
                      style={{
                        backgroundColor: task.color_hue
                      }}
                      ></div>
                    </div>
                    <div className='edit-button'>
                      <UpdateTaskModal setReloadTaskPage={setReloadTaskPage} taskId={task.id} />
                    </div>
                </div>


                <div className='task-detail'>
                  <span>description: </span>{task.task_detail}
                </div>
                <div className='task-reason'>
                  <span>motivation: </span>{task.task_reason}
                </div>
                <div className='task-num'>
                  <span>target/week: </span>{task.target_num}
                </div>
                <div className='task-points'>
                  <span>value: </span>{task.task_points} pts
                </div>
                <div className='task-created'>
                <span>created: </span>{turnDateIntoReadable(task.created_at)}
                </div>

            </div>

            </>

          ))}
          {/* <div>
            <AddNewHabitModal setReloadTaskPage={setReloadTaskPage}/>

          </div> */}

      </div>
    </div>
  )
}

export default TasksPage
