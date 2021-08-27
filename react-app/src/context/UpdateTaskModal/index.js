import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams} from 'react-router-dom';

import { updateSingleTask, loadAllTasks } from '../../store/tasks';

const UpdateTaskModal = ({setReloadTaskPage}) => {
  const dispatch = useDispatch();
  // const history = useHistory();


  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)

  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState(allTasks.taskName || '')
  const [taskDetail, setTaskDetail] = useState(allTasks.task_detail || '')
  const [taskReason, setTaskReason] = useState(allTasks.task_reason || '')
  const [targetNum, setTargetNum] = useState(allTasks.target_num || '')
  const [taskPoints, setTaskPoints] = useState(allTasks.task_points || '')
  const [colorHue, setColorHue] = useState(allTasks.color_hue || '#ffffff')

  useEffect(async () => {
    if (!showModal) return;
    await dispatch(loadAllTasks(sessionUser.id))
  }, [])

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
    await dispatch(updateSingleTask(task))

    setTaskName('');
    setTaskDetail('');
    setTaskReason('');
    setTargetNum('');
    setColorHue('#ffffff');
    setTaskPoints('');

    setShowModal(false)
    setReloadTaskPage(true)
  }

  return(
    <>
    <span text='Edit Comment' onClick={() => { setShowModal(true) }} >Edit Habit</span>

    <div >

      {showModal && (
        <Modal>
          <div className='edit-form-container'>
            <button onClick={cancel}>Cancel</button>
            <h3>Add Habit!</h3>
            <form className='add-task-form' onSubmit={submitTask} >
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
              <button  onClick={submitTask} >Save</button>
            </form>

          </div>
        </Modal>
      )}
    </div>

  </>

  )
}

export default UpdateTaskModal
