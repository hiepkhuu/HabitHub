import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Select, {components} from 'react-select';

import { addNewTask } from '../../store/tasks'
import { getAllColors} from '../../store/colors'

const AddNewHabitModal = ({setReloadTaskPage}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)
  const colors = useSelector(state => state.colors.colors)//mappable
  console.log('jjjjjjjj',colors)
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('')
  const [taskDetail, setTaskDetail] = useState('')
  const [taskReason, setTaskReason] = useState('')
  const [targetNum, setTargetNum] = useState('')
  const [taskPoints, setTaskPoints] = useState('')
  const [colorId, setColorId] = useState(1)

  const Option = props => {
    return (
      <div style={{ backgroundColor: props.data.menuColor }}>
        <components.Option {...props} />
      </div>
    );
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: '1px dotted pink',
      // color: state.isSelected ? 'rgb(255,255,255,0.1)' : 'rgb(255,255,255,0.1)',
      padding: 10,
    }),
  }
  const options = [
    { value: 1, label: 'Salmon Pink', menuColor: '#FF9AA2' },
    { value: 2, label: 'Melon' ,menuColor: '#FFB7B2'},
    { value: 3, label: 'Pale Orange' ,menuColor: '#FFDAC1'},
    { value: 4, label: 'Pale LightGreen' ,menuColor: '#E2F0CB'},
    { value: 5, label: 'Magin Mint',menuColor: ' #B5EAD7' },
    { value: 6, label: 'Periwinkle',menuColor: ' #C7CEEA' },
    { value: 7, label: 'Cotton Blue' ,menuColor: '#bae1ff'},

  ]

  // const customStyles = {
  //   menu: (provided, state) => ({
  //     ...provided,
  //     width: state.selectProps.width,
  //     borderBottom: '1px dotted pink',
  //     color: state.selectProps.menuColor,
  //     padding: 20,
  //   }),

  //   control: (_, { selectProps: { width }}) => ({
  //     width: width
  //   }),

  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';

  //     return { ...provided, opacity, transition };
  //   }
  // }


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
      color_hue: colorId,
      task_points: taskPoints,
    }
    await dispatch(addNewTask(task))

    setTaskName('');
    setTaskDetail('');
    setTaskReason('');
    setTargetNum('');
    setColorId(1);
    setTaskPoints('');

    setShowModal(false)
    setReloadTaskPage(true)
  }

  return (
    <>
      <div className='habit-add' onClick={() => { setShowModal(true) }} >
        <span className='fas fa-plus-circle' > </span>

      </div>
      <div >

        {showModal && (
          <Modal>
            <div className='edit-form-container'>
              <span text='Edit Comment' className='far fa-window-close' onClick={cancel} ></span>
              {/* <button onClick={cancel}>Cancel</button> */}
              <h2>Add A New Habit</h2>
              <form className='add-task-form' onSubmit={submitTask} >
                 <div>
                    <div>Name of habit</div>
                      <textarea
                      type='text'
                      rows='1'
                      value={taskName}
                      onChange={e=> setTaskName(e.target.value)}
                      />
                    <div>Give a brief description of what you'll be doing</div>
                      <textarea
                      type='text'
                      rows='2'
                      value={taskDetail}
                      onChange={e=> setTaskDetail(e.target.value)}
                      ></textarea>
                    <div>A quick motivating reason why</div>
                      <textarea
                      type='text'
                      rows='2'
                      value={taskReason}
                      onChange={e=> setTaskReason(e.target.value)}
                      ></textarea>
                  </div>
                  <div>
                    <div>Target number of times per week</div>
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
                    <Select

                                styles={customStyles}
                                width='200px'
                                components={{ Option }}


                                options={options}
                              />

                      {/* // options={options}
                      // value={colorId}
                      // onChange={e=> setColorId(e.target.value)}
                      // /> */}
                      {/* <div className='color-circle-container'>
                      {colors?.map(color=>(
                        <div className='color-circle' style={{backgroundColor:`${color.color_hue}`}}></div>
                      ))}
                       </div> */}
                      {/* <div>{colorId} look hrte</div> */}

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
