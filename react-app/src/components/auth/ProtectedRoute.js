import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import GreetingPage from '../GreetingPage';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)

  let session;
  if(user) {
    session = (
      <>
      <GreetingPage />

      </>
    )
  } else {
    session = (
      <>
      <LoginForm />
      </>
    )
  }



  return (
    <Route {...props}>
      {/* {(user)? props.children  : <Redirect to='/login' />} */}
      {(user)? props.children  : <Redirect to='/' />}
      {session}
    </Route>
  )
};


export default ProtectedRoute;
