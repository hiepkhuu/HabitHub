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

  } else {
    session = (
      <SplashPage />
    )

  }



  return (
    <Route {...props}>


      {session}
    </Route>
  )
};


export default ProtectedRoute;
