import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import GreetingPage from '../GreetingPage';
import DashboardPage from '../DashboardPage';
import SplashPage from '../SplashPage';

const ProtectedRoute = props => {
  const sessionUser = useSelector(state => state.session.user)

  let session;
  if(sessionUser) {
    session = (
      <DashboardPage />
    )
    // <Redirect to='/dashboard' />
  } else {
    session = (
      <SplashPage />
    )
    // <Redirect to='./login' />
  }



  return (
    <Route {...props}>
      {/* {(sessionUser)? props.children  : <Redirect to='/login' />} */}

      {session}
    </Route>
  )
};


export default ProtectedRoute;
