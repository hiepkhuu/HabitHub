import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { AddNewTask } from '../../store/tasks'

const AddNewHabitModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)


  const [showModal, setShowModal] = useState(false);
  // const [editedComment, setEditedComment] = useState('')
  // const [editedCommentId, setEditedCommentId] = useState('')

  useEffect(() => {
    if (!showModal) return;
    const closeMenu = () => {
      setShowModal(false)
    }
    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu)
  }, [showModal])


  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }


  return (
    <>
      <span text='Edit Comment' onClick={() => { setShowModal(true) }} >Add Habit</span>

      <div >

        {showModal && (
          <Modal>
            <div className='edit-form-container'>
              <h3>Add Habit!</h3>
              <form className='comment-edit-form'  >
                <textarea

                  type='textarea'
                  rows='4'

                />
                <button type='submit' >Save</button>



              </form>

            </div>
          </Modal>
        )}
      </div>

    </>
  );
}

export default AddNewHabitModal;
