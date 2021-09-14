import React from 'react'


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
  <button className='cancel-button' onClick={cancel} >Cancel</button>
)
}


export default CancelButton
