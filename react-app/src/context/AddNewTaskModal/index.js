import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { addNewTask } from '../../store/tasks'

const AddNewHabitModal = ({setReloadTaskPage}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)


  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('')
  const [taskDetail, setTaskDetail] = useState('')
  const [taskReason, setTaskReason] = useState('')
  const [targetNum, setTargetNum] = useState('')
  const [taskPoints, setTaskPoints] = useState('')
  const [colorHue, setColorHue] = useState('#ffffff')

  useEffect(() => {
    if (!showModal) return;
    // const closeMenu = () => {
    //   setShowModal(false)
    // }
    // document.addEventListener('click', closeMenu);

    // return () => document.removeEventListener('click', closeMenu)
  }, [showModal])


  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  const cancel = () =>{
    setShowModal(false)
  }

  const submitTask = async (e) => {
    e.preventDefault()

    const task = {
      user_id: sessionUser.id,
      task_name: taskName,
      task_detail:taskDetail ,
      task_reason: taskReason,
      target_num: targetNum,
      color_hue: colorHue,
      task_points: taskPoints,
    }
    await dispatch(addNewTask(task))

    setTaskName('');
    setTaskDetail('');
    setTaskReason('');
    setTargetNum('');
    setColorHue('#ffffff');
    setTaskPoints('');

    setShowModal(false)
    setReloadTaskPage(true)
  }

  return (
    <>
      <button onClick={() => { setShowModal(true) }} >Add A Habit</button>

      <div >

        {showModal && (
          <Modal>
            <div className='edit-form-container'>
              <button onClick={cancel}>Cancel</button>
              <h3>Add A New Habit!</h3>
              <form className='add-task-form' onSubmit={submitTask} >
                 <div>
                    <div>What would you like to add to your life?</div>
                      <textarea
                      type='text'
                      rows='1'
                      value={taskName}
                      onChange={e=> setTaskName(e.target.value)}
                      />
                    <div>Give a brief description of what you'll be doing.</div>
                      <textarea
                      type='text'
                      rows='2'
                      value={taskDetail}
                      onChange={e=> setTaskDetail(e.target.value)}
                      ></textarea>
                    <div>A quick motivating reason why.</div>
                      <textarea
                      type='text'
                      rows='2'
                      value={taskReason}
                      onChange={e=> setTaskReason(e.target.value)}
                      ></textarea>
                  </div>
                  <div>
                    <div>Target number of times per week.</div>
                      <input
                      type='number'
                      value={targetNum}
                      onChange={e=> setTargetNum(e.target.value)}
                      />
                    <div>Value you want to give this task</div>
                      <input
                      type='number'
                      value={taskPoints}
                      onChange={e=> setTaskPoints(e.target.value)}
                      />
                    <div>Color for this task</div>
                      <input
                      type='color'
                      value={colorHue}
                      onChange={e=> setColorHue(e.target.value)}
                      />
                      {/* <div>{colorHue} look hrte</div> */}
                    <button  onClick={submitTask} >Save Habit</button>
                  </div>
              </form>

            </div>
          </Modal>
        )}
      </div>

    </>
  );
}

export default AddNewHabitModal;
