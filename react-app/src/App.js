import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm/LoginForm';
import SignUpForm from './components/auth/SignupForm/SignUpForm';
import Navigation from './components/Navigation';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import GreetingPage from './components/GreetingPage';
import DashboardPage from './components/DashboardPage';
import RewardsPage from './components/RewardsPage';

import SplashPage from './components/SplashPage'
function App() {
  const sessionUser = useSelector(state => state.user)
  const [isLoaded, setisLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setisLoaded(true);
    })();
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }


  return (
    <>
      {/* if BrowserRouter ends up inside Navlink or Navigation, it will thorugh an error */}
      <BrowserRouter>
        <Switch>
           <Route path='/' exact={true}>
              <SplashPage />
            </Route>
            <Route path='/login' exact={true}>
              <LoginForm />
            </Route>
            <Route path='/sign-up' exact={true}>
              <SignUpForm />
            </Route>
        </Switch>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path={`/greeting`} exact={true} >
              {/* don't put stuff here or else it will show up twice */}
              <GreetingPage />
            </Route>
            <Route path={`/dashboard`} exact={true}>
              <DashboardPage />
            </Route>
            <Route path='/rewards' exact={true}>
              <RewardsPage />
            </Route>

          </Switch>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
