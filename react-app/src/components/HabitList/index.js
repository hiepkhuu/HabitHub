import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { loadSingleTask } from '../../store/singletask';
import { getAllColors } from '../../store/colors'
import { addCompletedLog, getAllWeeklyLogs} from '../../store/logs'

import AddNewHabitModal from '../../context/AddNewTaskModal'
import UpdateTaskModal from '../../context/UpdateTaskModal'

import moment from 'moment'
import './HabitListCard.css'


const HabitListCard = ({habitId, setShowHabitInfo, reloadTaskPage, setReloadTaskPage}) => {
  const sessionUser = useSelector(state => state.session.user)
  const singleTask = useSelector(state => state.singleTask)
  const weeklyLogs = useSelector(state => state.logs.weekly_logs)
  const dispatch = useDispatch()

  // const [reloadTaskPage, setReloadTaskPage] = useState(false)
  const [color, setColor] = useState('')
  const [errors, setErrors] = useState([])


  useEffect(() => {
    dispatch(loadSingleTask(habitId))
    dispatch(getAllColors())
    dispatch(getAllWeeklyLogs())

  }, [dispatch])

  function convert(input) {

    return moment(input, 'HH:mm:ss').format('h:mm A');
    // .format('h:mm:ss A')
  }

  function turnDateIntoReadable(date) {
    const newDate = date.split(' ').slice(0, 4).join(' ') + ' ' + convert(date.split(' ').slice(4, 5))
    return newDate
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

  const logHabit = async (e) => {
    e.preventDefault()

    const log = {
      task_id: habitId,
      user_id: sessionUser.id,
      completed: true
    }

    const data = await dispatch(addCompletedLog(log))
    // console.log('did it pass')
    if (data) {
      setErrors(data);
    } else {
    }

    reloadTaskPage ? setReloadTaskPage(false): setReloadTaskPage(true)

  }



  const isItCompleted = (taskId, targetNum, color_hue) => {
    const timesCompleted = loggedHowManyTimes(taskId)

    if (timesCompleted < targetNum){
      return (
      <div className='log-form'>
        {/* <div>
          {errors.map((error, ind) => (
            <div className='error-message' key={ind}>{error}</div>
          ))}
        </div> */}
        <form onSubmit={logHabit} >
          <button className='habit-logit' style={{backgroundColor:`${dimmedColors[singleTask.color_hue]}`}} type='submit'>Log it!</button>
        </form>
      </div>
      )
    } else {
      return (
        <button className='habit-logit-complete'  type='submit'>Completed!</button>
      )
    }
  }


  return (
    <>

        <div className='task-name'>
                    <div className='task-name-header' >
                      {singleTask.task_name}

                    </div>
                    <div className='edit-button'>
                      <UpdateTaskModal setReloadTaskPage={setReloadTaskPage} habitId={habitId} />
                    </div>
                  </div>
          <div className='task-info-box'>
            <div className='task-card-container'
                  >
                  <div className='task-card'    >

                    <div className='task-detail'>
                      <span>GOAL: </span>{singleTask.task_detail}
                    </div>
                    <div className='task-reason'>
                      <span>MOTIVATION: </span>{singleTask.task_reason}
                    </div>
                    <div className='task-num'>
                      <span className='fas fa-bullseye' style={{ color: `${singleTask.color_hue}` }}> </span> {singleTask.target_num}/week

                    </div>
                    <div className='task-points'>
                      <span className="fas fa-heart " style={{ color: `${singleTask.color_hue}` }}> </span> {singleTask.task_points} pts
                    </div>
                    <div className='task-created'>
                      <span className='fas fa-calendar-day' style={{ color: `${singleTask.color_hue}` }}> </span> {turnDateIntoReadable(`${singleTask.created_at}`)}
                    </div>
                  </div>
           </div>
        <div className='task-streak-container'>
            <div>
              CURRENT STREAK:
              <p> Coming Soon</p>
            </div>
            <div>
                THIS WEEK: {loggedHowManyTimes(singleTask.id)} TIMES
                {/* <form onSubmit={logHabit} >
                  <button className='habit-logit' style={{backgroundColor:`${dimmedColors[singleTask.color_hue]}`}} type='submit'>Log it!</button>
                </form> */}
                {isItCompleted(singleTask.id, singleTask.target_num, singleTask.color_hue)}
            </div>
        </div>
        </div>
     </>
  )
}

export default HabitListCard
