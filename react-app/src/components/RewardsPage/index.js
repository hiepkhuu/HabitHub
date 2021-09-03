import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import './RewardsPage.css'

import { loadAllRewards } from '../../store/rewards'
import { getAllColors } from '../../store/colors'
import AddNewHabitModal from '../../context/AddNewTaskModal'
import AddNewRewardModal from '../../context/AddNewRewardModal'


const RewardsPage = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const allRewards = useSelector(state => state.rewards)

  const [reloadTaskPage, setReloadTaskPage] = useState(false)


  useEffect(async() => {
    await dispatch(loadAllRewards(sessionUser.id))
    await dispatch(getAllColors())
    setReloadTaskPage(false)

  },[])

  const colorHex ={
    1:'#FF9AA2' ,
    2: '#FFB7B2',
    3:'#FFDAC1' ,
    4: '#E2F0CB',
    5:' #B5EAD7' ,
    6: ' #C7CEEA' ,
    7: '#bae1ff',
  }


  const getDaysElapsed = (start) =>{
    let startDate = new Date(start)
    let currentDate = new Date()

    console.log('stare', startDate, 'current', currentDate)

    const diffInTime =  currentDate.getTime() - startDate.getTime()
    return (diffInTime / (1000 * 3600 * 24)).toFixed(0)
  }

  return (
    <>

    <div className='rewards-log-container'>
        <div className='rewards-left-container'>
            <div className='rewards-header'>
                <h2>In Progress</h2>
            </div>

            <div className='rewards-card-container'>
            {allRewards?.rewards?.map(reward => (
              <>
                <div className='reward-card'>
                  <div>
                    <div>
                        <div className='fas fa-medal' style={{color:`${colorHex[reward.color_id]}`}}></div>

                    </div>
                    <div className='reward-info'>
                      <span className='reward-header'>{reward.reward_name}</span>
                      <span>{reward.task}</span>
                      <span>Details: {reward.reward_detail}</span>
                      <span>Motivation: {reward.reward_reason}</span>




                    </div>
                  </div>

                  <div className='rewards-progress'>
                    <p>{reward.reward_points} pts</p>

                  </div>

                </div>
              </>
            ))}
            <div className='add-habit-button'>
                    {/* <AddNewHabitModal setReloadTaskPage={setReloadTaskPage} reloadTaskPage={reloadTaskPage}/> */}
                    <AddNewRewardModal setReloadTaskPage={setReloadTaskPage} reloadTaskPage={reloadTaskPage}/>
            </div>
       </div>
     </div>
     <div className='rewards-right-container'>
            <div>
                  <h2>Completed!</h2>
              </div>
              <div className='rewards-card-container'>
              {allRewards?.rewards?.map(reward => (
                <>
                <div className='reward-card'>
                  <div>
                    <div className='fas fa-medal' style={{color:`${colorHex[reward.color_id]}`}}></div>
                    <div className='reward-info'>
                      <span className='reward-header'>{reward.reward_name}</span>
                      <span></span> {reward.reward_detail}

                    </div>
                  </div>

                      <span> </span> {reward.reward_reason}

                      <span>{getDaysElapsed(`${reward.created_at}`)} days</span>

                  <div className='rewards-progress'><span>{reward.reward_points} pts</span></div>

                </div>
              </>
              ))}
            </div>

       </div>

    </div>
    </>
  )
}

export default RewardsPage;
