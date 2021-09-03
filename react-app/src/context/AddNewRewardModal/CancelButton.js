import React from 'react'


const CancelButton = ({setShowModal}) =>{
  const cancel = () =>{
    setShowModal(false)
  }
return (
  <button className='cancel-buton' onClick={cancel} >Cancel</button>
)
}


export default CancelButton
