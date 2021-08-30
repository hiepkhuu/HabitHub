
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './ProfileButton/LogoutButton';
import ProfileButton from './ProfileButton';
import './NavBar.css'
import GreetingPage from '../GreetingPage';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user );

  let sessionLinks;
  if (sessionUser){
    sessionLinks = (
       <>
          <div className='nav-links'>
            <NavLink to={`/greeting`} exact={true} activeClassName='active'>
              <div className='home-logo'></div>
              <button>greeting</button>
            </NavLink>
          </div>
          <div className='nav-links'>
            <NavLink to={`/rewards`} exact={true} activeClassName='active'>
              <div className='home-logo'></div>
              <button>Rewards</button>
            </NavLink>
          </div>

          <div className='nav-links'>
            <ProfileButton />
          </div>
       </>
    )
// user home page goes here
  } else {
      sessionLinks = (
        <>
          <div className='entry'>
            <NavLink className='NavLink' to='/login' exact={true} activeClassName='active'>
              <div className='' >
                   <p className=''>Login</p>
              </div>
            </NavLink>
            <NavLink className='NavLink' to='/sign-up' exact={true} activeClassName='active'>
              <div className='entry logout' >
                  <p className='entry p'>Sign Up</p>
              </div>
            </NavLink>
          </div>
        </>
      );
  }


  return (
    <>
    <div className='navbar'>
        {isLoaded && sessionLinks}
    </div>
    <div className='rainbow-div'></div>

    </>
  );
}

export default Navigation;
