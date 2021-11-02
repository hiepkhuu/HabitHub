import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router';
import { logout } from '../../../store/session';

const LogoutButton = () => {
  const sessionUser = useSelector(state => state.user)
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
    return <Redirect to={'/'} />
  };



  // if (!sessionUser){
  //   return <Redirect to={'/'} />;
  // }

  return (<button onClick={onLogout}>Logout</button>);
};

export default LogoutButton;
