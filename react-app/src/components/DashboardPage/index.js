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
    if (data) {
      setErrors(data);
    } else {
    }

    reloadTaskPage ? setReloadTaskPage(false): setReloadTaskPage(true)

  }

  const loggedHowManyTimes = (taskId) => {
    const filteredLogsByTaskId = weeklyLogs?.logs?.filter( log => log.task_id === taskId)
    const trueLogs = filteredLogsByTaskId?.filter(log => log.completed === true)

    if (trueLogs) {
      return trueLogs.length
    } else {
      return 0
    }

  }

  const dimmedColors = {
    '#E2F0CB':'#d2dfbe',
    '#FF9AA2':'#e68c93',
    '#FFDAC1':'#e6c2ab',
    '#B5EAD7':'#a8d8c6',
    '#C7CEEA':'#bac0da',
    '#bae1ff':'#aed1ec',
    '#FFB7B2':'#e6a39f',
  }

  const isItCompleted = (taskId, targetNum, color_hue) => {
    const timesCompleted = loggedHowManyTimes(taskId)

    if (timesCompleted < targetNum){
      return (
        <div className='log-form'>
        <div  >
          {errors.map((error, ind) => (
            <div className='error-message' key={ind}>{error}</div>
          ))}
        </div>
        <form onSubmit={logHabit} >
          <button className='habit-incomplete' style={{backgroundColor:`${dimmedColors[color_hue]}`}} type='submit'>Log it</button>
        </form>
      </div>
      )
    } else {
      return (
        <button className='habit-complete' style={{backgroundColor:`${color_hue}`}} type='submit'>Completed!</button>
      )
    }
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
                                  <span className='habit-target'>{loggedHowManyTimes(task.id)}/{task.target_num} times</span>
                                </div>



                                {isItCompleted(task.id, task.target_num, task.color_hue)}
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
            <div className='info-board'>
              <div></div>
              <HabitListCard habitId ={habitId} setShowHabitInfo={setShowHabitInfo} setReloadTaskPage={setReloadTaskPage} reloadTaskPage={reloadTaskPage}/>
            </div>
            :
            <div className='greeting-dashboard'>
            <GreetingPage />
            </div>
        }
        </div>
        {/* < Footer /> */}
  </>
  )
}

export default DashboardPage
