import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams} from 'react-router-dom';
import { loadSingleTask } from '../../store/singletask';

import { updateSingleTask, loadAllTasks, deleteSingleTask } from '../../store/tasks';
import DeleteTaskModal from './DeleteTaskModal'
import CancelButton from '../AddNewTaskModal/CancelButton';

const UpdateTaskModal = ({setReloadTaskPage, reloadTaskPage, taskId}) => {

  console.log('THISTHISHTIS', taskId)
  const dispatch = useDispatch();


  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)

  // const singleTask = allTasks.tasks.filter(task=> task.id === taskId)
  const singleTask = useSelector(state=> state.singleTask)
  console.log('######', singleTask)
  // console.log('######', allTasks.tasks)

  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState(singleTask.task_name)
  const [taskDetail, setTaskDetail] = useState(singleTask.task_detail)
  const [taskReason, setTaskReason] = useState(singleTask.task_reason)
  const [targetNum, setTargetNum] = useState(singleTask.target_num)
  const [taskPoints, setTaskPoints] = useState(singleTask.task_points)
  const [colorId, setColorId] = useState(singleTask.color_id)
  // const [showDeleteMsg, setShowDeleteMsg] = useState(false);


  const colorsList =  [
    { value: '', label: 'Change Color', menuColor: 'darkgray' },
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
  const colorName ={
    1:'Salmon Pink' ,
    2: 'Melon',
    3:'Pale Orange' ,
    4: 'Pastel Green',
    5:'Magic Mint' ,
    6: 'Periwinkle' ,
    7: 'Cotton Blue',
  }
  useEffect(async () => {
    // if(!showMenu) return;
    if (!showModal) return;
    // if (!showDeleteMsg) return;

    await dispatch(loadSingleTask(taskId))
    await dispatch(loadAllTasks(sessionUser.id))
  }, [showModal, taskId]) //[showDeleteMsg]

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
      color_id: colorId,
      task_points: taskPoints,
      id:taskId
    }
    await dispatch(updateSingleTask(task))

    setTaskName('');
    setTaskDetail('');
    setTaskReason('');
    setTargetNum('');
    setColorId('');
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
          <DeleteTaskModal setReloadTaskPage={setReloadTaskPage} setShowModal={setShowModal} taskId={taskId} taskName={singleTask.task_name} />
            {/* <button onClick={cancel}>Cancel</button> */}
            <h2>Upadate Habit</h2>
            <form className='add-task-form' onSubmit={submitTask} >
              <div>

                  <div>NAME</div>
                    <input
                    type='text'
                    rows='1'
                    value={taskName}
                    onChange={e=> setTaskName(e.target.value)}
                    />
                  <div className='section'>
                      <div>
                          <div>GOAL</div>
                            <input
                            type='text'
                            rows='2'
                            value={taskDetail}
                            onChange={e=> setTaskDetail(e.target.value)}
                            ></input>
                      </div>
                      <div>
                          <div>TARGET WEEKLY</div>
                            <input
                            type='number'
                            value={targetNum}
                            onChange={e=> setTargetNum(e.target.value)}
                            />
                      </div>
                  </div>
                  <div className='section'>
                      <div>
                          <div>VALUE</div>
                            <input
                            type='number'
                            value={taskPoints}
                            onChange={e=> setTaskPoints(e.target.value)}
                            />
                      </div>
                      <div>
                          <div>COLOR</div>
                          {/* <Select

                              // styles={customStyles}

                              // components={{ Option }}

                              onChange={e=> setColorId(e.target.value)}
                              options={options}
                            /> */}
                            <select
                            onChange={e=>setColorId(e.target.value)}

                            style={{backgroundColor:`${colorHex[colorId]}`}}
                            // label={colorName[colorId]}
                            >

                              {colorsList.map(item => (
                                <option
                                  key={item.value}
                                  value={item.value}

                                  style={{backgroundColor:`${item.menuColor}`}}

                                >
                                  {item.label}
                                </option>
                              ))}
                            </select>
                      </div>
                    </div>
                    <div>MOTIVATING REMINDER</div>
                    <input
                    type='text'
                    rows='2'
                    value={taskReason}
                    onChange={e=> setTaskReason(e.target.value)}
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

  )
}

export default UpdateTaskModal
