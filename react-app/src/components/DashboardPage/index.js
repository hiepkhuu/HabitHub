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
  const singleTask = useSelector(state => state.singleTask)
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


  }, [reloadTaskPage, habitId])




  function convert(input) {


    return moment(input, 'HH:mm:ss').format('h:mm A');
    // .format('h:mm:ss A')
  }

  function turnDateIntoReadable(date) {
    const newDate = date.split(' ').slice(0, 4).join(' ') + ' ' + convert(date.split(' ').slice(4, 5))
    return newDate
  }

  const startOfWeek = moment().startOf('week').toDate();
const endOfWeek   = moment().endOf('week').toDate();

console.log('startOfWeek', startOfWeek);
console.log('endOfWeek', endOfWeek)

  const logHabit = () => {

  }




  return (
    <>
        <div className='left-dashboard'>
          <div className='habit-list-container'>
            <div className='habit-header'>
              <h3>THIS WEEK - Active Goals</h3><span onClick={() => {  setShowHabitInfo(false) }} >greeting ➜</span>
            </div>
            <div className='habit-log'>
                    {allTasks?.tasks?.map(task => (
                      <>
                        <div onClick={()=> {setHabitId(task.id)}}>
                        <div className='habit-card-container'
                            onClick={() => {  setShowHabitInfo(true) }}
                            style={{ backgroundColor: ` ${task.color_hue}`}}
                            >
                          <div className='habit-name'>
                            <div className='habit-name-header'>
                                <div className='habit-bar-header'>
                                  <span>{task.task_name.toUpperCase()}</span>
                                  <span className='habit-target'>0/{task.target_num} times</span>
                                </div>

                                {/* <div>
                                  {task.task_detail}
                                </div> */}
                                <div className='log-form'>
                                    {/* <div  >
                                      {errors.map((error, ind) => (
                                        <div className='error-message' key={ind}>{error}</div>
                                      ))}
                                    </div> */}
                                    <form onSubmit={logHabit}>
                                      <button  type='submit'>Log it!</button>
                                    </form>
                                </div>
                            </div>
                            <div className='edit-button'></div>
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
            <div className='info-board'>
              <div></div>
              <HabitListCard habitId ={habitId} setShowHabitInfo={setShowHabitInfo} setReloadTaskPage={setReloadTaskPage}/>
            </div>
            :
            <div className='greeting-dashboard'>
            <GreetingPage />
            </div>
        }
        </div>
  </>
  )
}

export default DashboardPage
