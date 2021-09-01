import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllTasks } from '../../store/tasks'
import { getAllColors } from '../../store/colors'
import './DashboardPage.css'
import moment from 'moment'
import AddNewHabitModal from '../../context/AddNewTaskModal'
import UpdateTaskModal from '../../context/UpdateTaskModal'
// import HabitListCard from '../HabitList'
// import ColorCircle from './ColorCircle'
// import {showModal} from '../../context/AddNewTask'

const DashboardPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()
  // console.log('#############',sessionUser.id)
  // console.log('#########', allTasks.tasks)

  const [reloadTaskPage, setReloadTaskPage] = useState(false)
  const [color, setColor] = useState('')

  useEffect(async () => {
    await dispatch(loadAllTasks(sessionUser.id))
    await dispatch(getAllColors())
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



  return (
    <div className='task-log-board'>
      <div className='habit-list-container'>
        {/* <div className='grid'>
          <div className='square'></div>
        </div> */}

        <div className='habit-header'>
          <h3>Habit List</h3>

        </div>
        <div className='task-log' id='task-log'>
                {allTasks?.tasks?.map(task => (
                  <>

                    <div className='task-card-container' style={{ backgroundColor: `${task.color_hue}` }} >
                      <div className='task-name'>
                        <div className='task-name-header'>
                          {task.task_name}

                        </div>
                        <div className='edit-button'>
                          <UpdateTaskModal setReloadTaskPage={setReloadTaskPage} taskId={task.id} />
                        </div>
                      </div>
                      <div className='task-card'    >

                        <div className='task-detail'>
                          <span>GOAL: </span>{task.task_detail}
                        </div>
                        <div className='task-reason'>
                          <span>MOTIVATION: </span>{task.task_reason}
                        </div>
                        <div className='task-num'>
                          <span className='fas fa-bullseye' style={{ color: `${task.color_hue}` }}> </span> {task.target_num}/week

                        </div>
                        <div className='task-points'>
                          <span className="fas fa-heart " style={{ color: `${task.color_hue}` }}></span> {task.task_points} pts
                        </div>
                        <div className='task-created'>
                          <span className='fas fa-calendar-day' style={{ color: `${task.color_hue}` }}> </span> {turnDateIntoReadable(task.created_at)}
                        </div>

                      </div>
                    </div>

                  </>

                ))}
           </div>
        <div className='add-habit-button'>
          <AddNewHabitModal setReloadTaskPage={setReloadTaskPage} />
        </div>
      </div>



    </div>
  )
}

export default DashboardPage
