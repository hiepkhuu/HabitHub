import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import GreetingPage from '../GreetingPage';

const ProtectedRoute = props => {
  const sessionUser = useSelector(state => state.session.user)

  let session;
  if(sessionUser) {
    session = (
      <GreetingPage />
    )
  } else {
    session = (
      <LoginForm />
    )
  }



  return (
    <Route {...props}>
      {(sessionUser)? props.children  : <Redirect to='/login' />}

      {session}
    </Route>
  )
};


export default ProtectedRoute;
