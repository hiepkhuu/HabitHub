import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { loadAllTasks } from '../../store/tasks'
import { loadSingleTask } from '../../store/singletask';
import { getAllColors } from '../../store/colors'

import moment from 'moment'
import AddNewHabitModal from '../../context/AddNewTaskModal'
import UpdateTaskModal from '../../context/UpdateTaskModal'
import './HabitListCard.css'


const HabitListCard = ({habitId, setShowHabitInfo, setReloadTaskPage}) => {
  const sessionUser = useSelector(state => state.session.user)
  const singleTask = useSelector(state => state.singleTask)

  const dispatch = useDispatch()

  // const [reloadTaskPage, setReloadTaskPage] = useState(false)
  const [color, setColor] = useState('')


  useEffect(async () => {
    await dispatch(loadSingleTask(habitId))
    await dispatch(getAllColors())
    // setReloadTaskPage(false)

  }, [])

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
                  // style={{ border: `4px solid ${singleTask.color_hue}` }}
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
                      <span className="fas fa-heart " style={{ color: `${singleTask.color_hue}` }}></span> {singleTask.task_points} pts
                    </div>
                    <div className='task-created'>
                      <span className='fas fa-calendar-day' style={{ color: `${singleTask.color_hue}` }}> </span>
                        {turnDateIntoReadable(`${singleTask.created_at}`)}
                    </div>
                  </div>
           </div>
        <div className='task-streak-container'>
            <div>
              CURRENT STREAK
            </div>
            <div>
                THIS WEEK: {`${singleTask.target_num}`} TIMES
            </div>
        </div>
        </div>
     </>
  )
}

export default HabitListCard
