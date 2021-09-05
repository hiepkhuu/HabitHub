import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { Modal } from '../Modal';
import { deleteSingleReward } from "../../store/rewards";

const DeleteTaskModal = ({setReloadTaskPage,rewardId, setShowModal, rewardName, reloadTaskPage}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if(!showMenu) return;

  }, [showMenu])

  const deleteReward= async (e) =>{
    e.preventDefault()

    await dispatch(deleteSingleReward(rewardId))
    reloadTaskPage? setReloadTaskPage(false): setReloadTaskPage(true)
    setShowMenu(false)
    setShowModal(false)
  }

  const cancel = (e) =>{
    e.preventDefault()
    setShowMenu(false)
  }

  return (
    <>
    <button className='delete-button'onClick={() => { setShowMenu (true) }}>Delete</button>
    <div>
      {showMenu && (
        <Modal>
             <div className='delete-task-form'>
                <p>Are you sure you want to delete <span>"{rewardName}"</span> ?</p>
                <button onClick={deleteReward}>yes</button>
                <button onClick={cancel}>no</button>
              </div>
        </Modal>
      )}

    </div>
    </>
  )
}

export default DeleteTaskModal
