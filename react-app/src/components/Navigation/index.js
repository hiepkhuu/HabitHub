
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user );

  let sessionLinks;
  if (sessionUser){
    sessionLinks = (
       <>
          <div>
            <NavLink to='/' exact={true} activeClassName='active'>
              <div className='home-logo'></div>
              <h1>greeting</h1>
            </NavLink>
          </div>

          {/* <div>
                <ProfileButton user={sessionUser} />
          </div> */}
       </>
    )
// user home page goes here
  } else {
      sessionLinks = (
        <>
          {/* <NavLink  to='/' exact={true} activeClassName='active'>
              <div className='home-logo'></div>
          </NavLink> */}
          <div className='entry'>
            <NavLink className='NavLink' to='/login' exact={true} activeClassName='active'>
              <div className='' >

                   <p className=''>Login</p>
                   <p className=''>Login</p>
                   <p className=''>Login</p>
                   <p className=''>Login</p>
                   <p className=''>Login</p>
                   <p className=''>Login</p>

                   <p className=''>Login</p>

              </div>
            </NavLink>

            <NavLink className='NavLink' to='/sign-up' exact={true} activeClassName='active'>
              <div className='entry logout' >

                  <p className='entry p'>Sign Up</p>
                  <p className='entry p'>Sign Up</p>
                  <p className='entry p'>Sign Up</p>
                  <p className='entry p'>Sign Up</p>
                  <p className='entry p'>Sign Up</p>
                  <p className='entry p'>Sign Up</p>
                  <p className='entry p'>Sign Up</p>
                  <p className='entry p'>Sign Up</p>


              </div>
            </NavLink>
          </div>
        </>
      );
  }


  return (
    <div className='navbar'>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default NavBar;
