import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams} from 'react-router-dom';
import { loadSingleTask } from '../../store/singletask';

import { updateSingleTask, loadAllTasks, deleteSingleTask } from '../../store/tasks';
import DeleteTaskModal from './DeleteTaskModal'
import CancelButton from '../AddNewTaskModal/CancelButton';

const UpdateTaskModal = ({setReloadTaskPage, reloadTaskPage, habitId}) => {
  const sessionUser = useSelector(state => state.session.user)
  const allTasks = useSelector(state => state.tasks)
 const singleTask = useSelector(state=> state.singleTask)

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState()
  const [taskDetail, setTaskDetail] = useState()
  const [taskReason, setTaskReason] = useState()
  const [targetNum, setTargetNum] = useState()
  const [taskPoints, setTaskPoints] = useState()
  const [colorId, setColorId] = useState()
  const [reloadUpdate, setReloadUpdate] = useState(false)
  const [errors, setErrors] = useState([])
  useEffect(async () => {

    await dispatch(loadSingleTask(habitId))
    await dispatch(loadAllTasks(sessionUser.id))
    if (!showModal) return;

    setTaskName(singleTask.task_name)
    setTaskDetail(singleTask.task_detail)
    setTaskReason(singleTask.task_reason)
    setTargetNum(singleTask.target_num)
    setTaskPoints(singleTask.task_points)
    setColorId(singleTask.color_id)
    // const render = () => {
    //   dispatch(loadSingleTask(habitId))
    // }
    // document.addEventListener('click', render)
    // return () => document.removeEventListener('click',render  )


  }, [showModal, reloadUpdate, habitId]) //[showDeleteMsg]


  // const singleTask = allTasks?.tasks.filter(task=> task.id === taskId)
  // const singleTask = useSelector(state=> state.singleTask)
  // console.log('######', singleTask)
  // console.log('######', allTasks.tasks)






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


  // if (!sessionUser) {
  //   return (
  //     <Redirect to='/login' />
  //   )
  // }

  const cancel = (e) =>{
    e.preventDefault()
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
      color_id: colorId,
      task_points: taskPoints,
      id:singleTask.id
    }
    const data = await dispatch(updateSingleTask(task))

    if (data) {
      setErrors(data);
    } else {
      setTaskName('');
      setTaskDetail('');
      setTaskReason('');
      setTargetNum('');
      setColorId('');
      setTaskPoints('');

      setShowModal(false)
      reloadTaskPage ? setReloadTaskPage(false) : setReloadTaskPage(true)
    }

  }

  return(
    <>
    {/* <div onClick={() => { setReloadUpdate(true) }}> */}
    <p text='Edit Comment' style={{ backgroundColor: `${singleTask.color_hue}` }}
       className='update-dots' onClick={() => { setShowModal(true) }} ><span>...</span></p>
    {/* </div> */}
    <div >

      {showModal && (
        <Modal>
          <div className='edit-form-container'>
            <div className='form-button'>
               <DeleteTaskModal setReloadTaskPage={setReloadTaskPage} setShowModal={setShowModal} taskId={singleTask.id} taskName={singleTask.task_name} />
              
            </div>
            <h2>Update Habit</h2>
            <div >
              {errors.map((error, ind) => (
                <div className='error-message' key={ind}>{error}</div>
              ))}
            </div>
            <form className='add-task-form' onSubmit={submitTask} >
              <div>

                  <div className='label'>NAME *</div>
                    <input
                    type='text'
                    rows='1'
                    value={taskName}
                    onChange={e=> setTaskName(e.target.value)}
                    required={true}
                    />
                  <div className='section'>
                      <div>
                          <div>GOAL</div>
                            <input
                            type='text'
                            rows='2'
                            value={taskDetail}
                            onChange={e=> setTaskDetail(e.target.value)}
                            required={true}
                            ></input>
                      </div>
                      <div>
                          <div>TARGET WEEKLY *</div>
                            <input
                            type='number'
                            value={targetNum}
                            onChange={e=> setTargetNum(e.target.value)}
                            />
                      </div>
                  </div>
                  <div className='section pts color'>
                      <div>
                          <div>POINTS *</div>
                            <input
                            type='number'
                            value={taskPoints}
                            onChange={e=> setTaskPoints(e.target.value)}
                            />
                      </div>
                      <div>
                          <div>COLOR *</div>
                          {/* <Select

                              // styles={customStyles}

                              // components={{ Option }}

                              onChange={e=> setColorId(e.target.value)}
                              options={options}
                            /> */}
                            <select
                            onChange={e=>setColorId(e.target.value)}

                            style={{backgroundColor:`${colorHex[colorId]}`}}
                            required={true}
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
                    <div className='form-label'>MOTIVATING REMINDER</div>
                      <input
                      type='text'
                      rows='2'
                      value={taskReason}
                      onChange={e=> setTaskReason(e.target.value)}
                      ></input>
                  <div className='form-button'>
                    <CancelButton setShowModal={setShowModal}/>
                    <button  onClick={submitTask} >Save</button>
                  </div>
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
