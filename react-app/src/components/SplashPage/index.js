import React from 'react'

import { NavLink } from 'react-router-dom'
import './SplashPage.css'
// import './habithub-logo.png'

const SplashPage = () =>{
  return (
    <div className='splash-page'>
       <div className='signed-out-navbar'>
              <div  className='splash-button'>
                <NavLink   to='/' exact={true} activeClassName='active'>
                  <div className='' >
                      <p className=''></p>
                  </div>
                </NavLink>
              </div>
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
          <div className='splash-photo-container'>
            <h1>Build Golden Habits, Recieve Rewards, Unlock your Potential</h1>
            <h3>Focus on what truly matters with Habitify. Build the best version of yourself by mastering your habits.</h3>
            <button>Demo Login</button>
          </div>
    </div>
  )
}
export default SplashPage
