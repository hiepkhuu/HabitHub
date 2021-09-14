import React from 'react'
import './AddNewTaskModal.css'

const CancelButton = ({setShowModal, setTaskName, setTaskReason,setTaskDetail, setTaskPoints, setErrors, setColorId, setTargetNum}) =>{
  const cancel = () =>{
    setShowModal(false)
    setTaskName('')
    setTargetNum('');
    setTaskDetail('');
    setTaskReason('');
    setTaskPoints('');
    setErrors([]);
    setColorId('')

  }
return (
  <button className='cancel-button' onClick={cancel} >Discard</button>
)
}


export default CancelButton
