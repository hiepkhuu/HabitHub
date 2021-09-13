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

            <div>
              <h1>Hit your Targets, Receive Rewards, Grow Your Garden</h1>
              <h3>Focus on what truly matters with HabitHub. Build the best version of yourself by mastering your habits.</h3>
                <div  >
                  {errors.map((error, ind) => (
                    <div className='error-message' key={ind}>{error}</div>
                  ))}
                </div>
              <form onSubmit={onLogin}>
              <button type='submit'>Demo Login</button>
              </form>
            </div>
            <div className='splash-photo'></div>

          </div>
          < Footer />


    </div>
  )
}
export default SplashPage
