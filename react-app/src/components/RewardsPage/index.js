import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import './RewardsPage.css'

import Footer from '../Footer';
import { loadAllRewards } from '../../store/rewards'
import { getAllColors } from '../../store/colors'
import { getAllCompletedLogs } from '../../store/logs'
// import AddNewHabitModal from '../../context/AddNewTaskModal'
import AddNewRewardModal from '../../context/AddNewRewardModal'
import UpdateRewardModal from '../../context/UpdateRewardModal'


const RewardsPage = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const allRewards = useSelector(state => state.rewards)
  const allTrueLogs = useSelector(state => state.logs.true_logs)


  //  const rewardLogs = allTrueLogs.filter(log => log.task_id == 1)
  //   console.log('thisthis', rewardLogs)
    // console.log('sfasdfds', allTrueLogs)
  const [reloadTaskPage, setReloadTaskPage] = useState(false)
  const [rewardId, setRewardId] = useState('')

  useEffect(() => {
    dispatch(loadAllRewards(sessionUser.id))
    dispatch(getAllColors())
    dispatch(getAllCompletedLogs(sessionUser.id))
    setReloadTaskPage(false)

  },[reloadTaskPage])

  const colorHex ={
    1:'#FF9AA2' ,
    2: '#FFB7B2',
    3:'#FFDAC1' ,
    4: '#E2F0CB',
    5:' #B5EAD7' ,
    6: ' #C7CEEA' ,
    7: '#bae1ff',
    8: '#F0E68C'
  }



  const getDaysElapsed = (start) =>{
    let startDate = new Date(start)
    let currentDate = new Date()

    // console.log('stare', startDate, 'current', currentDate)

    const diffInTime =  currentDate.getTime() - startDate.getTime()
    return (diffInTime / (1000 * 3600 * 24)).toFixed(0)
  }


  const getPercentage = (task_id, task_points, reward_points) =>{
  //  await dispatch(getAllCompletedLogs(reward_id))
    const rewardLogs = allTrueLogs?.completed.filter(log => log.task_id == task_id) // filter to get logs with certain task's id
    const count = rewardLogs?.length
    const progressPoints = count * task_points
    // console.log('progress',progressPoints,'reward_points', reward_points)

    const percentage = progressPoints/reward_points * 100
    // console.log(percentage.toFixed(0))
    return `${percentage.toFixed(0)}%`
  }


  let completedRewards = []
  let incompletedRewards = []
  allRewards?.rewards?.map(reward => {
    let percentage = getPercentage(reward.task_id, reward.task_points, reward.reward_points)
    // console.log(percentage.slice(0,percentage.length-1))
    if ( percentage.slice(0,percentage.length-1) >= 100){
      completedRewards.push(reward)
      console.log(getPercentage)
      // make the percentage === 100%
      // or dwrite it as 100% on the complete side
    } else {
      incompletedRewards.push(reward)
    }
  })
  console.log('!!!!!!!!' ,completedRewards, 'XXXXXXX',incompletedRewards)


  let board;

  if (completedRewards.length >=1){
    board = (
              <div className='rewards-card-container'>
                {completedRewards.map(reward => (
                <>
                  <div className='reward-card'>
                    <div>
                      <div className='reward-icon-container'>

                          <div className='fas fa-medal' style={{color:`${colorHex[reward.color_id]}`}}></div>
                          <span> {getDaysElapsed(`${reward.created_at}`)} days ago</span>
                      </div>
                      <div className='reward-info'>
                        <div className='reward-header-container'>
                            <span className='reward-header'>{reward.reward_name}</span>
                            <div onClick={() => setRewardId(reward.id)}className='edit-button'>
                              <UpdateRewardModal setReloadTaskPage={setReloadTaskPage} rewardId={rewardId} rewardColor={reward.color_id} />

                            </div>
                        </div>
                        <div>
                        <span className='fas fa-th-list' style={{color: colorHex[`${reward.color_id}`]}}></span>
                        <span> {reward.task}</span>
                        </div>
                        <div>
                        <span className='fas fa-clock' style={{color:`${colorHex[reward.color_id]}`}}>  </span>
                        <span> {reward.reward_detail}</span>
                        </div>
                        <div>
                          <span className='fas fa-sticky-note' style={{color:`${colorHex[reward.color_id]}`}}> </span>
                          <span> {reward.reward_reason}</span>
                        </div>

                      </div>
                    </div>

                    <div className='rewards-progress'>

                      <div style={{backgroundColor:`${colorHex[reward.color_id]}`, width: getPercentage(reward.task_id, reward.task_points, reward.reward_points)}}>
                      <p>Congratulations!</p>
                      {/* <p>{getPercentage(reward.task_id, reward.task_points, reward.reward_points)}</p> */}
                      </div>
                    </div>

                  </div>
                </>
              ))}

            </div>
    )
  } else {
    board = (
      <div className='rewards-card-container'>
        Log your habits to unlock rewards!
      </div>
    )
  }
  return (
    <>

    {/* <div className='rewards-page-container'> */}
      {/* <div className='rewards-log-container' > */}
        <div className='rewards-left-container'>
            <div className='rewards-header'>

                <h2>In Progress</h2>

                <div className='add-habit-button'>
                    {/* <AddNewHabitModal setReloadTaskPage={setReloadTaskPage} reloadTaskPage={reloadTaskPage}/> */}
                    <AddNewRewardModal setReloadTaskPage={setReloadTaskPage} reloadTaskPage={reloadTaskPage}/>
                </div>
            </div>

            <div className='rewards-card-container'>
            {incompletedRewards.map(reward => (
              <>
                <div className='reward-card'>
                  <div>
                    <div className='reward-icon-container'>
                        {/* <div className='fas fa-medal' style={{color:`${colorHex[reward.color_id]}`}}></div> */}
                        <div className='fas fa-medal' style={{color:`${colorHex[reward.color_id]}`}}></div>
                        <span> {getDaysElapsed(`${reward.created_at}`)} days ago</span>
                    </div>
                    <div className='reward-info'>
                      <div className='reward-header-container'>
                          <span className='reward-header'>{reward.reward_name}</span>
                          <div onClick={() => setRewardId(reward.id)}className='edit-button'>
                            <UpdateRewardModal setReloadTaskPage={setReloadTaskPage} rewardId={rewardId} rewardColor={reward.color_id} />
                          {/* <UpdateTaskModal setReloadTaskPage={setReloadTaskPage} habitId={habitId} /> */}
                          </div>
                      </div>
                      <div>
                      <span className='fas fa-th-list' style={{color: colorHex[`${reward.color_id}`]}}></span>
                      <span> {reward.task}</span>
                      </div>
                      <div>
                      <span className='fas fa-clock' style={{color:`${colorHex[reward.color_id]}`}}>  </span>
                      <span> {reward.reward_detail}</span>
                      </div>
                      <div>
                        <span className='fas fa-sticky-note' style={{color:`${colorHex[reward.color_id]}`}}> </span>
                        <span> {reward.reward_reason}</span>
                      </div>

                    </div>
                  </div>

                  <div className='rewards-progress'>

                    <div style={{backgroundColor:`${colorHex[reward.color_id]}`, width: getPercentage(reward.task_id, reward.task_points, reward.reward_points)}}>
                    <p>{getPercentage(reward.task_id, reward.task_points, reward.reward_points)}</p>
                    </div>
                  </div>

                </div>
              </>
            ))}

       </div>
     </div>
     <div className='rewards-right-container'>
            <div className='rewards-header'>
                  <h2>Completed!</h2>
              </div>
              {board}

       </div>

       {/* </div> */}
       {/* < Footer /> */}
    {/* </div> */}
 </>
  )
}

export default RewardsPage;
