import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Select, {components} from 'react-select';

import { addNewTask } from '../../store/tasks'
import { getAllColors} from '../../store/colors'
import CancelButton from './CancelButton';

const AddNewHabitModal = ({setReloadTaskPage}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)
  const colors = useSelector(state => state.colors.colors)//mappable
  // console.log('jjjjjjjj',colors)
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('')
  const [taskDetail, setTaskDetail] = useState('')
  const [taskReason, setTaskReason] = useState('')
  const [targetNum, setTargetNum] = useState('')
  const [taskPoints, setTaskPoints] = useState('')
  const [colorId, setColorId] = useState('')
  const [selectColor, setSelectColor] = useState('')
  const [errors, setErrors] = useState([])
  console.log('name', taskName,'detail', taskDetail, 'reason',taskReason,'num', targetNum, 'pts', taskPoints, 'id', colorId)

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
  // console.log('thisthisthisthisthisthis', selectColor)

  // const selectStyle = () =>{
  //   console.log(colorHex[colorId])
  // }

  // const Option = props => {
  //   return (
  //     <div style={{ backgroundColor: props.data.menuColor }}>
  //       <components.Option {...props} />
  //     </div>
  //   );
  // };

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     width:'400px',
  //     // borderBottom: '1px dotted pink',
  //     // color: state.isSelected ? 'rgb(255,255,255,0.1)' : 'rgb(255,255,255,0.1)',
  //     padding: 10,
  //   }),
  // }
  // const options = [
  //   { value: 1, label: 'Salmon Pink', menuColor: '#FF9AA2' },
  //   { value: 2, label: 'Melon' ,menuColor: '#FFB7B2'},
  //   { value: 3, label: 'Pale Orange' ,menuColor: '#FFDAC1'},
  //   { value: 4, label: 'Pale LightGreen' ,menuColor: '#E2F0CB'},
  //   { value: 5, label: 'Magin Mint',menuColor: ' #B5EAD7' },
  //   { value: 6, label: 'Periwinkle',menuColor: ' #C7CEEA' },
  //   { value: 7, label: 'Cotton Blue' ,menuColor: '#bae1ff'},

  // ]


  useEffect(async () => {
    if (!showModal) return;
    await dispatch(getAllColors())
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
    }
    const data = await dispatch(addNewTask(task))
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
      setReloadTaskPage(true)
    }

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
              <h2>New Habit</h2>
              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
              <form className='add-task-form' onSubmit={submitTask} >
                 <div>
                    <div>NAME</div>
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
                          
                              <select
                              onChange={e=>setColorId(e.target.value)}
                              placeholder='select a color'
                              required={true}
                              style={{backgroundColor:`${colorHex[colorId]}`}}
                              >

                                {colorsList.map(item => (
                                  <option
                                    key={item.value}
                                    value={item.value}
                                    // color={item.menuColor}
                                    style={{backgroundColor:`${item.menuColor}`}}

                                  >
                                    {/* {getColorHex(item.value)} */}
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
                      <CancelButton setShowModal={setShowModal}
                      setTaskName={setTaskName}
                      setTaskDetail={setTaskDetail}
                      setTaskReason={setTaskReason}
                      setTargetNum={setTargetNum}
                      setTaskPoints={setTaskPoints}
                      setErrors={setErrors}
                      setColorId={setColorId}
                      />
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

export default AddNewHabitModal;
