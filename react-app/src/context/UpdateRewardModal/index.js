import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Select, {components} from 'react-select';
import './UpdateRewardModal.css'


import { loadAllRewards } from '../../store/rewards';
import { loadAllTasks } from '../../store/tasks';
import { loadSingleTask } from '../../store/singletask';
import { getAllColors} from '../../store/colors'
import CancelButton from './CancelButton';
import {updateSingleReward } from '../../store/rewards';
import DeleteTaskModal from './DeleteRewardModal';
const UpdateRewardModal = ({setReloadTaskPage, reloadTaskPage, rewardId, rewardColor}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)
  const colors = useSelector(state => state.colors.colors)//mappable
  let singleTask = useSelector(state => state.singleTask)
  // singleTask = {id: '', task_name: 'Choose a Task', color_hue:'#FFFFFF'}
  const allTasks = useSelector(state => state.tasks)


  const rewards = useSelector(state => state.rewards.rewards)

  const targetedReward = rewards.filter(reward => reward.id === rewardId)

  // const targetedTask = allTasks.filter(task => task.id === targetedReward[0].task_id)
  console.log(targetedReward,'herherehehehehe')
  // console.log('jjjjjjjj',targetedTask)
  const [showModal, setShowModal] = useState(false);
  const [rewardName, setRewardName] = useState('')
  const [rewardDetail, setRewardDetail] = useState('')
  const [rewardReason, setRewardReason] = useState('')
  const [rewardPoints, setRewardPoints] = useState('')
  const [colorId, setColorId] = useState('')
  const [taskId, setTaskId] = useState('')
  const [errors, setErrors] = useState([])
  // const [selectColor, setSelectColor] = useState('')
  // console.log('name', rewardName,'detail', rewardDetail, 'reason',rewardReason, 'pts', rewardPoints, 'taskid', taskId)

  const colorsList =  [
    { value: '', label: 'Choose here', menuColor: 'darkgray' },
    { value: 1, label: 'Salmon Pink', menuColor: '#FF9AA2' },
    { value: 2, label: 'Melon' ,menuColor: '#FFB7B2'},
    { value: 3, label: 'Pale Orange' ,menuColor: '#FFDAC1'},
    { value: 4, label: 'Pastel Green' ,menuColor: '#E2F0CB'},
    { value: 5, label: 'Magic Mint',menuColor: ' #B5EAD7' },
    { value: 6, label: 'Periwinkle',menuColor: ' #C7CEEA' },
    { value: 7, label: 'Cotton Blue' ,menuColor: '#bae1ff'},

  ]


  const colorHex ={
    1:'#FF9AA2' ,
    2: '#FFB7B2',
    3:'#FFDAC1' ,
    4: '#E2F0CB',
    5:' #B5EAD7' ,
    6: ' #C7CEEA' ,
    7: '#bae1ff',
  }



  useEffect(async () => {
    if (!showModal) return;
    await dispatch(getAllColors())
    await dispatch(loadAllRewards(sessionUser.id))
    await dispatch(loadAllTasks(sessionUser.id))
    await setRewardName(targetedReward[0].reward_name || '')
    await setRewardDetail(targetedReward[0].reward_detail || '')
    await setRewardReason(targetedReward[0].reward_reason || '')
    await setRewardPoints(targetedReward[0].reward_points || '')
    await setTaskId(targetedReward[0].task_id)
    await setColorId(targetedReward[0].color_id)


  }, [showModal, rewardId])


  // if (!sessionUser) {
  //   return (
  //     <Redirect to='/login' />
  //   )
  // }



  const submitReward = async (e) => {
    e.preventDefault()

    const reward = {
      id: rewardId,
      user_id: sessionUser.id,
      task_id: taskId,
      reward_name: rewardName,
      reward_detail:rewardDetail ,
      reward_reason: rewardReason,
      reward_points: rewardPoints,

    }

    const data = await dispatch(updateSingleReward(reward))
    if (data) {
      setErrors(data);
    } else{
      setRewardName('');
      setRewardDetail('');
      setRewardReason('');
      // setTargetNum('');
      setTaskId('');
      setRewardPoints('');

      setShowModal(false)
      reloadTaskPage? setReloadTaskPage(false): setReloadTaskPage(true)
    }


  }

  return (
    <>
     <p text='Edit Comment' style={{ backgroundColor: colorHex[`${rewardColor}`] }}
       className='update-reward-dots' onClick={() => { setShowModal(true) }} ><span>...</span></p>
      <div >

        {showModal && (
          <Modal>



            <div className='edit-form-container'>
                <div className='delete-button'>
                  <DeleteTaskModal setReloadTaskPage={setReloadTaskPage} reloadTaskPage={reloadTaskPage} setShowModal={setShowModal} rewardId={rewardId} rewardName={targetedReward[0].reward_name} />
                </div>
              <h2>Update Reward</h2>
              <div >
                {errors.map((error, ind) => (
                  <div className='error-message' key={ind}>{error}</div>
                ))}
              </div>
              <form className='add-task-form' onSubmit={submitReward} >
                 <div>
                    <div>NAME *</div>
                      <input
                      type='text'
                      rows='1'
                      placeholder='Alexander Steak House Dinner'
                      value={rewardName}
                      onChange={e=> setRewardName(e.target.value)}
                      required={true}
                      />
                    <div className='section'>
                        <div>
                            <div>DETAIL</div>
                              <input
                              type='text'
                              rows='2'
                              placeholder='on the weekend'
                              value={rewardDetail}
                              onChange={e=> setRewardDetail(e.target.value)}
                              ></input>
                        </div>
                        <div>
                            <div>POINTS *</div>
                              <input
                              type='number'
                              placeholder='66'
                              value={rewardPoints}
                              onChange={e=> setRewardPoints(e.target.value)}
                              />
                        </div>

                     </div>
                    <div className='section'>

                        <div>
                            <div>TASK *</div>

                              <select
                              onChange={e=>setTaskId(e.target.value)}
                              select='select a task'

                              // style={{backgroundColor:colorHex[`${colorId}`]}}
                              >
                                {/* {targetedReward[0].task} */}

                                {allTasks?.tasks?.map(item => (
                                  <option
                                    key={item.id}
                                    value={item.id}

                                    style={{backgroundColor:`${item.color_hue}`}}

                                  >

                                    {item.task_name}
                                  </option>
                                ))}
                              </select>
                        </div>
                      </div>
                      <div>MOTIVATING REMINDER</div>
                      <input
                      type='text'
                      rows='2'
                      value={rewardReason}
                      onChange={e=> setRewardReason(e.target.value)}
                      ></input>
                      <CancelButton setShowModal={setShowModal} setRewardDetail={setRewardDetail} setRewardName={setRewardName} setRewardPoints={setRewardPoints} setTaskId={setTaskId} setRewardReason={setRewardReason} setErrors={setErrors}/>
                    <button  onClick={submitReward} >Save</button>
                  </div>
              </form>

            </div>
          </Modal>
        )}
      </div>

    </>
  );
}

export default UpdateRewardModal;
