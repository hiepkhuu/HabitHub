import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllTasks} from '../../store/tasks'
import { loadSingleTask } from '../../store/singletask'
import { getAllColors } from '../../store/colors'
import { addCompletedLog, getAllWeeklyLogs} from '../../store/logs'
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
  const weeklyLogs = useSelector(state => state.logs.weekly_logs)
  const dispatch = useDispatch()


  const [reloadTaskPage, setReloadTaskPage] = useState(false)
  const [color, setColor] = useState('')
  const [showHabitInfo, setShowHabitInfo] = useState(false)
  const [habitId, setHabitId] = useState('')
  const [errors, setErrors] = useState([])

  useEffect(() => {
    dispatch(loadAllTasks(sessionUser.id))
    dispatch(getAllColors())
    dispatch(loadSingleTask(habitId))
    dispatch(getAllWeeklyLogs())
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

  const logHabit = async (e) => {
    e.preventDefault()

    const log = {
      task_id: habitId,
      user_id: sessionUser.id,
      completed: true
    }

    const data = await dispatch(addCompletedLog(log))
    console.log('did it pass')
    if (data) {
      setErrors(data);
    } else {
    }
  }

  const loggedHowManyTimes = (taskId) => {
    const filteredLogsByTaskId = weeklyLogs?.logs?.filter( log => log.task_id === taskId)
    const trueLogs = filteredLogsByTaskId.filter(log => log.completed === true)
    // console.log('XXX',trueLogs)/
    return trueLogs.length
  }

  const isItCompleted = (taskId, targetNum) => {
    const timesCompleted = loggedHowManyTimes(taskId)

    if (timesCompleted < targetNum){
      return (
        <div className='log-form'>
        <div  >
          {errors.map((error, ind) => (
            <div className='error-message' key={ind}>{error}</div>
          ))}
        </div>
        <form onSubmit={logHabit}>
          <button type='submit'>Log it!</button>
        </form>
      </div>
      )
    } else {
      return (
        <div >Good Job! You're Done this Week!</div>
      )
    }
  }

  // let logForm;
  // if (isItCompleted){
  //   logForm = (
  //     <div className='log-form'>
  //       <div  >
  //         {errors.map((error, ind) => (
  //           <div className='error-message' key={ind}>{error}</div>
  //         ))}
  //       </div>
  //       <form onSubmit={logHabit}>
  //         <button type='submit'>Log it!</button>
  //       </form>
  //     </div>
  //   )

  // }



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
                                  <span className='habit-target'>{loggedHowManyTimes(task.id)}/{task.target_num} times</span>
                                </div>


                                {/* <div className='log-form'>
                                    <div  >
                                      {errors.map((error, ind) => (
                                        <div className='error-message' key={ind}>{error}</div>
                                      ))}
                                    </div>
                                    <form style={{visibility: isItCompleted(task.id, task.target_num)}}onSubmit={logHabit}>
                                      <button type='submit'>Log it!</button>
                                    </form>
                                </div> */}
                                {isItCompleted(task.id, task.target_num)}
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
