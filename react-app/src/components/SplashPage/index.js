import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect , useHistory} from 'react-router-dom'
import './SplashPage.css'
import { login } from '../../store/session';
// import './habithub-logo.png'
import Footer from '../Footer';

const SplashPage = () =>{
  const history=useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.user)
  const [errors, setErrors] = useState([])

  const onLogin = async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io'
    const password = 'password'
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    history.push('/greeting')
    return <Redirect to={'/greeting'} />
  };


  if (sessionUser) {
    return <Redirect to={'/greeting'} />;
  }
  return (
    <div className='splash-page'>
       <div className='signed-out-navbar'>

                <NavLink   to='/' exact={true} activeClassName='active'>
                  <div  className='splash-button'>
                    <div className='' >
                        <p className=''></p>
                    </div>
                  </div>
                </NavLink>
                {/* <div></div>
                <div></div> */}

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

            <div className='splash-photo'>
              <h1>Hit your Targets, Receive Rewards, Grow Your Garden</h1>
              <p>Focus on what truly matters with HabitHub. Build the best version of yourself by mastering your habits.</p>
                <div  >
                  {errors.map((error, ind) => (
                    <div className='error-message' key={ind}>{error}</div>
                  ))}
                </div>
              <form onSubmit={onLogin}>
              <button type='submit'>Demo Login</button>
              </form>
            </div>

            <div className='how-div'>
              <h1>How it Works</h1>
              <p>Habit building in its essential steps: choose a habit, actually remember to do it and track your development.</p>
              <div className='steps-container'>
                    <div className='steps'>
                      <div className='step-img1'></div>
                      <div className='step-header'>1. Set up your Habits</div>
                      <div className='step-detail'>String together a list of habits to create your daily routines and start your journey.</div>
                    </div>
                    <div className='steps'>
                      <div className='step-img2'></div>
                      <div className='step-header'>2. Get The Cue</div>
                      <div className='step-detail'>String together a list of habits to create your daily routines and start your journey.</div>
                    </div>
                    <div className='steps'>
                      <div className='step-img3'></div>
                      <div className='step-header'>3. Track Your Progress</div>
                      <div className='step-detail'>String together a list of habits to create your daily routines and start your journey.</div>
                    </div>

              </div>
            </div>
            {/* < Footer /> */}
          </div>



    </div>
  )
}
export default SplashPage
