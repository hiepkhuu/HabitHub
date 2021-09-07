
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
       <div id='signed-in'>
          <div className='navbar'>
              <div className='nav-links profile'>
                <ProfileButton />
              </div>
              <div className='nav-links'>
                <NavLink  className='nav-links btn' to={`/dashboard`} exact={true} activeClassName='active'>
                  <div  id="dashboard-btn" className='home-logo'>
                  <span>habit dashboard</span>
                  </div>
                </NavLink>
              </div>
              {/* <div className='nav-links'>
                <NavLink to={`/greeting`} exact={true} activeClassName='active'>
                  <div className='home-logo'></div>
                  <button>greeting</button>
                </NavLink>
              </div> */}
              <div className='nav-links'>
                <NavLink className='nav-links btn' to={`/rewards`} exact={true} activeClassName='active'>
                  <div id="rewards-btn" className='home-logo'>
                  <span >Rewards</span>
                  </div>
                </NavLink>
              </div>
          </div>
       </div>

       </>
    )
// user home page goes here
  } else {
      sessionLinks = (
        <>
        {/* <div id='signed-out'>
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
        </div> */}
        </>
      );
  }


  return (
    <>

        {isLoaded && sessionLinks}

    {/* <div className='rainbow-div'></div> */}


    </>
  );
}

export default Navigation;
