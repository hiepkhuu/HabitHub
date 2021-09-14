import React from 'react'
import './UpdateRewardModal.css'

const CancelButton = ({setShowModal, setRewardDetail, setRewardName, setErrors,setRewardPoints,setTaskId, setRewardReason}) =>{
  const cancel = () =>{
    setShowModal(false)
    setRewardName('');
    setRewardDetail('');
    setRewardReason('');
    // setTargetNum('');
    setTaskId('');
    setRewardPoints('');
    setErrors([])
  }
return (
  <button className='cancel-buton' onClick={cancel} >Cancel</button>
)
}


export default CancelButton
