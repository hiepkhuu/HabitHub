import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams} from 'react-router-dom';

import { updateSingleTask, loadAllTasks, deleteSingleTask } from '../../store/tasks';
import DeleteTaskModal from './DeleteTaskModal'


const UpdateTaskModal = ({setReloadTaskPage,taskId}) => {

  console.log('THISTHISHTIS', taskId)
  const dispatch = useDispatch();
  // const history = useHistory();

  // const [showMenu, setShowMenu] = useState(false);

  // const openMenu = () => {
  //   if (showMenu) return;
  //   setShowMenu(true);
  // };


  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)

  const targetedTask = allTasks.tasks.filter(task=> task.id === taskId)

  // console.log('######', targetedTask[0])
  // console.log('######', allTasks.tasks)

  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState(targetedTask[0].task_name || '')
  const [taskDetail, setTaskDetail] = useState(targetedTask[0].task_detail || '')
  const [taskReason, setTaskReason] = useState(targetedTask[0].task_reason || '')
  const [targetNum, setTargetNum] = useState(targetedTask[0].target_num || '')
  const [taskPoints, setTaskPoints] = useState(targetedTask[0].task_points || '')
  const [colorHue, setColorHue] = useState(targetedTask[0].color_hue || '#ffffff')
  // const [showDeleteMsg, setShowDeleteMsg] = useState(false);

  useEffect(async () => {
    // if(!showMenu) return;
    if (!showModal) return;
    // if (!showDeleteMsg) return;


    await dispatch(loadAllTasks(sessionUser.id))
  }, [showModal]) //[showDeleteMsg]

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  const cancel = (e) =>{
    e.preventDefault()
    setShowModal(false)
  }


  // const deleteTask = async (e) =>{
  //   e.preventDefault()

  //   await dispatch(deleteSingleTask(taskId))
  //   setReloadTaskPage(true)
  // }


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
      id:taskId
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
    <span text='Edit Comment' className='far fa-edit' onClick={() => { setShowModal(true) }} ></span>

    <div >

      {showModal && (
        <Modal>
          <div className='edit-form-container'>
            {/* <button onClick={openMenu}>Delete Task</button> */}
            {/* {showMenu && (
              <div>
                <p>Are you sure you want to delete this task?</p>
                <button onClick={deleteTask}>yes</button>
                <button >no</button>
              </div>
            )} */}

            <span className='far fa-window-close' onClick={cancel}></span>

            {/* <button onClick={deleteSingleTask}>Delete Task</button> */}
            <div className='update-header'>
              <h3>Update Habit</h3>
              <DeleteTaskModal setReloadTaskPage={setReloadTaskPage} setShowModal={setShowModal} taskId={taskId} taskName={targetedTask[0].task_name}/>
            </div>
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
                <div className='update-delete-save'>
                 <button onClick={submitTask} >Save Habit</button>

                </div>

            </form>

          </div>
        </Modal>
      )}
    </div>

  </>

  )
}

export default UpdateTaskModal
