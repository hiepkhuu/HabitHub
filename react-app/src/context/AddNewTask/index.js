import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { addNewTask } from '../../store/tasks'

const AddNewHabitModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)


  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('')
  const [taskDetail, setTaskDetail] = useState('')
  const [taskReason, setTaskReason] = useState('')
  const [targetNum, setTargetNum] = useState('')
  const [taskPoints, setTaskPoints] = useState('')
  const [colorHue, setColorHue] = useState('')

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
      color_id: colorHue,
      task_points: taskPoints,
    }
    await addNewTask(task)
  }

  return (
    <>
      <span text='Edit Comment' onClick={() => { setShowModal(true) }} >Add Habit</span>

      <div >

        {showModal && (
          <Modal>
            <div className='edit-form-container'>
              <button onClick={cancel}>Cancel</button>
              <h3>Add Habit!</h3>
              <form className='add-task-form'  >
                <div>What would you like to add to your life?</div>
                  <textarea
                  type='textarea'
                  rows='1'
                  />
                <div>Give a brief description of what you'll be doing.</div>
                  <textarea
                  type='textarea'
                  rows='2'
                  />
                <div>A quick motivating reason why.</div>
                  <textarea
                  type='textarea'
                  rows='2'
                  />
                <div>Target number of times per week.</div>
                  <input
                  type='number'
                  />
                <div>Value you want to give this task</div>
                  <input
                  type='number'
                  />
                <div>Color for this task</div>
                  <input
                  type='color'
                  />
                <button type='submit' >Save</button>
              </form>

            </div>
          </Modal>
        )}
      </div>

    </>
  );
}

export default AddNewHabitModal;
