
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './ProfileButton/LogoutButton';
import ProfileButton from './ProfileButton';
import './NavBar.css'
import GreetingPage from '../GreetingPage';

const NavigationLoggedOut = ({ isLoaded }) => {
  // const sessionUser = useSelector(state => state.session.user );


  return (
    <>
    <div id='signed-out'>
          <div className='signed-out-navbar'>
              <div className='entry'>
                <NavLink className='NavLink' to='/login' exact={true} activeClassName='active'>
                  <div className='entry logout' >
                      <p className=''>Login</p>
                  </div>
                </NavLink>
                <NavLink className='NavLink' to='/sign-up' exact={true} activeClassName='active'>
                  <div className='entry logout' >
                      <p className='entry p'>Sign Up</p>
                  </div>
                </NavLink>
              </div>
          </div>
        </div>

    </>
  );
}

export default NavigationLoggedOut;
