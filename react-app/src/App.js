import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm/LoginForm';
import SignUpForm from './components/auth/SignupForm/SignUpForm';
import NavBar from './components/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import GreetingPage from './components/GreetingPage';
import TasksPage from './components/TasksPage';

function App() {
  const sessionUser = useSelector(state=> state.user)
  const [isLoaded, setisLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setisLoaded(true);
    })();
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }

  // let session;
  // if(sessionUser) {
  //   session = (
  //     <>
  //     <GreetingPage />

  //     </>
  //   )
  // } else {
  //   session = (
  //     <>
  //     <LoginForm />
  //     </>
  //   )
  // }

  return (
    <>
    {/* if BrowserRouter ends up inside Navlink or Navigation, it will thorugh an error */}
    <BrowserRouter>
      <NavBar isLoaded={isLoaded} />
      <Switch>
        <Route path={`/${sessionUser?.username}`} exact={true} >
          <GreetingPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <Route path={`/${sessionUser?.username}/task-log`} exact={true}>
          <TasksPage />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
