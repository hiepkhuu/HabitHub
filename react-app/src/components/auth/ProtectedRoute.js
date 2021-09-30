// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import LoginForm from './LoginForm/LoginForm';
// import GreetingPage from '../GreetingPage';
// import DashboardPage from '../DashboardPage';

// const ProtectedRoute = props => {
//   const sessionUser = useSelector(state => state.session.user)

//   let session;
//   if(sessionUser) {
//     // session = (
//     //   <DashboardPage />
//     // )
//     <Redirect to='/Dashboard' />
//   } else {
//     // session = (
//     //   <LoginForm />
//     // )
//     <Redirect to='./login' />
//   }



//   return (
//     <Route {...props}>
//       {(sessionUser)? props.children  : <Redirect to='/login' />}

//       {/* {session} */}
//     </Route>
//   )
// };


// export default ProtectedRoute;
