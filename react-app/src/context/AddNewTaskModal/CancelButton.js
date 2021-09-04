import React from 'react'


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
  <button className='cancel-buton' onClick={cancel} >Cancel</button>
)
}


export default CancelButton
