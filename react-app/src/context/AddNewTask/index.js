import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, useParams} from 'react-router-dom';

import { AddNewTask } from '../../store/tasks'

const EditWatchListModal = ()=> {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)
  // const comments = useSelector(state => {
  //   return Object.values(state.comments)
  // })

  // const filteredComments = comments.filter(comment => comment.photoId === id)

  // const comment = useSelector(state => state.comments[id])

  const [showModal, setShowModal] = useState(false);
  // const [editedComment, setEditedComment] = useState('')
  // const [editedCommentId, setEditedCommentId] = useState('')

  useEffect(() => {
    if (!showModal) return;
    const closeMenu = () =>{
      setShowModal(false)
    }
    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu)
  }, [showModal])

  // useEffect(() => {
    // dispatch(editComment(id))
    // dispatch(getComments(id))
    // dispatch()
// }, [])//dispatch, id, sessionUser.id, editedComment

// if(!comments) return null;

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }



  // const handleEditSubmit = async (e) =>{
  //   e.preventDefault();
  //   const editData = {
  //     id: editedCommentId,
  //     comment: editedComment
  //   }
  //     // const editData = {
  //     //   comment: editedComment,
  //     //   userId: sessionUser.id,
  //     //   photoId: id,
  //     //   id: editedCommentId
  //     // }
  //       await dispatch(editComment(editData))

  //       history.push(`/photos/${id}`)

  //         setShowModal(false)
  //     }

  // const handleCancelEdit = async (e) =>{
  //   e.preventDefault()
  //   history.push(`/photos/${id}`)
  //   await setShowModal(false)
  // }

  return (
    <>
    <span text='Edit Comment' onClick={() => {setShowModal(true)}} >ㅁ</span>

      <div >

          {showModal && (
            <Modal>
              <div className='edit-form-container'>
                        <h3>Edit List!</h3>
                        <form className='comment-edit-form'  >
                          <textarea

                          type='textarea'
                          rows='4'

                          />
                          <button type='submit' >Save</button>

                          <button >Delete List</button>

                        </form>

                  </div>
            </Modal>
          )}
       </div>

    </>
  );
}

export default EditWatchListModal;
