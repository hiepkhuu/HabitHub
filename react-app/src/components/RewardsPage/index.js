import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import './RewardsPage.css'

import { loadAllRewards } from '../../store/rewards'
import { getAllColors } from '../../store/colors'


const RewardsPage = () => {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const allRewards = useSelector(state => state.rewards)
  useEffect(async() => {
    await dispatch(loadAllRewards(sessionUser.id))
    await dispatch(getAllColors())

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

  return (
    <>

    <div className='rewards-log-container'>
      <div>
          <h3>In Progress</h3>
      </div>
      <div className='rewards-card-container'>
      {allRewards?.rewards?.map(reward => (
        <>
          <div className='reward-card'>
            <div>
              <div className='fas fa-medal' style={{color:`${colorHex[reward.color_id]}`}}></div>
              <div className='reward-info'>
                <span className='reward-header'>{reward.reward_name}</span>

              </div>
            </div>

                <span> Motivation: {reward.reward_reason}</span>
                <span></span>

            <div className='rewards-progress'><span>{reward.reward_points} pts</span></div>

          </div>
        </>
      ))}
     </div>

     <div>
          <h3>Completed!</h3>
      </div>
      <div className='rewards-card-container'>
      {allRewards?.rewards?.map(reward => (
        <>
         <div className='reward-card'>
            <div>
              <div className='fas fa-medal' style={{color:`${colorHex[reward.color_id]}`}}></div>
              <div className='reward-info'>
                <span className='reward-header'>{reward.reward_name}</span>

              </div>
            </div>

                <span> Motivation: {reward.reward_reason}</span>
                <span></span>

            <div className='rewards-progress'><span>{reward.reward_points} pts</span></div>

          </div>
        </>
      ))}
     </div>



    </div>
    </>
  )
}

export default RewardsPage;
