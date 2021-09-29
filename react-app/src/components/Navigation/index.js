
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './NavBar.css'


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

                <NavLink  className='nav-links link' activeClassName='active' to="/dashboard" exact={true} activeClassName='active'>
                  <button className='navigation-btn'>
                     <span>habit dashboard</span>
                  </button>
                </NavLink>

                <NavLink className='nav-links link' to="/rewards"  exact={true}>
                  <button className='navigation-btn'>
                    <span >Rewards</span>
                  </button>
                </NavLink>

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
