import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllTasks} from '../../store/tasks'
import { loadSingleTask } from '../../store/singletask'
import { getAllColors } from '../../store/colors'
import './DashboardPage.css'
import moment from 'moment'
import AddNewHabitModal from '../../context/AddNewTaskModal'
import UpdateTaskModal from '../../context/UpdateTaskModal'
import HabitListCard from '../HabitList'
import GreetingPage from '../GreetingPage'
// import ColorCircle from './ColorCircle'
// import {showModal} from '../../context/AddNewTask'

const DashboardPage = () => {
  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)
  // const singleTask = useSelector(state => state.singleTask)
  const dispatch = useDispatch()


  const [reloadTaskPage, setReloadTaskPage] = useState(false)
  const [color, setColor] = useState('')
  const [showHabitInfo, setShowHabitInfo] = useState(false)
  const [habitId, setHabitId] = useState('')

  useEffect(async () => {

    await dispatch(loadAllTasks(sessionUser.id))
    await dispatch(getAllColors())
    await dispatch(loadSingleTask(habitId))
    setReloadTaskPage(false)

    // if (!showHabitInfo) return;
    // setShowHabitInfo(false)

  }, [reloadTaskPage, habitId])

  function convert(input) {
    return moment(input, 'HH:mm:ss').format('h:mm A');
    // .format('h:mm:ss A')
  }

  function turnDateIntoReadable(date) {
    const newDate = date.split(' ').slice(0, 4).join(' ') + ' ' + convert(date.split(' ').slice(4, 5))
    return newDate
  }



  return (
    <>
        <div className='task-log-board'>
          <div className='habit-list-container'>
            <div className='habit-header'>
              <h3>Habit List</h3><button onClick={() => {  setShowHabitInfo(false) }} >show dashboard</button>
            </div>
            <div className='task-log' id='task-log'>
                    {allTasks?.tasks?.map(task => (
                      <>
                        <div onClick={()=> {setHabitId(task.id)}}>
                        <div className='task-card-container'
                            // onClick={() => { showHabitInfo? setShowHabitInfo(false): setShowHabitInfo(true) }}
                            onClick={() => {  setShowHabitInfo(true) }}
                            // onClick={() => {  setShowHabitInfo(false) }}
                            style={{ backgroundColor: `${task.color_hue}` }}

                            >
                          <div className='task-name'>
                            <div className='task-name-header'>
                              {task.task_name}

                            </div>
                            <div className='edit-button'>
                              <UpdateTaskModal reloadTaskPage={reloadTaskPage} setReloadTaskPage={setReloadTaskPage} taskId={task.id} />
                            </div>
                          </div>

                        </div>
                        </div>
                      </>

                    ))}
              </div>
            <div className='add-habit-button'>
              <AddNewHabitModal setReloadTaskPage={setReloadTaskPage} reloadTaskPage={reloadTaskPage}/>
            </div>
          </div>
        </div>
        <div className='right-dashboard'>
        {showHabitInfo ?
            <>
              <div></div>
              <HabitListCard habitId ={habitId} setShowHabitInfo={setShowHabitInfo}/>
            </>
            :
            <GreetingPage />

        }
        </div>
  </>
  )
}

export default DashboardPage
