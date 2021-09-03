import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Select, {components} from 'react-select';

import { addNewTask, loadAllTasks,  } from '../../store/tasks'
import {loadSingleTask} from '../../store/singletask'
import { getAllColors} from '../../store/colors'
import CancelButton from './CancelButton';

const AddNewRewardModal = ({setReloadTaskPage}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)
  const colors = useSelector(state => state.colors.colors)//mappable
  const singleTask = useSelector(state => state.singleTask)

  const rewards = useSelector(state => state.rewards.rewards)
  // console.log('jjjjjjjj',colors)
  const [showModal, setShowModal] = useState(false);
  const [rewardName, setRewardName] = useState('')
  const [rewardDetail, setRewardDetail] = useState('')
  const [rewardReason, setRewardReason] = useState('')
  // const [targetNum, setTargetNum] = useState('')
  const [rewardPoints, setRewardPoints] = useState('')
  const [taskId, setTaskId] = useState('')
  // const [selectColor, setSelectColor] = useState('')
  // console.log('name', rewardName,'detail', rewardDetail, 'reason',rewardReason,'num', targetNum, 'pts', rewardPoints, 'id', taskId)

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
    await dispatch(loadAllTasks(sessionUser.id))
    await dispatch(loadSingleTask(taskId))
    // const closeMenu = () => {
    //   setShowModal(false)
    // }
    // document.addEventListener('click', closeMenu);

    // return () => document.removeEventListener('click', closeMenu)
  }, [showModal, taskId])


  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }



  const submitTask = async (e) => {
    e.preventDefault()

    const task = {
      user_id: sessionUser.id,
      task_id: taskId,
      reward_name: rewardName,
      reward_detail:rewardDetail ,
      reward_reason: rewardReason,
      reward_points: rewardPoints,

    }
    await dispatch(addNewTask(task))

    setRewardName('');
    setRewardDetail('');
    setRewardReason('');
    // setTargetNum('');
    setTaskId('');
    setRewardPoints('');

    setShowModal(false)
    setReloadTaskPage(true)
  }

  return (
    <>
      <div className='habit-add' onClick={() => { setShowModal(true) }} >
        <div className='button-circle' > +</div>

      </div>
      <div >

        {showModal && (
          <Modal>
            <div className='edit-form-container'>

              {/* <button onClick={cancel}>Cancel</button> */}
              <h2>New Reward</h2>
              <form className='add-task-form' onSubmit={submitTask} >
                 <div>
                    <div>NAME</div>
                      <input
                      type='text'
                      rows='1'
                      value={rewardName}
                      onChange={e=> setRewardName(e.target.value)}
                      />
                    <div className='section'>
                        <div>
                            <div>DETAIL</div>
                              <input
                              type='text'
                              rows='2'
                              value={rewardDetail}
                              onChange={e=> setRewardDetail(e.target.value)}
                              ></input>
                        </div>
                        <div>
                            <div>POINTS</div>
                              <input
                              type='number'
                              value={rewardPoints}
                              onChange={e=> setRewardPoints(e.target.value)}
                              />
                        </div>
                        {/* <div>
                            <div>TARGET WEEKLY</div>
                              <input
                              type='number'
                              value={targetNum}
                              onChange={e=> setTargetNum(e.target.value)}
                              />
                        </div> */}
                     </div>
                    <div className='section'>
                        {/* <div>
                            <div>POINTS</div>
                              <input
                              type='number'
                              value={rewardPoints}
                              onChange={e=> setRewardPoints(e.target.value)}
                              />
                        </div> */}
                        <div>
                            <div>TASK</div>
                            {/* <Select

                                // styles={customStyles}

                                // components={{ Option }}

                                onChange={e=> setTaskId(e.target.value)}
                                options={options}
                              /> */}
                              <select
                              onChange={e=>setTaskId(e.target.value)}
                              placeholder='select a task'

                              style={{backgroundColor:`${singleTask.color_hue}`}}
                              >

                                {rewards.map(item => (
                                  <option
                                    key={item.task_id}
                                    value={item.task_id}
                                    // color={item.menuColor}
                                    style={{backgroundColor:`${colorHex[item.color_id]}`}}
                                    // onClick={()=> setSelectColor(item.color_id)}
                                  >
                                    {/* {getColorHex(item.value)} */}
                                    {item.task}
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
                      <CancelButton setShowModal={setShowModal}/>
                    <button  onClick={submitTask} >Save</button>
                  </div>
              </form>

            </div>
          </Modal>
        )}
      </div>

    </>
  );
}

export default AddNewRewardModal;
