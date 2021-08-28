import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { Modal } from '../Modal';
import { deleteSingleTask } from "../../store/tasks";

const DeleteTaskModal = ({setReloadTaskPage,taskId, setShowModal, taskName}) => {
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

  const deleteTask = async (e) =>{
    e.preventDefault()

    await dispatch(deleteSingleTask(taskId))
    setReloadTaskPage(true)
    setShowMenu(false)
    setShowModal(false)
  }

  const cancel = (e) =>{
    e.preventDefault()
    setShowMenu(false)
  }

  return (
    <>
    <button onClick={() => { setShowMenu (true) }}>Delete Task</button>
    <div>
      {showMenu && (
        <Modal>
             <div>
                <p>Are you sure you want to delete {taskName}?</p>
                <button onClick={deleteTask}>yes</button>
                <button onClick={cancel}>no</button>
              </div>
        </Modal>
      )}

    </div>
    </>
  )
}

export default DeleteTaskModal